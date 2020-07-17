import React from 'react';
import { Typography } from '@material-ui/core';
import { TextPropsInterface } from './fields.interface';

export function Text(props: TextPropsInterface) {

    return(
        <div className={props?.containerClassName}>
            <Typography variant={props?.variant} component={props?.component} >{props?.textContent}</Typography>
        </div>
    )
}