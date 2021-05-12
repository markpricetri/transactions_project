import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  & > div.modal-content {
    padding: 0.75rem;
    padding-left: 2rem;
    background-color: var(--color-background);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const ModalHeader = styled.div`
  background-color: var(--color-card-background-top);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 0.5rem;
  & > h2 {
    text-align: center;
    margin: 0;
    color: white;
  }
`;

const ModalActions = styled.div`
  padding: 0.25rem;
  display: flex;
  justify-content: flex-end; 
`;

export { Backdrop, Modal, ModalActions, ModalHeader };