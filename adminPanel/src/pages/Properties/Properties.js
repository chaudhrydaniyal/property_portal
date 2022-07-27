import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardGroup, Button, Row, Col, CardText } from 'reactstrap'
const Properties = () => {
    return (
        <>
            <h5 className="mb-3">All Properties</h5>
            <Row>
                <h5>Rent Out</h5>
                <Col sm="6" lg="6" xl="3" >
                    <Card body>
                        <CardTitle>This is a rental Property</CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </CardText>
                        <div>
                            <Button color="light-warning">Go somewhere</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Properties;