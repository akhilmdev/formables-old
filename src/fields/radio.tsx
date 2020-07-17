import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, FormHelperText, Radio } from '@material-ui/core';
import { RadioProps } from './fields.interface';

export function RadioField(props: RadioProps) {

    const renderRadioLabeles = () => {
        return props.radioControls.map((radioradioControl, index: number) => {
            return <FormControlLabel key={radioradioControl.value.toString() + index} value={radioradioControl.value} control={<Radio />} label={radioradioControl.lable} />
        })
    }

    return (
        <div className={props.containerClassName}>
            <FormControl component="fieldset" error={!props?.formikProps?.isValid}>
                <FormLabel component="legend">{props?.label}</FormLabel>
                <RadioGroup aria-label={props?.label}
                    name={props?.name}
                    value={props?.formikProps?.values[props.name] || ''}
                    onChange={props?.formikProps?.handleChange}
                >
                    {renderRadioLabeles()}
                </RadioGroup>
                {!props?.formikProps?.isValid && props?.helperText && <FormHelperText>{props?.helperText}</FormHelperText>}
            </FormControl>
        </div>
    )
}