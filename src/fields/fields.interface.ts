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
    className: string,
    icon: string,
    value: string,
    errors: Array<any>,
    touched: Array<any>,
    adornmentPosition: 'start' | 'end'
}

interface ValidationObject {
    type: string,
    errorMessage: string
}