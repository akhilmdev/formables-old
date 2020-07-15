import React, { Component, ReactElement } from "react";
import { Formik } from 'formik';
import * as YUP from 'yup';
import { IProps } from "./form.interface";



class Formables extends Component<IProps> {

    getInitValue = (): {} => {
        const value = {};
        if (this.props.fields) {
            this.props.fields.forEach((data) => {
                value[data.name] = this.props.values[data.name];
            });
        }
        return {email: ''}
        // return { ...value };
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
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" style={{ display: "block" }}>
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="Enter your email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.email && touched.email
                                        ? "text-input error"
                                        : "text-input"
                                }
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}

                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </button>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    );
                }}
            </Formik>
        )
    }

}

export default Formables;