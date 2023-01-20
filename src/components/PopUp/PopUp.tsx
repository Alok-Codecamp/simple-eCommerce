import { type } from '@testing-library/user-event/dist/type'
import React, { SetStateAction } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
// interface for state setter function 
interface iProps{
  name:string;
  brand:string;
  price:string;
  size:string;
  year:string;
  category:string;
  show:boolean;
  setShowModal:React.Dispatch<SetStateAction<boolean>>;
  setConfirmDelete:React.Dispatch<SetStateAction<boolean>>
}

// component start here 
function PopUp({name,brand,size,price,category,year,show,setShowModal,setConfirmDelete}:iProps) {
  const handleClose=()=>{
    setShowModal(false);
  }
  const handleConfirmDelete=()=>{
    setConfirmDelete(true);
  }
  return (
    <div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{name}</p>
          <p>{brand}</p>
          <p>{price}</p>
          <p>{size}</p>
          <p>{category}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="denger" onClick={handleConfirmDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default PopUp