import { Field, useField } from 'formik'
import React from 'react'


interface Props {
    placeholder?: string,
    id?: string,
    name: string,
    className?: string,
    type?:string,
    label?: string,
    dataIndicator?: string,
    tabIndex?: number
}

const MyTextInput = (props: Props) => {
    const [field, meta] = useField(props.name);
    return (
      <>
        <label htmlFor={props.name} className="d-block">{props.label}</label>
        <Field 
        id={props.id}
        {...field} 
        {...props} 
        className={`form-control ${props.className} ${meta.error && meta.touched && "is-invalid"} ${!meta.error && meta.touched && "is-valid"}`}  
        data-indicator={props.dataIndicator}
         />
        {meta.error && meta.touched && (<div className="invalid-feedback">{meta.error}</div>)}
        {!meta.error && meta.touched && ((<div className="valid-feedback">Good job!</div>))}
      </>
    )
}

export default MyTextInput
