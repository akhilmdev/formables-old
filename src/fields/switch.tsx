import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { SwitchPropsInterface } from './fields.interface';


export function SwitchField(props: SwitchPropsInterface) {

    return (
        <div className={props?.containerClassName}>
            <FormControlLabel
                control={<Switch
                    name={props?.name}
                    id={props?.name}
                    size={props.size}
                    color={props?.color}
                    checked={props?.formikProps?.values[props.name]}
                    onChange={props?.formikProps?.handleChange} />}
                label={props?.label}
            />
        </div>

    )

}