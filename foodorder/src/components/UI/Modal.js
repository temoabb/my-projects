import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />
}

const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
}

const portalElement = document.getElementById('overlays');


const Modal = ({ children, onClose }) => {
  return <Fragment>
    {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}

    {/* <BackDrop />
    <ModalOverlay>{children}</ModalOverlay> */}
  </Fragment>
};

export default Modal;