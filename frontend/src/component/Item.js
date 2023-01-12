import React, { useState } from "react";
import { motion } from "framer-motion";
import store from "../redux/store";
import { deleteItemAction, checkToPay , setPlateNumFromCart} from "../redux/action";
const Item = ({ item , index}) => {
  const {check, name, image, price, plateNum } = item;
  const onChange = (e) => {
    let value = e.target.value;
    if (e.target.value.length > 1 && e.target.value[0] === "0") {
      value = e.target.value.slice(1);
    } else if (e.target.value.length === 0) {
      value = 0;
    }
    store.dispatch(setPlateNumFromCart({index,plateNum : value}))
  };
  const plus = () => {
    store.dispatch(setPlateNumFromCart({index,plateNum : (Number(plateNum)+1).toString()}))
  };
  const minus = () => {
    if (Number(plateNum) > 0) {
      store.dispatch(setPlateNumFromCart({index,plateNum : (Number(plateNum)-1).toString()}))
    }
  };
  const deleteItem = () => {
    store.dispatch(deleteItemAction(index))
  }
  const checkBoxClick = () => {
    store.dispatch(checkToPay({index,data:{check : !check, name, image, price, plateNum}}))
  }
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="h-[100px] rounded-xl border"
    >
      <div className="grid grid-cols-5">
        <div className="m-auto text-center">
          <input type="checkbox" onChange={checkBoxClick} checked={check}></input>
          <p>ELEIKO</p>
          <p>{name}</p>
        </div>
        <div>
          <img src={image} alt="as" />
        </div>
        <div>
          <p>單價:</p>
          <p>{price}元/片</p>
          <p>總計:</p>
          <p>{price * plateNum}</p>
        </div>
        <div>
          <button
            className="countBtn"
            style={{ "--clr": "#1e9bff", width: "100%" }}
            onClick={plus}
          >
            <span>＋</span>
            <i></i>
          </button>
          <input
            className="text-center focus-visible: outline-none w-[100%]"
            type="number"
            min={0}
            value={plateNum}
            onChange={onChange}
          />
          <button
            className="countBtn"
            style={{ "--clr": "#ed5a65", width: "100%" }}
            onClick={minus}
          >
            <span>–</span>
            <i></i>
          </button>
        </div>
        <div className="text-center">
          <button className="deleteBtn mt-[25px] text-[red]" onClick={deleteItem} disabled={!check}>刪除</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
