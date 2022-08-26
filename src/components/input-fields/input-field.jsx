import { Label, Input, InputText, Error } from "../edit/styles";

function InputField(props) {

    const { label, name, inputType, className, type, onChange, onBlur, onClick, value, touched, errors } = props;

    return ( 
        <>
            <Label htmlFor={name}>{label}</Label>
            {inputType === "text-area" ? (
                <InputText
                    type={type || "text"} 
                    placeholder={`Enter your ${name}...`}
                    id={name}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            ) : (
                <Input
                    type={type | "text"} 
                    placeholder={`Enter your ${name}...`}
                    id={name}
                    name={name}
                    className={className}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    onClick={onClick}
                />
            )}
            {touched && errors ? (
                <Error>{errors}</Error>
            ) : null}

        </>
     );
}

export default InputField;