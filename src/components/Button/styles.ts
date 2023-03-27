import { styled } from "@/styles/stitches.config";

export const Button = styled('button', {
  cursor: 'pointer',
  maxHeight: '5rem',
  border: 0,
  backgroundColor: '$white',

  variants: {
    variant: {
      text: {
        cursor: 'pointer',
        maxHeight: '5rem',
        borderRadius: '3rem',
        padding: '1.4rem',
        backgroundColor: '$white',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.4rem',
      },
      icon: {
        margin: '1rem 3.2rem 1rem 1rem',
        padding: '0.4rem',
      }
    }
  }
});