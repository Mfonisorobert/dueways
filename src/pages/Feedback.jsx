import { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { ...formData, date: new Date().toLocaleDateString() };
    setFeedbackList([newFeedback, ...feedbackList]);
    setFormData({ name: "", email: "", feedback: "" });
    alert("Thank you for your feedback!");
  };

  return (
    <div className="py-16 px-6 container mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Client Feedback</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Your Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Please share your feedback..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">What Our Clients Are Saying</h2>
        {feedbackList.length > 0 ? (
          <div className="space-y-6">
            {feedbackList.map((feedback, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-semibold">{feedback.name}</h3>
                <p className="text-sm text-gray-600">{feedback.email}</p>
                <p className="mt-4">{feedback.feedback}</p>
                <p className="mt-2 text-gray-500 text-sm">Submitted on: {feedback.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No feedback yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  );
}

export default Feedback;
