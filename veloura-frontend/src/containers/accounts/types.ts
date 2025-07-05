
export interface InputField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select';
  placeholder: string;
  required?: boolean;
  options?: string[]; 
}

export interface FormData {
  title: string;
  description: string;
  fields: InputField[];
  submitButton: {
    text: string;
    className?: string;
  };
}



export interface AuthFormData {
  email: string;
  password?: string;
  rememberMe?: boolean;
}

export interface TabData {
  id: string;
  label: string;
  isActive: boolean;
}