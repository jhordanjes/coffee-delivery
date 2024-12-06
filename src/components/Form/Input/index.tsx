import { InputHTMLAttributes } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { Container, ErrorMessage } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: FieldError;
}

export function Input({ error, name, ...rest }: Props) {
    const {
        register,
      } = useFormContext();

    return (
        <Container>
            <input 
                type="text"
                {...register(name)}
                {...rest}
            />

            {error?.message ? (
                <ErrorMessage role="alert">{error.message}</ErrorMessage>
            ) : null}
        </Container>
    )
}