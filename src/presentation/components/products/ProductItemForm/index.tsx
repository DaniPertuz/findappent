import React, { FC, useContext, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IProduct } from '../../../../core/entities';
import { useProductStore } from '../../../../store/productStore';
import { deviceHeight } from '../../../../utils/dimensions';
import { getIconUrl } from '../../../../utils/icon-url';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { WarningMessage } from '../../auth';
import FormItemContainer from '../../profile/ProfileEdit/FormItemContainer';
import { Body, ButtonComponent, Caption2, KeyboardAvoidingViewComponent } from '../../ui';
import { CategoryInput, DefaultInput, DescriptionInput } from '../../ui/forms';
import { appStyles } from '../../../theme/app-styles';
import { ThemeContext } from '../../../theme/ThemeContext';
import { usePlaceStore } from '../../../../store';

interface Props {
  product: IProduct;
  newItem?: boolean;
}

const ProductItemForm: FC<Props> = ({ product, newItem }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const place = usePlaceStore(state => state.place);
  const { addProduct, deleteProduct, updateProduct } = useProductStore();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const initialValues: IProduct = {
    name: product.name || '',
    description: product.description || '',
    price: product.price || 0,
    img: product.img || '',
    categories: product.categories || [],
    place: product.place || '',
    currency: product.currency || 'COP', // Assuming currency is always COP for now
  };

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

    if (original.img !== current.img?.trim()) {
      payload.img = current.img?.trim();
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

  const onSubmit = async (values: any) => {
    try {
      setLoading(true);

      const productToSave: IProduct = {
        ...values,
        price: Number(values.price),
        place: product.place,
        name: values.name.trim(),
        description: values.description.trim(),
        categories: values.categories.map((cat: string) => cat.trim()),
        currency: 'COP', // Assuming currency is always COP for now
        img: values.img?.trim() || getIconUrl('fa_blue', currentTheme, false),
      };

      if (newItem) {
        const add = await addProduct(productToSave);
        if (add) {
          navigation.goBack();
        }
      } else if (product._id) {
        const updatePayload = buildUpdatePayload(product, values);
        const updateAction = await updateProduct(product._id, updatePayload);
        if (updateAction) {
          navigation.goBack();
        }
      }
    } catch (error) {
      setLoading(false);
      return;
    }
  };

  const onDelete = async () => {
    try {
      setLoadingDelete(true);
      const response = await deleteProduct(product._id!);
      if (response) {
        setLoadingDelete(false);
        navigation.goBack();
      }
    } catch (error) {
      setLoadingDelete(false);
      return;
    }
  };

  return (
    <KeyboardAvoidingViewComponent>
      <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={'always'} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ handleChange, setFieldValue, errors, touched, values }) => (
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
              <Image
                source={{ uri: values.img || getIconUrl('product', currentTheme, false) }}
                style={styles.image}
              />
              <ButtonComponent disabled={loading} loading={loading} onPress={() => onSubmit(values)}>
                <Body customColor={colors.brandWhite}>{newItem ? 'Agregar' : 'Guardar cambios'}</Body>
              </ButtonComponent>
              <ButtonComponent customStyle={{ backgroundColor: colors.error }} disabled={loadingDelete} loading={loadingDelete} onPress={onDelete}>
                <Body customColor={colors.brandWhite}>Eliminar</Body>
              </ButtonComponent>
            </View>
          )}
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
