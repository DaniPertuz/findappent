export interface ModalProps {
  closeIcon?: string;
  hasTitle?: boolean;
  uri?: string;
  modalVisible?: boolean;
  onPress?: () => void;
  setModalVisible?: (value: boolean) => void;
}
