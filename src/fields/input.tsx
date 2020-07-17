import { FieldsProps } from "./fields.interface";
import React from "react";
import { TextField } from "@material-ui/core";


export function Input(props: FieldsProps) {
  const setInputProps = () => {
    return {
      maxLength: props.maxLength
    }
  }

  return (
    <div className={props.containerClassName}>
      <TextField
        id={props.id}
        name={props.name}
        label={props.label}
        type={props.type}
        value={props?.formikProps?.values[props.id] || ''}
        onChange={(e) => props?.formikProps?.handleChange(e)}
        error={Boolean(props?.formikProps?.errors[props.name]) && props?.formikProps?.touched[props.name]}
        helperText={
          Boolean(props?.formikProps?.errors[props.name]) && props?.formikProps?.touched[props.name] ? props?.formikProps?.errors[props.name] : ''
        }
        onBlur={(e) => props?.formikProps?.handleBlur(e)}
        variant={props.variants}
        inputProps={setInputProps()}
      />
    </div>
  );
}