"use client";
import MarkdownContent from "./common/MarkdownContent";
import { useState } from "react";

const FormInput = ({ labelName, name, value, onChange, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2" htmlFor={name}>
        {labelName}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`text-black w-full p-2 rounded focus:outline-none focus:ring-1 ${
          error ? "border-red-500" : "focus:border-third focus:ring-third"
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full Name is required.";
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
          setFormData({ fullName: "", email: "", phone: "", enquiry: "" });
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
          className="max-w-lg mx-auto p-6 bg-secondary text-white rounded-lg shadow-md"
        >
          <FormInput
            labelName="Full Name *"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <FormInput
            labelName="Email Address *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormInput
            labelName="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          <div className="mb-4">
            <label className="block mb-2" htmlFor="enquiry">
              Enquiry
            </label>
            <textarea
              name="enquiry"
              id="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              className={`text-black w-full p-2 rounded focus:outline-none focus:ring-1 ${
                errors.enquiry
                  ? "border-red-500"
                  : "focus:border-third focus:ring-third"
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
              className="text-white bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
