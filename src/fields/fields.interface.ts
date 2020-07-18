import { ElementType } from "react";

export interface FieldsProps {
    fieldType: 'input' | 'select' | 'radio' | 'maskInput',
    id: string,
    name: string,
    label: string,
    maxLength: number
    type: 'email' | 'search' | 'tel' | 'url' | 'number' | 'range' | 'datetime-local' | 'time' | 'week' | 'date' | 'color',
    validations: Array<ValidationObject>,
    validationType: 'string' | 'number' | 'boolean' | 'date' | 'mixed',
    variants: "outlined" | 'filled',
    containerClassName: string,
    icon: string,
    value: string,
    errors: Array<any>,
    touched: Array<any>,
    adornmentPosition: 'start' | 'end',
    formikProps: any
}

export interface SelectInterface {
    fieldType: 'select',
    id: string,
    name: string,
    label: string,
    validations: Array<ValidationObject>,
    validationType: 'string' | 'number' | 'boolean' | 'mixed',
    variants: "outlined" | 'filled',
    options: Array<OptionInterface>,
    value: string | number,
    errors: Array<any>,
    containerClassName: "selectStyle",
    icon: string,
    formikProps: any;
}


interface ValidationObject {
    type: string,
    errorMessage: string
}

interface OptionInterface {
    label: string,
    id: number
}

export interface TextPropsInterface {
    containerClassName: string,
    variant: 'h1'
            | 'h2'
            | 'h3'
            | 'h4'
            | 'h5'
            | 'h6'
            | 'subtitle1'
            | 'subtitle2'
            | 'body1'
            | 'body2'
            | 'caption'
            | 'button'
            | 'overline'
            | 'srOnly'
            | 'inherit',
    component: React.ElementType<any>,
    textContent: string
}

export interface RadioProps {
    containerClassName: string,
    label: string,
    formikProps: any,
    name: string,
    id: string,
    helperText: string,
    radioControls: Array<radioControl>
}

interface radioControl {
    lable: string,
    value: string | number | boolean
}

// sider 

export interface SliderPropsInterface {
    id: string,
    name: string,
    label: string,
    disabled?: boolean,
    defaultValue?: number | Array<number>,
    formikProps: any,
    step?: number,
    marks?: boolean | Array<MarkInterface>,
    valueLabelDisplay?: 'on' | 'auto' | 'off',
    max?: number,
    min?: number,
    track?: 'normal' | false | 'inverted',
    orientation?: 'horizontal' | 'vertical',
    scale?: Function,
    getAriaLabel?: Function,
    getAriaValueText?: Function,
    valueLabelFormat?: Function,
    ThumbComponent: ElementType
}

interface MarkInterface {
    value: number,
    label: string
}

//switch

export interface SwitchPropsInterface {
    checked: boolean,
    color: 'default' | 'primary' | 'secondary',
    disabled: boolean,
    id: string,
    name: string,
    label: string,
    formikProps: any,
    size: 'medium' | 'small',
    value: boolean,
    containerClassName: string
}

// checkbox

export interface CheckBoxFieldInterface {
    checked: boolean,
    formikProps: any,
    name: string,
    color?: 'default' | 'primary' | 'secondary',
    disabled?: boolean,
    containerClassName?: string,
    id: string,
    size: 'medium' | 'small',
    label: string
}