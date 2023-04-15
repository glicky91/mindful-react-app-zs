import React from "react";
import { Col, Row } from "reactstrap";
import ShowPrompts from "./ShowPrompts";
import AddPost from "./AddPost";
import DeletePost from "./DeletePost";
import "../App.css";
import Entries from "./Entries";

export default function HomePage({ content, addEntry }) {

    return (
        <>
            <Row className='mb-4'>
                <Col>
                    <h2 className="Homepage-h2">Daily Entry</h2>
                </Col>
            </Row>
            <Row>
                <ShowPrompts />
                <AddPost content={content} addEntry={addEntry} />
                <DeletePost />
                <Entries content={content} />

            </Row>


        </>
    );
}