import React, { useContext } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import WarningMessage from '../../../auth/WarningMessage';
import { Body, ButtonComponent, Caption2 } from '../../../ui';
import { DescriptionInput, DefaultInput, DropdownComponent, PasswordInput, AddressInput } from '../../../ui/forms';
import UpdateProfileFormItemContainer from '../UpdateProfileFormItemContainer';
import UpdateProfileGallery from '../UpdateProfileGallery';
import { getIconUrl } from '../../../../../utils/icon-url';
import { appStyles } from '../../../../theme/app-styles';
import { ThemeContext } from '../../../../theme/ThemeContext';

const deviceHeight = Dimensions.get('window').height;

const UpdateProfileBody = () => {
  const { colors, currentTheme } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView style={appStyles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={'always'} showsVerticalScrollIndicator={false}>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Descripción</Caption2>
          <DescriptionInput description={''} onChange={() => { }} />
        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Nombre de la empresa</Caption2>
          <DefaultInput
            field={''}
            fieldValue={'name'}
            placeholder={'Nombre de la empresa'}
            iconElement={
              <Image
                source={{ uri: getIconUrl('users', currentTheme, true) }}
                style={appStyles.inputIcon}
              />
            }
            keyboardType={'default'}
            onChange={() => { }} />
        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Correo corporativo</Caption2>
          <DefaultInput
            field={''}
            fieldValue={'name'}
            placeholder={'Correo corporativo'}
            iconElement={
              <Image
                source={{ uri: getIconUrl('envelope', currentTheme, true) }}
                style={appStyles.inputIcon}
              />
            }
            keyboardType={'email-address'}
            onChange={() => { }}
          />
        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Dirección</Caption2>
          <AddressInput
            field={''}
            onBlur={() => { }}
            onChange={() => { }}
          />
        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Teléfono</Caption2>
          <DefaultInput
            field={''}
            fieldValue={'name'}
            placeholder={'Teléfono'}
            iconElement={
              <Image
                source={{ uri: getIconUrl('phone', currentTheme, true) }}
                style={appStyles.inputIcon}
              />
            }
            keyboardType={'phone-pad'}
            onChange={() => { }} />
        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Categoría</Caption2>
          <DropdownComponent items={[{ label: 'Item 1', value: 'Item1' }]} />
          <DefaultInput
            field={''}
            fieldValue={'name'}
            placeholder={'Escribe tu categoría'}
            iconElement={
              <Image
                source={{ uri: getIconUrl('mall', currentTheme, true) }}
                style={appStyles.inputIcon}
              />
            }
            keyboardType={'default'}
            onChange={() => { }}
          />
        </UpdateProfileFormItemContainer>
        <UpdateProfileGallery />
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Horario de atención</Caption2>

        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Instagram</Caption2>
          <DefaultInput
            field={''}
            fieldValue={'name'}
            placeholder={'Instagram'}
            iconElement={
              <Image
                source={{ uri: getIconUrl('instagram', currentTheme, true) }}
                style={appStyles.inputIcon}
              />
            }
            keyboardType={'default'}
            onChange={() => { }} />
        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>WhatsApp</Caption2>
          <DefaultInput
            field={''}
            fieldValue={'name'}
            placeholder={'WhatsApp'}
            iconElement={
              <Image
                source={{ uri: getIconUrl('whatsapp', currentTheme, true) }}
                style={appStyles.inputIcon}
              />
            }
            keyboardType={'phone-pad'}
            onChange={() => { }} />
        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Contraseña</Caption2>
          <PasswordInput field={''} fieldValue={'password'} placeholder={'Contraseña'} onChange={() => { }} />
        </UpdateProfileFormItemContainer>
        <UpdateProfileFormItemContainer>
          <Caption2 customColor={colors.mainText}>Repetir contraseña</Caption2>
          <PasswordInput field={''} fieldValue={'password'} placeholder={'Repetir contraseña'} onChange={() => { }} />
          <WarningMessage text={'Contraseñas no coinciden'} />
        </UpdateProfileFormItemContainer>
        <ButtonComponent>
          <Body customColor={colors.brandWhite}>Guardar cambios</Body>
        </ButtonComponent>
      </ScrollView>
    </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
  contentContainer: { gap: 20, marginTop: 20, paddingBottom: deviceHeight * 0.1 },
});

export default UpdateProfileBody;
