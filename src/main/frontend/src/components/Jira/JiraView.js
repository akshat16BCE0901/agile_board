import React, {Component} from 'react';
import CardSection from './CardSection';
import JiraStatus from './JiraStatus';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class JiraView extends Component
{
    render(){
        return(
            <Row>
                <Col md={8}>
                    <CardSection />
                </Col>
                <Col md={1}></Col>
                <Col md={3}>
                    <JiraStatus />
                </Col>
            </Row>
        )
    }
}

export default JiraView;