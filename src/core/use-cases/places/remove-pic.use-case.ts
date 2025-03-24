import { deleteCloudinaryPic } from '../../../presentation/hooks/useCloudinaryOperation';

export const removePic = async (url: string): Promise<void> => await deleteCloudinaryPic(url);
