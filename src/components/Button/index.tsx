import { ButtonComponent } from './styles';

export interface ButtonProps {
  text?: string;
  fullWidth?: boolean;
  primary?: boolean;
}

function Button({ text, fullWidth, primary }: ButtonProps) {
  return (
        <ButtonComponent fullWidth={fullWidth} primary={primary}>
            {text}
        </ButtonComponent>
  );
}

export default Button;