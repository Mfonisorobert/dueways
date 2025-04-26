import { useState } from "react";

function TrackOrder() {
  const [trackingId, setTrackingId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrackingChange = (e) => {
    setTrackingId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate tracking data (In a real case, you'd fetch this from a database/API)
    const mockOrderData = {
      "12345": { status: "In Progress", date: "2025-04-26" },
      "67890": { status: "Completed", date: "2025-04-15" },
    };

    if (mockOrderData[trackingId]) {
      setOrderStatus(mockOrderData[trackingId]);
    } else {
      setOrderStatus(null);
    }
  };

  return (
    <div className="py-16 px-6 container mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Track Your Order</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Enter Your Tracking ID</label>
          <input
            type="text"
            value={trackingId}
            onChange={handleTrackingChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Tracking ID"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Check Status
        </button>
      </form>

      {orderStatus && (
        <div className="mt-10 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">Order Status</h3>
          <p className="mt-4 text-lg font-semibold">Tracking ID: {trackingId}</p>
          <p className="mt-2 text-lg">Status: {orderStatus.status}</p>
          <p className="mt-2 text-gray-600">Last Updated: {orderStatus.date}</p>
        </div>
      )}

      {orderStatus === null && trackingId && (
        <div className="mt-10 text-center text-red-500 font-semibold">
          <p>Order not found. Please check your Tracking ID.</p>
        </div>
      )}
    </div>
  );
}

export default TrackOrder;
