import { Button } from "@/components/Button";
import { Dialog } from "@/components/Dialog";
import { useState } from "react";

import * as S from './styles'

export function HomePage() {
  const [modalLongTextOpen, setModalLongTextOpen] = useState(false);
  const [modalSmallTextOpen, setModalSmallTextOpen] = useState(false);

  const handleOpenModalWithLongText = () => {
    setModalLongTextOpen(true);
  };

  const handleOpenModalWithSmallText = () => {
    setModalSmallTextOpen(true);
  };

  const handleCloseModalWithLongText = () => {
    setModalLongTextOpen(false);
  };

  const handleCloseModalWithSmallText = () => {
    setModalSmallTextOpen(false);
  };


  return (
    <S.Container>
      <S.ButtonsWrapper>
        <Button variant='text' onClick={handleOpenModalWithLongText}>Open Long Text Modal with Close on Overlay True</Button>
        <Button variant='text' onClick={handleOpenModalWithSmallText}>Open Small Text Modal with Close on Overlay False</Button>
      </S.ButtonsWrapper>


      <Dialog isOpen={modalLongTextOpen} onClose={handleCloseModalWithLongText} closeOnOverlayClick title="Title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Dialog>

      <Dialog isOpen={modalSmallTextOpen} onClose={handleCloseModalWithSmallText} closeOnOverlayClick={false} title="Title">
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis.Si num tem leite então bota uma pinga aí cumpadi!Suco de cevadiss, é um leite divinis.
        </p>
      </Dialog>
    </S.Container>
  );
}