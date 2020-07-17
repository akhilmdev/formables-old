import { Input } from "./input";
import React, { Fragment } from "react";
import { SelectField } from "./select";
import { Text } from "./text";
import { RadioField } from "./radio";


export function GenerateFields(props: any) {
    const {
        fields = [],
        formikProps
    } = props;

    return (
        <div className='formContainer'>
            {fields?.map((data: any, index: number) => {
                switch (data.fieldType) {
                    case 'input':
                        return <Input key={data.name + index} {...data} formikProps={formikProps} />
                    case 'select':
                        return <SelectField key={data.name + index} {...data} formikProps={formikProps}/>
                    case 'text':
                        return <Text key={data.name + index} {...data}/>
                    case 'radio':
                        return <RadioField key={data.name + index} {...data} formikProps={formikProps}/>
                    default:
                        return <Fragment />
                }
            })
            }
        </div>
    )


}