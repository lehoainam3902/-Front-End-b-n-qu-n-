import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";

const OrderSummary = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  const {order}=useSelector(store=>store);
  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get("order_id")
  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">Price</p>
              <hr />
              <div className="space-y-3 font-font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Tổng tiền</span>
                  <span>{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Giá khuyến mại</span>
                  <span className="text-green-600 ">{order.order?.discounted}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Phí vận chuyển</span>
                  <span className="text-green-600 ">Miễn phí</span>
                </div>
                <div className="flex justify-between pt-3 font-bold">
                  <span>Tổng hóa đơn</span>
                  <span className="text-green-600 ">{order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                className="w-full mt-5 "
                variant="contained"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#c154c1" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
