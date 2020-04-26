import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

class JiraStatus extends Component
{
    state = {
        jiraStatus : []
    }

    componentDidMount = () =>
    {
        Axios.get("/jira/getstatus")
        .then(response => response.data)
        .then((data) => {
            this.setState({
                jiraStatus : data
            });
            console.log(this.state.jiraStatus);
        })
    }

    render(){
        
        return(
            <div style={{backgroundColor: "white",padding : "20px"}}>
                <h2 className="text-center">Status</h2>
                <Row>
                    <Col md={12}>
                        <Table size="sm" responsive hover striped bordered>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jiraStatus.map(row => (
                                        <tr key={row.status}>
                                            <td>{row.status}</td>
                                            <td>{row.count}</td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td className="text-success">DONE</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td className="text-info">IN PLAY</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td className="text-primary">ON HOLD</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td className="text-danger">CANCELLED</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default JiraStatus;