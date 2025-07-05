export interface InputField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select';
  placeholder: string;
  required?: boolean;
  options?: string[]; 
}