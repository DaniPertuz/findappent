import { useContext, useState } from 'react';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigator';
import { IPlace } from '../../core/entities';
import { Location } from '../../interfaces/app.interface';
import { useAuthStore, useGalleryStore, usePlaceStore } from '../../store';
import { getCoords } from './getLocation';
import { usePlaceGallery } from './usePlaceGallery';
import { ThemeContext } from '../theme/ThemeContext';

export const useUpdateProfile = ({ place }: { place: IPlace; }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState('');
  const [cityState, setCityState] = useState('');
  const [country, setCountry] = useState('');
  const [placeSchedule, setPlaceSchedule] = useState<string[]>(place.schedule);
  const [loading, setLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [coordinates, setCoordinates] = useState<Location>({ latitude: 0, longitude: 0 });
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { updateUserPassword } = useAuthStore();
  const { response, clearResponse } = useGalleryStore();
  const { updatePlace } = usePlaceStore();
  const { uploadPics } = usePlaceGallery();

  const initialValues: IPlace = {
    name: place.name ?? '',
    description: place.description ?? '',
    category: place.category ?? '',
    address: place.address ?? '',
    email: place.email ?? '',
    coords: place.coords ?? { latitude: 0, longitude: 0 },
    phone: place.phone ?? 0,
    instagram: place.instagram ?? '',
    whatsapp: place.whatsapp ?? 0,
    city: place.city ?? '',
    cityState: place.cityState ?? '',
    country: place.country ?? '',
    schedule: place.schedule ?? [],
    pics: place.pics ?? [],
    status: place.status ?? false,
    videos: place.videos ?? [],
  };

  const validationSchema = Yup.object({
    description: Yup.string(),
    instagram: Yup.string(),
    name: Yup.string().required('Nombre es requerido'),
    email: Yup.string().email('Revise el formato del correo'),
    address: Yup.string().required('Dirección es requerida'),
    category: Yup.string().required('Categoría es requerida'),
    password: Yup.string(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no son iguales'),
    phone: Yup.number().required('Teléfono es requerido'),
    whatsapp: Yup.number(),
  });

  const handleCoords = async (setFieldValue: (field: string, value: any) => void) => {
    try {
      const { lat, lng } = await getCoords(address);
      if (lat && lng) {
        const newCoordinates = { latitude: lat, longitude: lng };
        setCoordinates(newCoordinates);
        setFieldValue('coords', newCoordinates);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSchedule = (schedule: string[]) => setPlaceSchedule(schedule);

  const getModifiedFields = (initial: any, current: any) => {
    const modified: any = {};

    Object.keys(current).forEach((key) => {
      const isEqual = JSON.stringify(current[key]) === JSON.stringify(initial[key]);
      if (!isEqual) {
        modified[key] = current[key];
      }
    });

    return modified;
  };

  const splitAddress = (comingAddress: string) => {
    const sp = comingAddress.split(', ');
    setAddress(sp[0]);
    setCity(sp[1]);
    setCityState(sp[2]);
    setCountry(sp[3]);
  };

  const onSubmit = async (values: any) => {
    setLoading(true);
    if ((values.password.length > 0 && values.confirmPassword.length > 0) && values.password !== values.confirmPassword) {
      setPasswordMatch(false);
      setLoading(false);
      return;
    }

    try {
      const modifiedFields = getModifiedFields(initialValues, values);

      if (JSON.stringify(placeSchedule) !== JSON.stringify(values.schedule)) {
        modifiedFields.schedule = placeSchedule;
      }

      if (response) {
        const uploadedPics = await uploadPics(values.pics);
        if (uploadedPics) {
          modifiedFields.pics = uploadedPics;
        } else if (getModifiedFields({ pics: initialValues.pics }, { pics: values.pics }).pics) {
          modifiedFields.pics = values.pics;
        }
        clearResponse();
      }

      if ((values.password.length > 0 && values.confirmPassword.length > 0) && values.password === values.confirmPassword) {
        setPasswordMatch(true);
        await updateUserPassword(place.email, values.password);
      }

      if (Object.keys(modifiedFields).length > 0) {
        delete modifiedFields.password;
        delete modifiedFields.confirmPassword;

        if (modifiedFields.address) {
          splitAddress(modifiedFields.address);
        }
        const fullAddress = { address, city, cityState, country };
        const updatePayload = {
          ...modifiedFields,
          ...(modifiedFields.address ? fullAddress : {}),
        };

        const resp = await updatePlace(place._id!, updatePayload);
        if (resp) {
          navigation.goBack();
        }
      }
    } catch (error: any) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    address,
    colors,
    coordinates,
    currentTheme,
    initialValues,
    loading,
    passwordMatch,
    placeSchedule,
    showCustomInput,
    validationSchema,
    handleCoords,
    handleSchedule,
    onSubmit,
    setAddress,
    setShowCustomInput,
  };
};
