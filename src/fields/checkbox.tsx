import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { CheckBoxFieldInterface } from './fields.interface'

export function CheckboxField(props: CheckBoxFieldInterface) {

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={props?.formikProps?.values[props?.name]}
                        onChange={props?.formikProps?.handleChange}
                        name={props?.name}
                        color={props?.color}
                        disabled={props?.disabled}
                        size={props?.size}
                    />
                }
                label={props?.label}
            />
        </div>
    )
}