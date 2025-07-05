import { FormData } from "../accounts/types";

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
