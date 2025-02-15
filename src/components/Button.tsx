import { ButtonContainer } from "./Button.style";

interface ButtonProps {
    variant?: ButtonProps;
}

export function Button({ variant = "primary" }: ButtonProps) {
    return <ButtonContainer variant={variant}>Click me</ButtonContainer>;
}