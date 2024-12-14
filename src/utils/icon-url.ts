import { CLOUDINARY_URL } from '../api/cloudinaryIconsAPI';
import { ThemeColor } from '../presentation/theme/ThemeContext';

export const getIconUrl = (iconName: string, currentTheme: ThemeColor, hasWhite: boolean) => {
  const url = `${hasWhite ? `${iconName}${currentTheme === 'light' ? '' : '_white'}` : iconName}`;
  return `${CLOUDINARY_URL}/${url}`;
};
