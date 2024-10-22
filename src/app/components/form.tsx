"use client";

import React from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation"; // Import useRouter
import { FormBuilder, FieldConfig } from "nextjs-forms"; // Importing from your package


// Field configurations
const CONTACT_FORM_FIELDS: FieldConfig[] = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Enter your full name",
    validation: Yup.string().required("Full Name is required"),
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    validation: Yup.string().email().required("Email is required"),
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter a strong password",
    validation: Yup.string().required("Please enter password"),
    componentType: "input",
    type: "password",
  },
];

// Initial form values
const initialValues = {
  fullName: "",
  email: "",
  inquiryType: "",
  message: "",
};

const ContactFormExample = () => {
    const router = useRouter(); // Initialize useRouter
  
    const handleOnSubmit = (values: any) => {
      console.log("Form submitted with values:", values);
      
      // Redirect to another page after form submission
      router.push("/new_page"); // Corrected route
    };
  
    return (
      <div>
        <h2 className="font-bold text-3xl text-green-50 pb-5 mt-10">Contact Us</h2>
        <FormBuilder
          fields={CONTACT_FORM_FIELDS}
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
        styles={{
          input: "p-input-padding border border-gray-300 rounded-input-radius shadow-input-shadow focus:outline-none focus:ring focus:border-primary",
          textarea: "p-input-padding border border-gray-300 rounded-input-radius shadow-input-shadow focus:outline-none focus:ring focus:border-primary",
          richText: "p-input-padding border border-gray-300 rounded-input-radius shadow-input-shadow focus:outline-none focus:ring focus:border-primary",
          select: "p-input-padding border border-gray-300 rounded-input-radius shadow-input-shadow focus:outline-none focus:ring focus:border-primary",
          checkbox: "h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded",
          label: "text-label-text text-gray-200 font-medium",
          submitButton: "bg-primary text-white font-bold py-button-padding px-4 rounded-button-radius shadow-button-shadow hover:bg-green-700",
          form: "space-y-form-gap p-form-padding bg-background text-foreground rounded-lg",
          fieldWrapper: "mb-4",
          errorMessage: "text-red-500 text-sm mt-2",
        }}
      />
    </div>
  );
};

export default ContactFormExample;
