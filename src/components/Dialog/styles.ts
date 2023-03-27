import { styled } from "@/styles/stitches.config";

export const ModalOverlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
})

export const Modal = styled('div', {
  position: 'absolute',
  width: '100%',
  backgroundColor: '$white',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
  left: 0,
  bottom: 0,
})

export const ModalHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 1rem 3.2rem 0',
  position: 'sticky',

  '& > svg': {
    marginRight: '3.2rem',
  },
})

export const ModalContent = styled('div', {
  overflowY: 'auto',
  maxHeight: '70vh',
  padding: '0 3.2rem 3.2rem 3.2rem',
  marginBottom: '3.2rem',

  '& > *': {
    fontWeight: '400',
    fontSize: '1.8rem',
    lineHeight: '2.4rem',
  },
})

export const Title = styled('h2', {
  fontSize: '2.2rem',
  fontWeight: '500',
  lineHeight: '3rem',
  marginLeft: '3.2rem',

  overflowY: 'initial',
})