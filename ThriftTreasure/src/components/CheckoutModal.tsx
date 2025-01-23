import React, { useState } from 'react';

const CheckoutModal = ({
  isOpen,
  onClose,
  cartTotal, // Accept cartTotal as a prop
}: {
  isOpen: boolean;
  onClose: () => void;
  cartTotal: number; // Type the cartTotal prop as a number
}) => {
  const [paymentMethod, setPaymentMethod] = useState(''); // State to store selected payment method
  const [orderPlaced, setOrderPlaced] = useState(false); // State to track if order has been placed

  if (!isOpen) return null;

  const handleOrder = () => {
    // Update the state to show the "Order has been placed" message
    setOrderPlaced(true);
    // Optionally, close the modal after a brief delay or immediately
    setTimeout(onClose, 2000); // Close the modal after 2 seconds
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {orderPlaced ? (
          // Show success message if the order has been placed
          <div className="text-center text-lg font-semibold text-green-600">
            Order has been placed successfully!
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-4">Checkout</h3>

            {/* Display Cart Total at the top of the modal */}
            <div className="mb-4 text-lg font-bold text-purple-600">
              Total: ${cartTotal.toFixed(2)}
            </div>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your address"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)} // Update state on selection
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Payment Method</option>
                  <option value="cash">Cash</option>
                  <option value="easypaisa">EasyPaisa</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>

              {/* Show Payment Details input only for EasyPaisa or Bank Transfer */}
              {(paymentMethod === 'easypaisa' || paymentMethod === 'bank_transfer') && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Payment Details</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder={
                      paymentMethod === 'easypaisa'
                        ? 'Enter EasyPaisa account details'
                        : 'Enter bank transfer details'
                    }
                  />
                </div>
              )}
            </form>

            <div className="flex justify-end">
              <button
                onClick={handleOrder} // Trigger order placement
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
