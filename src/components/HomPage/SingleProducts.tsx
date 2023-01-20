import React, { Dispatch, SetStateAction } from 'react';
import './SingleProducts.css'
interface deleteBtn{
  productName:string;
  show:boolean;
}
interface IPROPS{
  name:string;
  image:string;
  brand:string;
  price:string;
  size:string;
  category:string;
  year:string;
  getDelete:deleteBtn[];
  setDelete: React.Dispatch<SetStateAction<deleteBtn[]>>;
}
function SingleProducts({name,image,brand,price,size,category,year,getDelete,setDelete}:IPROPS){

  const handleDelete=()=>{
      setDelete([{productName:name,show:true}]);
      // console.log(getDelete);
  }
  return (
    <div className='SingleProducts-container'>
      <img className='display-img' src={image} alt={name} />
      <p>name: {name}</p>
      <p>price: {price}</p>
      <button className='delete-btn' onClick={handleDelete}>Delete</button>
      <button className='Details-btn' onClick={handleDelete}>Details</button>
    </div>
  )
}
export default SingleProducts