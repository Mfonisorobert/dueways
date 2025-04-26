import { useState } from "react";

function SubmitWork() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your work has been submitted successfully!");
    // Here you can add backend integration to save the form data
  };

  return (
    <div className="py-16 px-6 container mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Submit Your Work</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Phone Number</label>
          <input
            type="number"
            name="number"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Select Service</label>
          <select
            name="service"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Choose a Service --</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="DI Printing">DI Printing</option>
            <option value="Large Format Printing">Large Format Printing</option>
            <option value="Monogramming">Monogramming</option>
            <option value="T-Shirt Printing">T-Shirt Printing</option>
            <option value="Vehicle Branding">Vehicle Branding</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Project Description</label>
          <textarea
            name="description"
            rows="4"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe your project..."
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Upload File (Optional)</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Submit Work
        </button>
      </form>
    </div>
  );
}

export default SubmitWork;
