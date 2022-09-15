import { FormComponent, Label, Input } from './styles';

export interface FormProps{
  text: string;
  name: string;
  type?: 'text' | 'email' | 'number';
}

function Form( {text, name }: FormProps ){
  return (
    <FormComponent>
        <Label htmlFor={name}>{text}</Label>
        <Input id={name}/>
    </FormComponent>
  );
}

export default Form;