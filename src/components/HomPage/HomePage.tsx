import React, { ReactComponentElement, ReactElement, ReactNode, useEffect, useState } from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faS,faMagnifyingGlass, fas, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import products from '../../products.json';
import SingleProducts from './SingleProducts';
import { type } from '@testing-library/user-event/dist/type';
import PopUp from '../PopUp/PopUp';
library.add(fas,faMagnifyingGlass);

interface productDataType{
  name: string;
  image: string;
  category: string;
  brand: string;
  size: string;
  price: string;
  year: string;
}
interface modalType{
  productName:string;
  show:boolean;
}

function HomePage() {
  // const defaultData:productDataType={
  //   name: "Product 1",
  //   image: "use any image",
  //   category: "Cloth",
  //   brand: "rebook",
  //   size: "large",
  //   price: "1000",
  //   year: "2022"

  // }
  const [getDelete,setDelete]=useState<modalType[]>([{show:false,productName:""}]);
 const [Year,setYear]=useState<boolean>(false);
 const [shoes,setShoes]=useState<boolean>(false);
 const [getSearch,setSearch]=useState<string>("");
 const [filteredData,setFilteredData]=useState<productDataType[]>([]);
 const [productDetails,setProductDetails]=useState<productDataType[]>([]);
 const [confirmDelete,setConfirmDelete]=useState<boolean>(false)
  const [showModal,setShowModal]=useState<boolean>(false);
const yearhandleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setYear(e.target.checked);
}
const catagoryHangleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setShoes(e.target.checked); 
}
const handleSearch=()=>{
  let searchData;
  searchData=products.filter((data)=>data.name===getSearch);
  setFilteredData(searchData);
  console.log(searchData);
  
  
}

  useEffect(()=>{
    if(Year){
       const tempData= products.filter((data)=>{
        return Number(data.year)===2020
       })
       setFilteredData(tempData); 
    }
    if(shoes){
      const tempData= products.filter((data)=>{
       return data.category==='shoes'
      })
     setFilteredData(tempData);
   }
   else if(!Year&&!shoes){
    setFilteredData(products)
   }
  
  },[Year,shoes])
  useEffect(()=>{
    let deleteIndex:number;
    let deletedData:productDataType;
    let productname:string;
    if(getDelete[0].show===true){
      setShowModal(true);
    productname=getDelete[0]?.productName;  
      deletedData=(products.find((data)=>data.name===productname))!
      setProductDetails([deletedData])  
     };
     if(confirmDelete){
      deleteIndex=products.indexOf(productDetails[0]);
      console.log(deleteIndex);
      console.log(confirmDelete);
      filteredData.splice(deleteIndex,1)
      setShowModal(false); 
      setDelete([{show:false,productName:""}])
      setConfirmDelete(false)

     }
     if(showModal){
      setShowModal(false)
     }
  },[getDelete,confirmDelete,filteredData])
  
  return (
    <>
        <div className="search-box">
                <input type="text" placeholder='Please enter the correct Product Name' onChange={e=>setSearch(e.target.value)}/>
                <button className='search-button'onClick={handleSearch}><FontAwesomeIcon size={'lg'} icon={["fas","magnifying-glass"]}/></button>
            </div>
        <div className="homepage-body">
        <div className='left-sidebar'>
          <div className="products-catagory">
            <ul>
                Year<input type="checkbox" checked={Year} name='year' value={'year'} onChange={yearhandleChange}/> <br/>
                Shoes<input type="checkbox" checked={shoes} name='year' value={'year'} onChange={catagoryHangleChange}/>
            </ul>
          </div>
        </div>
        <div className='products-container'>
          {/* <SingleProducts name={products[0].name}></SingleProducts> */}
          {
            
            filteredData.map((sd)=>{
              
              return Year||shoes? <SingleProducts
               name={sd.name} 
               image={sd.image}
               brand={sd.brand}
               price={sd.price}
               size={sd.size}
               category={sd.category}
               year={sd.year}
               getDelete={getDelete}
               setDelete={setDelete} ></SingleProducts>:<SingleProducts
               name={sd.name}
               image={sd.image} 
               brand={sd.brand}
               price={sd.price}
               size={sd.size}
               category={sd.category}
               year={sd.year}
               getDelete={getDelete}
               setDelete={setDelete}/>
              
            })
            
          }
          
         
        </div>
        <div>
          {
            showModal?<PopUp
             show={showModal} 
             setConfirmDelete={setConfirmDelete}
             setShowModal={setShowModal}
             name={productDetails[0]?.name}
             image={productDetails[0].image} 
             brand={productDetails[0]?.brand}
             price={productDetails[0]?.price}
             size={productDetails[0]?.size}
             year={productDetails[0]?.year}
             category={productDetails[0]?.category}
             
             />:<></>
          }
           </div>
        </div>
    </>
  )
}

export default HomePage