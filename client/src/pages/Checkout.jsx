import { useSelector, useDispatch } from "react-redux";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const { shippingAddress, shippingMethod } = useSelector((state) => state.checkout);

  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
  try {
    const res = await api.post("/payment/create-checkout-session", {
      items,
      shippingAddress,
      shippingMethod,

    });

    window.location.href = res.data.url;
  } catch (err) {
    toast.error("Payment failed");
  }
};


  const placeOrder = async()=>{
    try {
      await api.post('/orders',{
        items:items.map((i)=>({
          product:i._id,
          quantity:i.quantity,
          price:i.price
        })),
        total,
      })
      toast.success("order Placed");
      navigate('/order-success')
    } catch (error) {
      toast.error("Failed to place order")
    }
  }
  return (
    <div >
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-xl mb-4">Total:${total.toFixed(2)}</p>

         <button
          onClick={handlePayment}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Proceed to payment
        </button>

      </div>
    </div>
  )
}

export default Checkout