import React from "react";
import { useState } from "react";
import store from "../redux/store";
import { addItemAction } from "../redux/action";
const Product = ({ product }) => {
  const { name, image, price } = product;
  const [plateNum,setPlateNum] = useState(0)
  const onChange = (e) =>{
    let value = e.target.value
    if(e.target.value.length > 1 && e.target.value[0] === '0'){
        value =  e.target.value.slice(1)
    } else if (e.target.value.length === 0){
        value = 0
    }
    setPlateNum(value)
  }
  const addToCart = () => {
    store.dispatch(addItemAction({
      check : false,
      name,
      image,
      price,
      plateNum
    }))
    setPlateNum(0)
  }
  const plus = () => {
    setPlateNum(prev => prev + 1)
  }
  const minus = () => {
    if(plateNum > 0){
      setPlateNum(prev => prev - 1)
    }
  }
  return (
    <div className="w-full h-36 border flex place-content-evenly">
      <img className="h-full" src={image} alt="圖片" />
      <div className="flex flex-col justify-center text-center text-2xl">
        <p>ELEIKO槓片</p>
        <p>{name}</p>
        <p>售價:{price}元/片</p>
        <button className="text-orange-700" onClick={addToCart}>加入購物車</button>
      </div>
      <div className="flex flex-col text-center">
        <button className="countBtn" style={{'--clr':'#1e9bff'}} onClick={plus}>
        <span>＋</span>
        <i></i>
        </button>
        <input className="text-center focus-visible: outline-none " type='number' min={0} value={plateNum} onChange={onChange}/>
        <button className="countBtn" style={{'--clr':'#ed5a65'}} onClick={minus}>
        <span>–</span>
        <i></i>    
        </button>
      </div>
    </div>
  );
};

export default Product;
