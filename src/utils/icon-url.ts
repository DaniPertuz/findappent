import { CLOUDINARY_URL } from '@env';
import { ThemeColor } from '../presentation/theme/ThemeContext';

export const getIconUrl = (iconName: string, currentTheme: ThemeColor, hasWhite: boolean) => {
  const url = `${hasWhite ? `${iconName}${currentTheme === 'light' ? '' : '_white'}` : iconName}`;
  const iconUrl = `${CLOUDINARY_URL}/${url}`;
  return iconUrl;
};
