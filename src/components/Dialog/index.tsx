import { useEffect, useRef } from "react"

import ReactDOM from 'react-dom';

import * as S from './styles'

import { X } from 'phosphor-react'
import { Button } from "../Button";

interface IDialogProps {
  children: React.ReactNode
  title?: string
  isOpen: boolean
  closeOnOverlayClick?: boolean
  onClose: () => void
}

const ESCAPE_KEY = 27
const TAB_KEY = 9

/**
 * Dialog component
 *
 * @param children The content of the dialog
 * @param title The title of the dialog
 * @param isOpen Whether the dialog is open or not
 * @param closeOnOverlayClick Whether the dialog should close when clicking on the overlay
 * @param onClose The function to be called when the dialog is closed
 *
 * @returns a dialog component styled
 * @example
 * <Dialog isOpen={true} onClose={() => {}}>
 *  <p>Dialog content</p>
 * </Dialog>
 * <Dialog isOpen={true} title="Dialog title" onClose={() => {}}>
 *  <p>Dialog content</p>
 * </Dialog>
 * <Dialog isOpen={true} title="Dialog title" closeOnOverlayClick onClose={() => {}}>
 *  <p>Dialog content</p>
 * </Dialog>
 */
export function Dialog({
  children,
  title,
  isOpen,
  closeOnOverlayClick,
  onClose
}: IDialogProps) {
  const handleTabKey = (e: KeyboardEvent) => {
    if (modalNodeRef.current === null) return

    const focusableModalElements = modalNodeRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
    );

    if (focusableModalElements.length === 0) return

    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      (firstElement as HTMLElement).focus();
      e.preventDefault();
    }
  };


  const handleClose = () => {
    onClose && onClose();
  };

  const keyListenersMap = new Map([
    [ESCAPE_KEY, handleClose],
    [TAB_KEY, handleTabKey]
  ]);

  useEffect(() => {
    const handleEscapePress = (e: KeyboardEvent) => {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    };

    document.addEventListener("keydown", handleEscapePress);
    return () => document.removeEventListener("keydown", handleEscapePress);
  });

  const modalNodeRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  if (!modalNodeRef.current) {
    const node = document.createElement('div');
    modalNodeRef.current = node;
    document.body.appendChild(node);
  }

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <S.ModalOverlay onClick={handleOverlayClick} role="dialog">
      <S.Modal onClick={(e) => e.stopPropagation()} data-testid="modal">
        <S.ModalHeader>
          {title && <S.Title>{title}</S.Title>}
          <Button variant="icon" onClick={onClose} aria-label="Close" data-testid='close-button'>
            <X size={24} />
          </Button>
        </S.ModalHeader>
        <S.ModalContent>
          {children}
        </S.ModalContent>
      </S.Modal>
    </S.ModalOverlay>,
    modalNodeRef.current as HTMLDivElement
  );
}