import { Field, useField } from 'formik'
import React from 'react'


interface Props {
    placeholder: string,
    name: string,
    label?: string
}

const MyTextInput = (props: Props) => {
    const [field, meta] = useField(props.name);
    return (
      <>
        <label htmlFor={props.name}>{props.label}</label>
        <Field id={props.name} {...field} {...props} className={`form-control ${meta.error && meta.touched && "is-invalid" }`} autoFocus />
        {meta.error && meta.touched && (<div className="invalid-feedback">{meta.error}</div>)}
      </>
    )
}

export default MyTextInput
