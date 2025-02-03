"use server";

import type { FormStateType, MessageType } from "@/hooks/useOrderFormHandler";
import { ErrorsType } from "@/types/errorTypes";

type Field = {
  name: string;
  required: boolean;
  pattern?: RegExp;
  errorMessage: string;
};

const fields: Field[] = [
  {
    name: "email",
    required: true,
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    errorMessage: "Invalid email address",
  },
  { name: "fullName", required: true, errorMessage: "Name is required" },
  { name: "address", required: true, errorMessage: "Address is required" },
  {
    name: "cardNumber",
    required: true,
    pattern: /^\d{16}$/,
    errorMessage: "Card number must be 16 digits",
  },
  {
    name: "cardHolderName",
    required: true,
    errorMessage: "Cardholder name is required",
  },
  {
    name: "expiryDate",
    required: true,
    pattern: /^\d{2}\/\d{2}$/,
    errorMessage: "Expiry date must be in MM/YY format",
  },
  {
    name: "cvc",
    required: true,
    pattern: /^\d{3,4}$/,
    errorMessage: "CVC must be 3 or 4 digits",
  },
];

const validateFormData = (formData: FormData): ErrorsType => {
  const errors: ErrorsType = {};

  fields.forEach(({ name, required, pattern, errorMessage }) => {
    const value = formData.get(name) as string;

    if (required && (!value || value.trim() === "")) {
      errors[name as keyof ErrorsType] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required`;
    } else if (pattern && !pattern.test(value)) {
      errors[name as keyof ErrorsType] = errorMessage;
    }
  });

  return errors;
};

export const submitOrderAction = async (
  _: FormStateType,
  formData: FormData
) => {
  const errors = validateFormData(formData);

  if (Object.keys(errors).length > 0) {
    return { message: "fail" as MessageType, errors };
  }

  return {
    message: "success" as MessageType,
    errors: {},
  };
};
