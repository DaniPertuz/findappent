import React from 'react';
import BackButton from '../../../ui/BackButton';
import UpdateProfileHeaderContainer from '../UpdateProfileHeaderContainer';
import UpdateProfileHeaderTitle from '../UpdateProfileHeaderTitle';

const UpdateProfileHeader = () => {
  return (
    <UpdateProfileHeaderContainer>
      <BackButton />
      <UpdateProfileHeaderTitle />
    </UpdateProfileHeaderContainer>
  );
};

export default UpdateProfileHeader;
