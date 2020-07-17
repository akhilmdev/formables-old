import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


import { SelectInterface } from './fields.interface';

export function SelectField(props: SelectInterface) {

    const renderOptions = () => {

        return (
            props?.options.map((data: any, index: number) => {
                return (
                    <MenuItem key={data.label + index} value={data.value}>{data.label}</MenuItem>
                )
            }))


    }
    return (
        <div className={props?.containerClassName}>
            <FormControl variant={props?.variants}>
                <InputLabel id="formables-select-label">{props?.label}</InputLabel>
                <Select
                    id={props?.id}
                    value={props?.formikProps?.values[props?.id] || ''}
                    name={props?.name}
                    label={props?.label}
                    labelId="formables-select-label"
                    onChange={props?.formikProps?.handleChange}
                >
                    {renderOptions()}
                </Select>
            </FormControl>
        </div>
    )
}



