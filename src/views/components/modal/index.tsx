import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

const VComponentModal: React.FC<MComponentGlobalModal.ModalProperties> = ({
    isOpen,
    size = "md",
    title,
    content,
    footer,
    onClose
}): JSX.Element => {

    return (<Modal isOpen={isOpen} size={size} isCentered={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {title !== undefined && (<ModalHeader paddingBottom={0} marginBottom={0}>
          {title}
        </ModalHeader>)}
        <ModalCloseButton />
        <ModalBody>
          {content}
        </ModalBody>
        {footer !== undefined && (<ModalFooter>
          {footer}
        </ModalFooter>)}
      </ModalContent>
    </Modal>)
}

export default VComponentModal