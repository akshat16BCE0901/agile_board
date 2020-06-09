import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class AddProjectForm extends Component
{

    state = {
        employeesList : [],
        "name": "",
        "description": "",
        "project_head": null
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
        var project = {
            "name": this.state.name,
            "description": this.state.description,
            "project_head": {
                "id" : this.state.project_head
            }
        };
        console.log(project);

        Axios.post("/api/project/add",project)
        .then(response => {
            console.log(response);
            if(response.status===200)
            {
                alert("Registered Succesfully");
            }
        });
    }

    componentDidMount = () =>{
        Axios.get("/api/employee/getnames").then(response => response.data)
        .then((data) => {
            this.setState({employeesList : data});
            
            this.setState({employeesList : this.state.employeesList.filter(emp => emp.firstname!=null)})
            console.log(this.state.employeesList);
        });
    }

    render(){
        return(
            <>                
                <div style={{padding : "10px",backgroundColor : "white"}}  className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-center">Add Project</h2>
                    </div>
                </div>
                <div style={{backgroundColor : "white"}}  className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Form onSubmit={this.submitForm} >
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="name"  id="name" type="text" placeholder="Project Name"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Description
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="description" id="description" as="textarea" placeholder="Project description" ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Project Head
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.controlInput} name="project_head" id="project_head" as="select" >
                                        <option>Select Head</option>
                                        {
                                            this.state.employeesList.map(row => (
                                                <option key={row.id} value={row.id}>{row.firstname+" "+row.lastname}</option>
                                            ))
                                        }
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

export default AddProjectForm;