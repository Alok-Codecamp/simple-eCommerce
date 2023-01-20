import React, { Dispatch, SetStateAction } from 'react';
import './SingleProducts.css'
interface deleteBtn{
  productName:string;
  show:boolean;
}
interface IPROPS{
  name:string;
  brand:string;
  price:string;
  size:string;
  category:string;
  year:string;
  getDelete:deleteBtn[];
  setDelete: React.Dispatch<SetStateAction<deleteBtn[]>>;
}
function SingleProducts({name,brand,price,size,category,year,getDelete,setDelete}:IPROPS){

  const handleDelete=()=>{
      setDelete([{productName:name,show:true}]);
      // console.log(getDelete);
  }
  return (
    <div className='SingleProducts-container'>
      <p>name: {name}</p>
      <p>brand: {brand}</p>
      <p>size: {size}</p>
      <p>price: {price}</p>
      <p>brand: {brand}</p>
      <button className='delete-btn' onClick={handleDelete}>Delete</button>
      <button className='Details-btn'>Details</button>
    </div>
  )
}
export default SingleProducts