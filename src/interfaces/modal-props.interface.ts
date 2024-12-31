export interface ModalProps {
  closeIcon?: string;
  title?: string;
  uri?: string;
  modalVisible?: boolean;
  onPress?: () => void;
  setModalVisible?: (value: boolean) => void;
}
