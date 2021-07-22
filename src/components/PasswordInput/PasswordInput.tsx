import React from "react";
import OtpInput from 'react-otp-input';

import "./PasswordInput.scss";

interface PasswordValidationInputProps{
    value?: any;
    onChange?: React.Dispatch<React.SetStateAction<any>>;
}

export const PasswordInput: React.FC<PasswordValidationInputProps> = ({ value, onChange }: PasswordValidationInputProps) => {

    return (
        <div className="passwordInput-body">
            <div className="passwordInput-content">
                
                <OtpInput 
                    className="passwordInput"
                    value={value}
                    onChange={onChange}
                    isInputSecure={true}
                    numInputs={4}
                />
            </div>
        </div>
    );

};