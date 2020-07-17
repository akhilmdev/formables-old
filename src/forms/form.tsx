import React, { Component, ReactElement } from "react";
import { Formik } from 'formik';
import * as YUP from 'yup';
import { IProps } from "./form.interface";
import { GenerateFields } from "../fields/generateFields";


class Formables extends Component<IProps> {

    getInitValue = (): {} => {
        const value = {};
        if (this.props.fields) {
            this.props.fields.forEach((data) => {
                value[data.name] = data.value;
            });
        }
        return { ...value };
    }

    validationSchema = () => {
        const Yup = YUP;
        Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required")
        })
    }

    submit = () => {
        this.props.onSubmit()
    }

    render(): ReactElement {
        return (
            <Formik
                initialValues={this.getInitValue()}
                validationSchema={this.validationSchema()}
                onSubmit={this.submit}
                enableReinitialize={true}
            >
                {formikProps => {
                    const { handleSubmit, handleChange } = formikProps;
                    return (
                        <form onSubmit={handleSubmit}>
                            <GenerateFields {...this.props} formikProps={formikProps} handleChange={handleChange}/>
                        </form>
                    );
                }}
            </Formik>
        )
    }

}

export default Formables;