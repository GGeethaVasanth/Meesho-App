import React,{useState} from 'react'
import '../Component/style.css';
import Categories from './Categories';
import search from '../Component/images/search.svg'



const Category = () => {
  const[data, setData]=useState(Categories); 
  const filterResult=(categoryItem)=>{
    const result =Categories.filter((currentData)=>{
      return currentData.Category===categoryItem;
    });
    setData(result);
  }
  return (
    
    <>
    <h1 className='text-center mt-5'>Products for You</h1>

<div className=" d-flex flex-row">
  <div className="row">
    <div className="col-md-3 mt-3 mx-5">
        {/* <div className="btn btn-warning w-100 p-2 mx-2 fs-4 fw-bold" onClick={()=>setData(Categories)}>All</div>
        <div className="btn btn-warning w-100 p-2 mx-2 fs-4 fw-bold" onClick={()=>filterResult('Men')}>Men</div>
        <div className="btn btn-warning w-100 p-2 mx-2 fs-4 fw-bold" onClick={()=>filterResult('Women')}>Women</div>
        <div className="btn btn-warning w-100 p-2 mx-2 fs-4 fw-bold" onClick={()=>filterResult('Kids')}>Kids</div> */}

        <div className='w-100 d-block border border-2 border-rounded-pill'>
          <img className='w-25 muted' src= {search} alt="search" /> 
          <input type="text" className='w-100 p-2 m-2 border-none ' />
          </div>
    </div>
  </div>


  <div className="col-md-9 mt-4">
    <div className="row">
      {data.map((values)=>{
        const {id,title,price,image}=values;
        return(
      <>
          <div className="col-md-4 mb-4" key={id}>
        <div className="card" >
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
          <p className="card-title">{title}</p>
          <h4>Price : {price}</h4>
          <p className="card-text">Free Delivery</p>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>          
      </>
        )
      }
      )}
      

    
  </div>
</div>
</div>
  

    </>

    

    
  )
}

export default Category