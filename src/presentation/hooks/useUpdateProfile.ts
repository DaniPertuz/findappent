import { useContext, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { getCoords } from './getLocation';
import { IPlace } from '../../core/entities';
import { Location } from '../../interfaces/app.interface';
import { ThemeContext } from '../theme/ThemeContext';

export const useUpdateProfile = ({ place }: { place: IPlace; }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState('');
  const [cityState, setCityState] = useState('');
  const [country, setCountry] = useState('');
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [coordinates, setCoordinates] = useState<Location>({ latitude: 0, longitude: 0 });

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

  const splitAddress = (addressValue: string) => {
    const sp = addressValue.split(', ');
    sp.shift();
    setCity(sp[0]);
    setCityState(sp[1]);
    setCountry(sp[2]);
  };

  const onSubmit = async (values: any) => {
    if (values.password !== values.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    setPasswordMatch(true);

    // const pics = await uploadPics(response!);

    if (values.password.length === 0 && values.confirmPassword.length === 0) {
      // const data: IPlace = {
      //   name: values.name,
      //   description: values.description,
      //   category: values.category,
      //   address,
      //   email: place.email,
      //   coords: coordinates!,
      //   phone: Number(values.phone),
      //   whatsapp: values.whatsapp || '',
      //   instagram: values.instagram || '',
      //   city,
      //   cityState,
      //   country,
      //   schedule: values.schedule,
      //   pics: values.pics,
      //   status: true,
      // };
      // console.log('Submit', values);
      // updatePlace(place._id!, data);
    }

  };

  useEffect(() => {
    splitAddress(address);
  }, [coordinates, address]);

  useEffect(() => {

  }, []);

  return {
    address,
    city,
    cityState,
    colors,
    coordinates,
    country,
    currentTheme,
    initialValues,
    passwordMatch,
    showCustomInput,
    validationSchema,
    handleCoords,
    onSubmit,
    setAddress,
    setShowCustomInput,
  };
};
