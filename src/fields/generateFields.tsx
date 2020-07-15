import { Input } from "./input";
import React, { Fragment } from "react";


export function GenerateFields(props: any) {
    const {
        fields = [],
        handleSubmit
      } = props;

    return (
        <div onSubmit={handleSubmit} className='formContainer'>
            {fields?.map((data: any, index: number) => {
                switch (data.fieldType) {
                    case 'input':
                        return <Input key={data.name + index} {...data} {...props}/>
                    default:
                        return <Fragment />
                }
            })
            }
        </div>
    )
    
    
}