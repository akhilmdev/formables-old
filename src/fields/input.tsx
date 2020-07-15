import { FieldsProps } from "./fields.interface";
import React from "react";
import { TextField } from "@material-ui/core";


export function Input(props: FieldsProps) {

  const onChange = (props: any) => {
    console.log(props);
  }

  const handleBlur = (props: any) => {
    console.log(props);

  }

  const setInputProps = () => {
    return {
      maxLength: props.maxLength
    }
  }

  return (
    <div className={props.className}>
      <TextField
        id={props.name}
        name={props.name}
        label={props.label}
        type={props.type}
        value={props.value || ''}
        onChange={onChange}
        error={Boolean(props.errors[props.name]) && props.touched[props.name]}
        helperText={
          Boolean(props.errors[props.name]) && props.touched[props.name] ? props.errors[props.name] : ''
        }
        onBlur={handleBlur}
        variant={props.variants}
        inputProps={setInputProps()}
      />
    </div>
  );
}