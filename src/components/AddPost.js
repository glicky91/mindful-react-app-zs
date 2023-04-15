// import React, { useState } from "react";
import { Button, Col, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { v4 as uuid } from 'uuid';
import SUBMISSIONS from "./SUBMISSIONS";

function AddPost({ addEntry, content }) {

    // const handleContentChange = (event) => {
    //     setContent(event.target.value);
    // };

    const handleSubmit = (value, { resetForm }) => {
        addEntry(value);
        resetForm();

    };

    return (
        <>
            <Formik
                initialValues={{
                    id: uuid(),
                    title: '',
                    submission: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup row>
                        <Label htmlFor="title" md='2'>
                            Entry Title
                        </Label>
                        <Col md='10'>
                            <Field
                                name='title'
                                placeholder='Title'
                                className='form-control'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="submission" md='2'>
                            Entry Submission
                        </Label>
                        <Col md='10'>
                            <Field
                                name='submission'
                                as='textarea'
                                rows='12'
                                className='form-control'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>
        </>
        // <form className="gratitudeForm">
        //     <textarea
        //         type="text"
        //         as="textarea"
        //         rows="10"
        //         className="form-control journalTextArea"
        //     // value={content}
        //     // onChange={handleContentChange}
        //     />
        //     <Button style={{ background: "blue" }} onClick={handleSubmit}>
        //         Post
        //     </Button>
        // </form>
    );
}

export default AddPost;