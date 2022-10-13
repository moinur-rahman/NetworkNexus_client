import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type InputBoxProps = {
    labelName: string,
    inputName: string,
    inputType: "email" | "password" | "text",
    inputPlaceHolder:string
};

const InputBox: React.FC<InputBoxProps> = ({
    labelName,
    inputName,
    inputType,
    inputPlaceHolder
}) => {
    return (
        <FormControl width={"85%"} isRequired>
            <FormLabel>{labelName}</FormLabel>
            <Input name={inputName} type={inputType} backgroundColor={"#ADDDD0"} placeholder={inputPlaceHolder}/>
        </FormControl>
    );
};

export default InputBox;
