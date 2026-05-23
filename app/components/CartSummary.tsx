interface CartSummaryProps {
  subTotal: number;
  shipping: number;
  total: number;
}
export default function CartSummary({ subTotal,shipping,total }: CartSummaryProps) {

    return (
        <div className="border  md:w-1/5 mt-4 mx-8 rounded-lg h-fit">
            <h2 className="font-bold text-xl mx-4 mt-4"> Cart Summary</h2>

            <div className="flex justify-between mx-4 mt-6">
                <p>Subtotal</p>
                <p>${subTotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between mx-4 mt-2">
                <p>Shipping</p>
                <p>${shipping}</p>
            </div>

            <div className="flex justify-between mx-4 mt-2">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
            </div>

            <div className="mx-4">
                <button className="border bg-gray-900 text-white py-2 mt-6 cursor-pointer hover:bg-gray-950 w-full rounded-lg">
                    Add to Cart
                </button>
            </div>

            <div className="flex justify-center mt-4 text-sm">
                <p> Or pay with Paypal </p>
            </div>

            <hr className="mt-4 mx-4"></hr>

            <div className="mx-4 mt-4 text-sm">
                <label>Promo Code</label>

                <div className="flex mt-1 mb-6">
                    <input 
                    type="text" 
                    placeholder="Enter code" 
                    className="border flex-1 px-2 py-1.5 rounded-lg min-w-0"
                    />
                    <button className="bg-gray-900 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-950 ml-4">
                    Apply
                    </button>
                </div>
            </div>
        </div>
    )}
