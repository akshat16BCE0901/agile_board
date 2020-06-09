import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class AddJiraForm extends Component
{
    state = {
        allEmployees : [],
        allProjects : [],
        "title": "",
        "description": "",
        "priority": "Medium",
        "story_points": 0,
        "project_id": 0,
        "sprint": null,
        "assignee": 102,
        "assigned_to": null,
        "date_created": "2020-01-19",
        "status": "Ready For Review",
        "date_ended": null
        }

    controlInput = (e) =>
    {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    submitForm = (e) =>
    {
        e.preventDefault();
        var jira = {
            "title": this.state.title,
            "description": this.state.description,
            "priority": this.state.priority,
            "story_points": this.state.story_points,
            "project_id": {
                "id" : this.state.project_id
            },
            "sprint": this.state.sprint,
            "assignee": {
                "id" : this.state.assignee
            },
            "assigned_to": {
                "id" : this.state.assigned_to
            },
            "date_created": this.state.date_created,
            "status": this.state.status,
            "date_ended": null
        };

        Axios.post("/api/jira/add",jira)
        .then(response =>{ 
            console.log(response)
            if(response.status===200)
            {
                alert("Registered Succesfully");
            }
        });
    }

    componentDidMount = () =>{
        Axios.get("/api/employee/getnames").then(response => response.data)
        .then((data) => {
            this.setState({allEmployees : data});
            this.setState({allEmployees : this.state.allEmployees.filter(emp => emp.firstname!=null)})
            console.log(this.state.allEmployees);
        });

        Axios.get("/api/project/getnames").then(response => response.data)
        .then((data) => {
            this.setState({allProjects : data});
            console.log(this.state.allProjects);
        });
    }

    render(){
        return(
            <>                
                <div style={{padding : "10px",backgroundColor : "white"}}  className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-center">Add Jira</h2>
                    </div>
                </div>
                <div style={{backgroundColor : "white"}}  className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Form onSubmit={this.submitForm} >
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Title
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="title"  id="title" type="text" placeholder="Title"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Description
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="description" id="description" as="textarea" placeholder="Description" ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Priority
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="priority" id="priority" as="select" >
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Story Points
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="story_points" id="story_points" type="number" min="0" max="10" ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Project
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="project_id" id="project_id" as="select" >
                                        {
                                            this.state.allProjects.map(row =>(
                                            <option key={row.id} value={row.id}>{row.name}</option>
                                            ))
                                        }
                                        <option value="1">1 - DAC Refinement</option>
                                        <option value="2">2 - DAM Refinement</option>
                                        <option value="3">3 - CES Refinement</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Sprint
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="sprint" id="sprint" as="select" >
                                        <option value="52.1">52.1</option>
                                        <option value="52.2">52.2</option>
                                        <option value="53.1">53.1</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Assignee
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="assignee" id="assignee" plaintext readOnly defaultValue="Praful Martis" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Assigned To
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="assigned_to" id="assigned_to" as="select" >
                                       <option>--Select--</option>
                                        {
                                            this.state.allEmployees.map(row => (
                                                <option key={row.id} value={row.id}>{row.firstname+" "+row.lastname}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Date Created
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="date_created" id="date_created" plaintext readOnly defaultValue="2020-02-21" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} style={{}}>
                                <Form.Label column sm="2">
                                    Status
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="status" id="status" as="select" >
                                        <option value="Ready for review">Ready For review</option>
                                        <option value="Ready">Ready</option>
                                        <option value="In Play">In Play</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <div as={Row}>
                                <Col style={{textAlign : "center"}}>
                                    <Button  size="lg" align="center" className="text-center" type="submit" >
                                        Submit
                                    </Button>
                                    <br />
                                    <br />

                                </Col>
                            </div>
                        </Form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </>
        )
    }
}

export default AddJiraForm;