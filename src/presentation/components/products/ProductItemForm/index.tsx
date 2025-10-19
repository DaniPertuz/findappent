import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { WarningMessage } from '../../auth';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { IProduct } from '../../../../core/entities';
import { useProductGallery } from '../../../hooks/useProductGallery';
import { handleUpdateCloudinaryPic } from '../../../hooks/useCloudinaryOperation';
import { useProductStore } from '../../../../store/productStore';
import { deviceHeight } from '../../../../utils/dimensions';
import { getIconUrl } from '../../../../utils/icon-url';
import { useAuthStore, usePlaceStore } from '../../../../store';
import FormItemContainer from '../../profile/ProfileEdit/FormItemContainer';
import GalleryItemsList from '../../profile/ProfileEdit/products/GalleryItemsList';
import GalleryQueryModal from '../../profile/ProfileEdit/products/GalleryQueryModal';
import { Body, ButtonComponent, Caption2, KeyboardAvoidingViewComponent } from '../../ui';
import { CategoryInput, DefaultInput, DescriptionInput } from '../../ui/forms';
import { appStyles } from '../../../theme/app-styles';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  product: IProduct;
  newItem?: boolean;
}

const ProductItemForm: FC<Props> = ({ product, newItem }) => {
  const initialValues: IProduct = {
    name: product.name || '',
    description: product.description || '',
    price: product.price || 0,
    imgs: product.imgs || [],
    categories: product.categories || [],
    place: product.place || '',
    currency: product.currency || 'COP', // Assuming currency is always COP for now
  };
  const { colors, currentTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const user = useAuthStore(state => state.authResponse.user);
  const place = usePlaceStore(state => state.place);
  const { addProduct, deleteProduct, updateProduct } = useProductStore();
  const { addProductPhoto, addProductPics, productImages } = useProductGallery({
    initialImages: product.imgs || [],
  });
  const formikRef = useRef<any>(null);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const diff = (place?.premium === 1 ? 1 : 2) - (product.imgs ? product.imgs.length : 0);
  const amount = place?.premium === 1
    ? 1
    : place?.premium === 2
      ? Math.max(diff, 0)
      : 100;

  const validationSchema = Yup.object({
    name: Yup.string().required('Nombre es requerido'),
    description: Yup.string(),
    price: Yup.number()
      .min(0, 'El precio no puede ser negativo')
      .required('El precio es requerido'),
    img: Yup.string().url('La URL de la imagen no es válida'),
    categories: Yup.array().of(Yup.string().required()).min(1, 'Agrega al menos una categoría'),
    place: Yup.string(),
  });

  const buildUpdatePayload = (original: IProduct, current: any) => {
    const payload: Partial<IProduct> = {};

    if (original.name !== current.name.trim()) {
      payload.name = current.name.trim();
    }

    if (original.description !== current.description.trim()) {
      payload.description = current.description.trim();
    }

    if (original.price !== Number(current.price)) {
      payload.price = Number(current.price);
    }

    if (
      Array.isArray(current.imgs) &&
      JSON.stringify(original.imgs) !== JSON.stringify(current.imgs)
    ) {
      payload.imgs = current.imgs;
    }

    const cleanedCategories = current.categories.map((cat: string) => cat.trim());
    if (
      original.categories.length !== cleanedCategories.length ||
      !original.categories.every((cat, i) => cat === cleanedCategories[i])
    ) {
      payload.categories = cleanedCategories;
    }

    return payload;
  };

  const onSubmit = async (values: IProduct) => {
    try {
      setLoading(true);

      const currentImgs = productImages.length > 0 ? productImages : product.imgs || [];

      const localImages = currentImgs.filter(img => img.startsWith('file://'));
      const remoteImages = currentImgs.filter(img => !img.startsWith('file://'));

      let uploadedImages: string[] = [];
      if (localImages.length > 0) {
        const data = {
          assets: localImages.map(uri => ({
            uri,
            type: 'image/jpeg',
            fileName: uri.split('/').pop(),
          })),
        };

        uploadedImages = await handleUpdateCloudinaryPic({
          data,
          userId: user?._id!,
          profile: false,
          deleteExisting: place?.premium === 1,
          existingImg: remoteImages,
        });
      }

      let finalImgs: string[] = [];
      const mergedImgs = [...uploadedImages, ...remoteImages];

      switch (place?.premium) {
        case 1:
          finalImgs = uploadedImages.length > 0 ? uploadedImages : remoteImages;
          break;
        case 2:
          finalImgs = mergedImgs.slice(0, 2);
          break;
        default:
          finalImgs = mergedImgs;
      }

      formikRef.current.setFieldValue('imgs', finalImgs);

      const productToSave: IProduct = {
        ...values,
        name: values.name.trim(),
        description: values.description.trim(),
        price: Number(values.price),
        categories: values.categories.map(cat => cat.trim()),
        currency: 'COP',
        place: product.place,
        imgs: finalImgs,
      };

      if (newItem) {
        const add = await addProduct(productToSave);
        if (add) { }
      } else if (product._id) {
        const updatePayload = buildUpdatePayload(product, productToSave);
        const updateAction = await updateProduct(product._id, updatePayload);
        if (updateAction) { }
      }

    } catch (error) {
      console.error('Error al guardar producto:', error);
    } finally {
      setLoading(false);
      navigation.goBack();
    }
  };

  const onDelete = async () => {
    try {
      setLoadingDelete(true);
      const responseDelete = await deleteProduct(product._id!);
      if (responseDelete) {
        setLoadingDelete(false);
        navigation.goBack();
      }
    } catch (error) {
      setLoadingDelete(false);
      return;
    }
  };

  const addProductImage = () => setModalVisible(true);

  useEffect(() => {
    if (formikRef.current && productImages.length > 0) {
      formikRef.current.setFieldValue('imgs', productImages);
    }
  }, [productImages]);

  return (
    <KeyboardAvoidingViewComponent>
      <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={'always'} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ handleChange, setFieldValue, errors, touched, values }) => {
            return (
              <View style={styles.fieldsGap}>
                <FormItemContainer>
                  <Caption2 customColor={colors.mainText}>Nombre del producto</Caption2>
                  <DefaultInput
                    field={values.name}
                    fieldValue={'name'}
                    placeholder={'Nombre del producto'}
                    iconElement={
                      <Image
                        source={{ uri: getIconUrl('edit', currentTheme, true) }}
                        style={appStyles.inputIcon}
                      />
                    }
                    keyboardType={'default'}
                    onChange={handleChange('name')}
                  />
                  {(errors.name && touched.name) && <WarningMessage text={String(errors.name)} />}
                </FormItemContainer>
                <FormItemContainer>
                  <Caption2 customColor={colors.mainText}>Descripción</Caption2>
                  <DescriptionInput description={values.description} onChange={handleChange('description')} />
                  {errors.description && <WarningMessage text={String(errors.description)} />}
                </FormItemContainer>
                <FormItemContainer>
                  <Caption2 customColor={colors.mainText}>Precio</Caption2>
                  <DefaultInput
                    field={String(values.price)}
                    fieldValue={'phone'}
                    placeholder={'Precio'}
                    iconElement={
                      <Image
                        source={{ uri: getIconUrl('money', currentTheme, true) }}
                        style={appStyles.inputIcon}
                      />
                    }
                    keyboardType={'numeric'}
                    onChange={handleChange('price')}
                  />
                  {(errors.price && touched.price) && <WarningMessage text={String(errors.price)} />}
                </FormItemContainer>
                <FormItemContainer>
                  <Caption2 customColor={colors.mainText}>Categorías</Caption2>
                  <CategoryInput
                    value={values.categories}
                    onChange={(newCategories) => setFieldValue('categories', newCategories)}
                    placeholder={'Agregar categoría'}
                  />
                  {(errors.categories && touched.categories) && <WarningMessage text={String(errors.categories)} />}
                </FormItemContainer>
                <Caption2 customColor={colors.mainText}>{place?.premium === 1 ? 'Imagen' : 'Imágenes'} del producto</Caption2>
                <GalleryItemsList
                  images={productImages.length > 0 ? productImages : values.imgs ?? []}
                  removeImage={(index) => {
                    const updatedImgs = [...values.imgs!];
                    updatedImgs.splice(index, 1);
                    setFieldValue('imgs', updatedImgs);
                  }}
                  onAddImage={addProductImage}
                />
                <GalleryQueryModal addGalleryPics={() => addProductPics(amount)} addPhoto={addProductPhoto} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <ButtonComponent disabled={loading} loading={loading} onPress={() => onSubmit(values)}>
                  <Body customColor={colors.brandWhite}>{newItem ? 'Agregar' : 'Guardar cambios'}</Body>
                </ButtonComponent>
                <ButtonComponent customStyle={{ backgroundColor: colors.error }} disabled={loadingDelete} loading={loadingDelete} onPress={onDelete}>
                  <Body customColor={colors.brandWhite}>Eliminar</Body>
                </ButtonComponent>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingViewComponent>
  );
};

const styles = StyleSheet.create({
  contentContainer: { gap: 20, marginTop: 20, paddingBottom: deviceHeight * 0.1 },
  fieldsGap: { gap: 15 },
  image: {
    borderRadius: 8,
    height: 100,
    marginEnd: 15,
    width: 100,
  },
});

export default ProductItemForm;
