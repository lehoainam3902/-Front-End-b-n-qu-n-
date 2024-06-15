import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const {cart}=useSelector(store=>store)
  const dispatch=useDispatch()
  const handleCheckout = () =>{
    navigate("/checkout?step=2");
  }

  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item)=><CartItem item={item}/>)}
          
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Hóa đơn</p>
            <hr />
            <div className="space-y-3 font-font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Giá gốc</span>
                <span>{cart.cart?.totalPrice} VND</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Giá khuyến mại</span>
                <span className="text-green-600 ">{cart.cart?.discounted} VND</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Phí vận chuyển</span>
                <span className="text-green-600 ">Miễn phí</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Tổng hóa đơn</span>
                <span className="text-green-600 ">{cart.cart?.totalDiscountedPrice} VND</span>
              </div>
            </div>
            <Button onClick={handleCheckout} className="w-full mt-5 " variant = 'contained' sx={{px:'2.5rem', py:'.7rem', bgcolor:'#c154c1'}}>
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
