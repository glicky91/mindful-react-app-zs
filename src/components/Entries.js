import React from 'react'
import { Col, Row } from 'reactstrap'

export default function Entries({ content }) {
    return (
        <>
            <Row>
                <Col>
                    <h2>Past Posts</h2>
                    {
                        content.map((c) => (
                            <Col key={c.id}>
                                <h3>{c.title}</h3>
                                <p>{c.submission}</p>
                            </Col>
                        )
                        )

                    }
                </Col>
            </Row>
        </>
    )
}