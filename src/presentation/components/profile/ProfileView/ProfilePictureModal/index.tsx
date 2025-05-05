import React, { FC, useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { ModalProps } from '../../../../../interfaces/modal-props.interface';
import ModalHeader from '../../../ui/ModalHeader';
import PictureContainer from './PictureContainer';
import PicturePickerButtons from './PicturePickerButtons';
import ProfilePictureModalContainer from './ProfilePictureModalContainer';
import ModalProfilePictureContainer from './ModalProfilePictureContainer';
import { useAuthStore } from '../../../../../store';
import { useGallery } from '../../../../hooks/useGallery';

const ProfilePictureModal: FC<ModalProps> = ({ modalVisible, setModalVisible }) => {
  const [displayThumb, setDisplayThumb] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const user = useAuthStore(state => state.authResponse.user);
  const { loading, profilePicture, setProfilePicture, selectProfilePicture, takeProfilePicture, uploadPicture } = useGallery();

  useEffect(() => {
    const hasProfileAssets = profilePicture?.assets !== undefined;
    if (user?.photo?.length! > 0) {
      setDisplayThumb(false);
    } else if (modalVisible) {
      setDisplayThumb(!hasProfileAssets);
    } else {
      setDisplayThumb(hasProfileAssets);
      setProfilePicture(undefined);
    }
  }, [modalVisible, profilePicture, setProfilePicture, user]);

  useEffect(() => {
    if (!modalVisible) {
      setProfilePicture(undefined);
      setIsUploaded(false);
    }
  }, [modalVisible, setProfilePicture]);

  useEffect(() => {
    if (!loading) {
      setModalVisible!(false);
    }
  }, [loading, setModalVisible]);

  const profileImagePath = (displayThumb || user?.photo?.length === 0)
    ? require('../../../../../assets/icons/fa_complete_color.png')
    : { uri: profilePicture ? profilePicture.assets?.[0]?.uri : user?.photo };

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible!(!modalVisible);
      }}
    >
      <PictureContainer>
        <ModalHeader title={'Foto de perfil'} closeIcon={'close'} onPress={() => setModalVisible!(false)} />
        <ModalProfilePictureContainer>
          <ProfilePictureModalContainer profileImagePath={profileImagePath} />
          <PicturePickerButtons
            loading={loading}
            showUploadButton={profilePicture?.assets !== undefined && (!isUploaded || loading)}
            selectProfilePicture={selectProfilePicture}
            takeProfilePicture={takeProfilePicture}
            updatePlacePhoto={async () => {
              setIsUploaded(false);
              await uploadPicture();
              setIsUploaded(true);
            }} />
        </ModalProfilePictureContainer>
      </PictureContainer>
    </Modal>
  );
};

export default ProfilePictureModal;
