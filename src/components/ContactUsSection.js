"use client";
import MarkdownContent from "./common/MarkdownContent";
import { useState } from "react";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email Address is invalid.";
    }
    if (formData.enquiry.length < 20)
      tempErrors.enquiry = "Enquiry must be at least 20 characters long.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          alert("Message sent successfully");
          setFormData({ firstName: "", email: "", phone: "", enquiry: "" });
        } else {
          alert("Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error sending message");
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen text-white p-8">
        <div className={"text-center"}>
          <MarkdownContent markdownFilePath="ContactUsSection.md" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block mb-2" htmlFor="firstName">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-700 rounded ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-700 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="enquiry">
              Enquiry
            </label>
            <textarea
              name="enquiry"
              id="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-700 rounded ${
                errors.enquiry ? "border-red-500" : ""
              }`}
              rows="4"
            ></textarea>
            {errors.enquiry && (
              <p className="text-red-500 text-sm mt-1">{errors.enquiry}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </div>
          <p className="mt-4 text-center text-sm">
            By clicking "Submit" you are agreeing to our GDPR, Privacy Policy &
            Terms of Service.
          </p>
        </form>
      </div>
    </div>
  );
}
