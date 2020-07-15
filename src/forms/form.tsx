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
                value[data.name] = this.props.values[data.name];
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
                initialValues={{email: ''}}//{this.getInitValue()}
                validationSchema={this.validationSchema()}
                onSubmit={this.submit}
                enableReinitialize={true}
            >
                {formikProps => {
                    const { handleSubmit } = formikProps;
                    return (
                        <form onSubmit={handleSubmit}>
                            <GenerateFields {...this.props} {...formikProps} />
                        </form>
                    );
                }}
            </Formik>
        )
    }

}

export default Formables;