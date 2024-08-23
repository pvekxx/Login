import React from 'react'
import Label from '../atoms/Label'
import Input from '../atoms/Input'

const LabelPlusInput = ({ type, placeholder, value, onChange, children }) => {
    return (
        <div>
            <Label>{children}</Label>
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange}></Input>
        </div >
    )
}

export default LabelPlusInput
