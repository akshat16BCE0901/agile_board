import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Axios from "axios";

class AddEmployeeForm extends Component
{

    state= {
        "firstname": "",
        "lastname": "",
        "address": "",
        "phone": "",
        "email": "",
        "date_of_birth": "",
        "username": "",
        "password": ""
    }

    handleInput=(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        var employee = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "address": this.state.address,
            "phone": this.state.phone,
            "email": this.state.email,
            "date_of_birth": this.state.date_of_birth,
            "username": this.state.username,
            "password": this.state.password
        };

        Axios.post("/employee/add",employee).then(response => {
            console.log(response);
            if(response.status===200)
            {
                alert("Registered Succesfully");
            }
        });
    }

    render(){
        return(
            <>
                <div style={{padding : "10px",backgroundColor : "white"}} className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-center">Add Employee</h2>
                    </div>
                </div>
                <div style={{backgroundColor : "white"}} className="row">
                    <div className="col-md-3"></div>
                    <div id="add_employee_form_container" className="col-md-6">
                        <Form id="add_employee_form" onSubmit={this.formSubmit}>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Row>
                                        <Col>
                                            <Form.Control onChange={this.handleInput}  name="firstname" id="firstName" type="text" placeholder="First Name"></Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control onChange={this.handleInput}  name="lastname" id="lastName" type="text" placeholder="Last Name"></Form.Control>
                                        </Col>
                                    </Row>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Address
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.handleInput}  id="address" name="address" as="textarea" placeholder="Address" ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.handleInput}  id="email" name="email" type="email" placeholder="Email"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Phone
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.handleInput}  name="phone" id="phone" type="text" placeholder="Phone Number"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Date of birth
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.handleInput}  name="date_of_birth" id="date_of_birth" type="date"></Form.Control>
                                </Col>
                            </Form.Group>
                            <span><div className="row" style={{borderBottom:"1px solid #A9A9A9",paddingBottom:"5px",marginBottom:"30px"}}></div></span>
                            <Form.Group as={Row} style={{marginTop:"2px"}}>
                                <Form.Label column sm="2">
                                    Username
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.handleInput}  name="username" id="username" type="text" placeholder="Username"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.handleInput}  name="password" id="password" type="password" placeholder="Password"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Confirm Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control onChange={this.handleInput}  name="confirm" id="confirm" type="password" placeholder="Confirm Password"></Form.Control>
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
                    <div className="col-md-3"></div>
                </div>
            </>
        )
    }
}

export default AddEmployeeForm;