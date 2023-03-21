import { useRef } from "react"

import ReactDOM from 'react-dom';

interface IDialogProps {
  children: React.ReactNode
  title?: string
  isOpen: boolean
  closeOnOverlayClick?: boolean
  onClose: () => void
}

export function Dialog({
  children,
  title,
  isOpen,
  closeOnOverlayClick,
  onClose
}: IDialogProps) {
  const modalNodeRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  if (!modalNodeRef.current) {
    const node = document.createElement('div');
    modalNodeRef.current = node;
    document.body.appendChild(node);
  }

  const handleClose = () => {
    onClose && onClose();
    modalNodeRef.current?.remove();
  };

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>,
    modalNodeRef.current as HTMLDivElement
  );
}