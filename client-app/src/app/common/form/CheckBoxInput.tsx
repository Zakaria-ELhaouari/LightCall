import React from 'react'
import { Field, useField } from 'formik';

interface Props {
    name: string,
    id?: string,
    className?: string,
    label?: string,
    tabIndex?: number
}

const CheckBoxInput = (props: Props) => {
    const [field, meta] = useField(props.name);
    return (
       <>
        <Field 
            id={props.id}
            {...field}
            {...props}
            type="checkbox" 
            name={props.name}
            className={`custom-control-input ${props.className} ${meta.error && meta.touched && "is-invalid" }`} 
        />
        <label className="custom-control-label" htmlFor={props.name}>{props.label}</label>
        {meta.error && meta.touched && (<div className="invalid-feedback">{meta.error}</div>)}
       </>
    )
}

export default CheckBoxInput
