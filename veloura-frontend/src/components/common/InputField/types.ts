export interface InputField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'url' | 'textarea' | 'select' | 'password';
  placeholder: string;
  required?: boolean;
  options?: string[]; 
}