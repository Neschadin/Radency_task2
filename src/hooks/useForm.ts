import { useState } from "react";
import DOMPurify from "dompurify";

const useForm = (initialValues: any, onSubmit: any) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  const validate = (formData: any) => {
    return "";
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validate(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export { useForm };
