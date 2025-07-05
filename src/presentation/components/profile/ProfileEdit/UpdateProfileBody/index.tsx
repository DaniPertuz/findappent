import React, { FC } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import { Caption2 } from '../../../ui';
import { DescriptionInput, DefaultInput, DropdownComponent, PasswordInput, AddressInput } from '../../../ui/forms';
import { IPlace } from '../../../../../core/entities';
import { categories } from '../../../../../utils/categories';
import { deviceHeight } from '../../../../../utils/dimensions';
import { getIconUrl } from '../../../../../utils/icon-url';
import { useUpdateProfile } from '../../../../hooks/useUpdateProfile';
import WarningMessage from '../../../auth/WarningMessage';
import UpdateProfileButton from '../UpdateProfileButton';
import FormItemContainer from '../FormItemContainer';
import UpdateProfileGallery from '../UpdateProfileGallery';
import UpdateProfileSchedule from '../UpdateProfileSchedule';
import { appStyles } from '../../../../theme/app-styles';

const UpdateProfileBody: FC<{ place: IPlace; }> = ({ place }) => {
  const {
    colors,
    currentTheme,
    initialValues,
    loading,
    passwordMatch,
    showCustomInput,
    validationSchema,
    handleCoords,
    handleSchedule,
    onSubmit,
    setAddress,
    setShowCustomInput,
  } = useUpdateProfile({ place });

  return (
    <KeyboardAvoidingView style={appStyles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={'always'} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <Formik
          initialValues={{
            ...initialValues,
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ handleChange, setFieldValue, errors, touched, values }) => (
            <View style={styles.fieldsGap}>
              <FormItemContainer>
                <Caption2 customColor={colors.mainText}>Descripción</Caption2>
                <DescriptionInput description={values.description} onChange={handleChange('description')} />
                {errors.description && <WarningMessage text={String(errors.description)} />}
              </FormItemContainer>
              <FormItemContainer>
                <Caption2 customColor={colors.mainText}>Nombre de la empresa</Caption2>
                <DefaultInput
                  field={values.name}
                  fieldValue={'name'}
                  placeholder={'Nombre de la empresa'}
                  iconElement={
                    <Image
                      source={{ uri: getIconUrl('users', currentTheme, true) }}
                      style={appStyles.inputIcon}
                    />
                  }
                  keyboardType={'default'}
                  onChange={handleChange('name')}
                />
                {errors.name && <WarningMessage text={String(errors.name)} />}
              </FormItemContainer>
              <FormItemContainer>
                <Caption2 customColor={colors.mainText}>Correo corporativo</Caption2>
                <DefaultInput
                  field={values.email}
                  fieldValue={'email'}
                  placeholder={'Correo corporativo'}
                  iconElement={
                    <Image
                      source={{ uri: getIconUrl('envelope', currentTheme, true) }}
                      style={appStyles.inputIcon}
                    />
                  }
                  keyboardType={'email-address'}
                  onChange={handleChange('email')}
                />
                {errors.email && <WarningMessage text={String(errors.email)} />}
              </FormItemContainer>
              <FormItemContainer>
                <Caption2 customColor={colors.mainText}>Dirección</Caption2>
                <AddressInput
                  field={values.address}
                  onBlur={() => handleCoords(setFieldValue)}
                  onChange={(newAddress) => {
                    setAddress(newAddress);
                    setFieldValue('address', newAddress);
                  }}
                />
                {errors.address && touched.address && <WarningMessage text={String(errors.address)} />}
              </FormItemContainer>
              <FormItemContainer>
                <Caption2 customColor={colors.mainText}>Teléfono</Caption2>
                <DefaultInput
                  field={values.phone ? String(values.phone) : ''}
                  fieldValue={'phone'}
                  placeholder={'Teléfono'}
                  iconElement={
                    <Image
                      source={{ uri: getIconUrl('phone', currentTheme, true) }}
                      style={appStyles.inputIcon}
                    />
                  }
                  keyboardType={'phone-pad'}
                  onChange={handleChange('phone')}
                />
                {errors.phone && <WarningMessage text={String(errors.phone)} />}
              </FormItemContainer>
              <FormItemContainer>
                <Caption2 customColor={colors.mainText}>Categoría</Caption2>
                <DropdownComponent
                  initialValue={values.category}
                  items={categories}
                  placeholder={'Categoría'}
                  onChange={(selectedValue) => {
                    if (selectedValue === 'other') {
                      setFieldValue('category', '');
                      setShowCustomInput(true);
                    } else {
                      setFieldValue('category', selectedValue);
                      setShowCustomInput(false);
                    }
                  }}
                />
                {showCustomInput && (
                  <DefaultInput
                    field={values.category}
                    fieldValue={'category'}
                    placeholder={'Escribe tu categoría'}
                    iconElement={
                      <Image
                        source={{ uri: getIconUrl('mall', currentTheme, true) }}
                        style={appStyles.inputIcon}
                      />
                    }
                    keyboardType={'default'}
                    onChange={(text) => setFieldValue('category', text)}
                  />
                )}
              </FormItemContainer>
              <UpdateProfileGallery />
              <UpdateProfileSchedule
                place={place}
                onChangeSchedule={handleSchedule}
              />
              {place.premium !== 1
                &&
                <FormItemContainer>
                  <Caption2 customColor={colors.mainText}>Instagram</Caption2>
                  <DefaultInput
                    field={values.instagram || ''}
                    fieldValue={'instagram'}
                    placeholder={'Instagram'}
                    iconElement={
                      <Image
                        source={{ uri: getIconUrl('instagram', currentTheme, true) }}
                        style={appStyles.inputIcon}
                      />
                    }
                    keyboardType={'default'}
                    onChange={handleChange('instagram')}
                  />
                  {errors.instagram && <WarningMessage text={String(errors.instagram)} />}
                </FormItemContainer>
              }
              {place.premium !== 1
                &&
                <FormItemContainer>
                  <Caption2 customColor={colors.mainText}>WhatsApp</Caption2>
                  <DefaultInput
                    field={values.whatsapp ? String(values.whatsapp) : ''}
                    fieldValue={'whatsapp'}
                    placeholder={'WhatsApp'}
                    iconElement={
                      <Image
                        source={{ uri: getIconUrl('whatsapp', currentTheme, true) }}
                        style={appStyles.inputIcon}
                      />
                    }
                    keyboardType={'phone-pad'}
                    onChange={handleChange('whatsapp')}
                  />
                  {errors.whatsapp && <WarningMessage text={String(errors.whatsapp)} />}
                </FormItemContainer>
              }
              <FormItemContainer>
                <Caption2 customColor={colors.mainText}>Contraseña</Caption2>
                <PasswordInput field={values.password} fieldValue={'password'} placeholder={'Contraseña'} onChange={handleChange('password')} />
              </FormItemContainer>
              <FormItemContainer>
                <Caption2 customColor={colors.mainText}>Repetir contraseña</Caption2>
                <PasswordInput field={values.confirmPassword} fieldValue={'password'} placeholder={'Repetir contraseña'} onChange={handleChange('confirmPassword')} />
                {!passwordMatch && <WarningMessage text={'Las contraseñas no son iguales'} />}
              </FormItemContainer>
              <UpdateProfileButton loading={loading} values={values} onPress={onSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contentContainer: { gap: 20, marginTop: 20, paddingBottom: deviceHeight * 0.1 },
  fieldsGap: { gap: 15 },
});

export default UpdateProfileBody;
