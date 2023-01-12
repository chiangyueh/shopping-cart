import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import store from "../redux/store";
import { checkOrUncheckAll} from "../redux/action";
const Cart = () => {
  const {items} = useSelector(state=>state)
  const checkedItems = items.filter(item => item.check === true)
  const checkedAmount =checkedItems.length
  let totalPay = 0;
  for(let key in checkedItems) totalPay += checkedItems[key].plateNum*checkedItems[key].price
  const clickAll = () => {
    store.dispatch(checkOrUncheckAll(!(items.length === checkedAmount)))
  }
  return (
    <>
      <div className="min-w-[512px] w-[80%] h-[700px] m-auto mt-[10%] bg-white border rounded-t-xl p-2 flex flex-col gap-2 overflow-y-scroll">
      {items && items.map((item,index)=>(
        <Item item={item} index={index} key={index}></Item>
      ))}
      </div>
      <div className="min-w-[512px] w-[80%] h-[100px] m-auto bg-white border rounded-b-xl p-2">
        <div className="flex place-content-between">
          <div className="w-[33%]" onClick={clickAll}>
            <div className="w-full h-[84px] text-center bg-[#A3586D] rounded-lg text-white hover:bg-[#a23f5b] leading-[84px]">
              <input type="checkbox" checked={(items.length !== 0) && (items.length === checkedAmount)} readOnly></input>
              <span>{(items.length !== 0) && (items.length === checkedAmount)?'全選':`已選：${checkedAmount}`}</span>
            </div>
          </div>
          <div className="w-[33%]">
            <div className="w-full h-[84px] text-center bg-[#F3B05A] rounded-lg text-white hover:bg-[#f59f2d] flex flex-col justify-center">
              <p>總金額：</p>
              <p>{totalPay}</p>
            </div>
          </div>
          <div className="w-[33%]">
            <button className="w-full h-[84px] bg-[#ec804a] rounded-lg text-white hover:bg-[#FF5500]" >
              去買單
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart