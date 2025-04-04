import React, { FC } from 'react';
import ProfilePictureButtonsContainer from '../ProfilePictureButtonsContainer';
import ProfilePicturePickerButton from '../ProfilePicturePickerButton';

interface Props {
  loading?: boolean;
  showUploadButton: boolean;
  selectProfilePicture: () => void;
  takeProfilePicture: () => void;
  updatePlacePhoto: () => void;
}

const PicturePickerButtons: FC<Props> = ({ showUploadButton, loading, selectProfilePicture, takeProfilePicture, updatePlacePhoto }) => {
  return (
    <ProfilePictureButtonsContainer>
      {showUploadButton
        ?
        <ProfilePicturePickerButton loading={loading} icon={'check_circle'} onPress={updatePlacePhoto} />
        :
        <>
          <ProfilePicturePickerButton icon={'camera'} onPress={takeProfilePicture} />
          <ProfilePicturePickerButton icon={'gallery'} onPress={selectProfilePicture} />
        </>
      }
    </ProfilePictureButtonsContainer>
  );
};

export default PicturePickerButtons;
