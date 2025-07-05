// data.ts

import { FormData, TabData } from './types';

export const contactFormData: FormData = {
  title: "Contact Us",
  description: "Say Hello send us your thoughts about our products or share your ideas with our Team!",
  fields: [
    {
      id: "firstName",
      name: "firstName",
      type: "text",
      placeholder: "First name",
      required: true
    },
    {
      id: "lastName",
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      required: true
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true
    },
    {
      id: "subject",
      name: "subject",
      type: "select",
      placeholder: "Subject",
      required: true,
      options: ["General Inquiry", "Product Support", "Technical Issue", "Feedback", "Partnership"]
    },
    {
      id: "message",
      name: "message",
      type: "textarea",
      placeholder: "Message",
      required: true
    }
  ],
  submitButton: {
    text: "SEND",
    className: "bg-black text-white hover:bg-gray-800 transition-colors"
  }
};

export const signInFormData: FormData = {
  title: "Sign In",
  description: "",
  fields: [
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true
    }
  ],
  submitButton: {
    text: "SIGN IN",
    className: "bg-black text-white hover:bg-gray-800 transition-colors"
  }
};

export const registerFormData: FormData = {
  title: "Register",
  description: "",
  fields: [
    {
      id: "firstName",
      name: "firstName",
      type: "text",
      placeholder: "First name",
      required: true
    },
    {
      id: "lastName",
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      required: true
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true
    },
    {
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      required: true
    }
  ],
  submitButton: {
    text: "REGISTER",
    className: "bg-black text-white hover:bg-gray-800 transition-colors"
  }
};

export const forgotPasswordFormData: FormData = {
  title: "Have you Forgotten Your Password ?",
  description: "If you've forgotten your password, enter your e-mail address and we'll send you an e-mail",
  fields: [
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true
    }
  ],
  submitButton: {
    text: "RESET PASSWORD",
    className: "bg-black text-white hover:bg-gray-800 transition-colors"
  }
};

export const authTabs: TabData[] = [
  {
    id: "signin",
    label: "Sign in",
    isActive: true
  },
  {
    id: "register",
    label: "Register",
    isActive: false
  }
];

export const authConfig = {
  title: "My account",
  forgotPasswordLink: "Have you forgotten your password?",
  rememberMeText: "Remember me"
};