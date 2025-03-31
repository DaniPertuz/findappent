import { useState } from 'react';

export const usePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return {
    passwordVisibility,
    handlePasswordVisibility,
  };
};
