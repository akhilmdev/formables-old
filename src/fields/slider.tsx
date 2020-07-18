import React from 'react';
import { Typography, Slider } from '@material-ui/core';
import { SliderPropsInterface } from './fields.interface';

export function SliderFlield(props: SliderPropsInterface) {

    const defaultValueText = (value: any) => {
        return value
    }

    return (
        <div>
            <Typography id={props.id} gutterBottom>
                {props.label}
            </Typography>
            <Slider
                id={props?.id}
                name={props?.name}
                disabled={props?.disabled || false}
                defaultValue={props?.formikProps?.values[props.name]}
                aria-labelledby={props.id}
                step={props?.step}
                marks={props?.marks}
                valueLabelDisplay={props?.valueLabelDisplay || 'auto'}
                value={props?.formikProps?.values[props.name]}
                min={props?.min}
                max={props?.max}
                track={props?.track}
                orientation={props?.orientation}
                scale={(value) => props?.scale && props.scale(value)}
                onChange={(_, value: any) => {
                    props?.formikProps?.setFieldValue(props?.name, value)
                }}
                getAriaValueText={(value) => props?.getAriaValueText ? props.getAriaValueText(value) : defaultValueText(value)}
                valueLabelFormat={(value) => props?.valueLabelFormat ? props.valueLabelFormat(value) : defaultValueText(value)}
            />
        </div>

    )
}