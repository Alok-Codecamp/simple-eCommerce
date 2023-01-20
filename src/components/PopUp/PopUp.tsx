import { type } from '@testing-library/user-event/dist/type'
import React, { SetStateAction } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import './PopUp.css';
// interface for state setter function 
interface iProps{
  name:string;
  image:string;
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
function PopUp({name,image,brand,size,price,category,year,show,setShowModal,setConfirmDelete}:iProps) {
  const handleClose=()=>{
    setShowModal(false);
  }
  const handleConfirmDelete=()=>{
    setConfirmDelete(true);
  }
  return (
    <div>
       <Modal className='Modal-container' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-data-container'>
          <div className='img-part'>
          <img className='popup-img' src={image} alt={name} />
          <p>{name}</p>
          </div>
          <div className='details-part'> 
          <p>Name: {name}</p>
          <p>Price: {price}</p>
          <p>Brand: {brand}</p>
          <p>Size: {size}</p>
          <p>Category: {category}</p>
          </div>
          </div>
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