import React, { Component } from 'react';
import './App.css';

import AllEmployees from './components/Employee/AllEmployees';
import AddEmployeeForm from './components/Employee/AddEmployeeForm';
import AddJiraForm from './components/Jira/AddJiraForm';
import AllJiras from './components/Jira/AllJiras';
import AllProjects from './components/Project/AllProjects';
import AddProjectForm from './components/Project/AddProjectForm';
import JiraView from './components/Jira/JiraView';
import LiveText from './components/Personal/LiveText';
import IndividualJiraPage from './components/Jira/IndividualJiraPage';
import FightCorona from './components/Personal/FightCorona';
import StateTable from "./components/Personal/StateTable";
import ZoneTable from "./components/Personal/ZoneTable";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router, useParams } from 'react-router-dom';
import { Badge, ProgressBar } from 'react-bootstrap';

var components = {
  employees : <AllEmployees />,
  jiras : <AllJiras />,
  addEmployeeForm : <AddEmployeeForm />,
  addJiraForm : <AddJiraForm />,
  projects : <AllProjects />,
  addProjectForm : <AddProjectForm />,
  yourJiras : <JiraView />,
  liveText : <LiveText />,
  fightCorona : <FightCorona />

}


class App extends Component
{

  state = {
    selectedComponent : components.employees
  }


  changeComponent = (comp) =>{
    this.setState(
      {
        selectedComponent : comp
      }
    )
  }

  render(){
    var now1=40;
    var now2 = 50;
    var now3 = 80;
    return (
      <Router>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Akshat Singhal App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className="mr-auto">
              <NavDropdown title="Employee">
                <NavDropdown.Item href="/employees">View All</NavDropdown.Item>
                <NavDropdown.Item href="/addnewemployee">Add New</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Jira">
                <NavDropdown.Item href="/jiras">View All</NavDropdown.Item>
                <NavDropdown.Item href="/addnewjira">Add New</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Project">
                <NavDropdown.Item href="/projects" >View All</NavDropdown.Item>
                <NavDropdown.Item href="/addnewproject">Add New</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="/yourjiras" style={{color : "white"}}>Your Jiras</Nav.Link>
              <NavDropdown title="Extras" id="basic-nav-dropdown">
                <NavDropdown.Item href="/liveedit">Live Edit&nbsp;&nbsp;<ProgressBar animated variant="success"  now={now1} label={`Done ${now1}%`} /></NavDropdown.Item>
                <NavDropdown.Item href="/individualjira">Individual Jiras&nbsp;&nbsp;<ProgressBar animated variant="success" now={now2} label={`Done ${now2}%`}   /></NavDropdown.Item>
                <NavDropdown.Item href="/fightcorona">Fight Corona&nbsp;&nbsp;<ProgressBar animated variant="success" now={now3} label={`Done ${now3}%`}   /></NavDropdown.Item>
              </NavDropdown>
              <div><Badge pill variant="warning" >Under Construction</Badge></div>
              
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid" style={{margin:'0px', marginTop : '20px', paddingBottom: '20px'}}>
          <Switch>
              <Route path="/yourjiras">
                {components.yourJiras}
              </Route>
              <Route path="/employees">
                {components.employees}
              </Route>
              <Route path="/jiras">
                {components.jiras}
              </Route>
              <Route path="/projects">
                {components.projects}
              </Route>
              <Route path="/addnewproject">
                {components.addProjectForm}
              </Route>
              <Route path="/addnewjira">
                {components.addJiraForm}
              </Route>
              <Route path="/addnewemployee">
                {components.addEmployeeForm}
              </Route>
              <Route path="/liveedit">
                {components.liveText}
              </Route>
              <Route path="/individualjira/:id" children={<IndividualJiraMiddleware />} />
              <Route path="/fightcorona" >
                {components.fightCorona}
              </Route>
              <Route path="/statedata/:id" children={<CityWiseDataMiddleWare />} />
              <Route path="/zonedata/:id" children={<ZoneWiseDataMiddleWare />} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

function IndividualJiraMiddleware(){
    
  let {id} = useParams();
  return(
    <IndividualJiraPage id={`${id}`} />
  )

}

function CityWiseDataMiddleWare() {
    let {id} = useParams();
    return(
        <StateTable id={`${id}`} />
    )
}

function ZoneWiseDataMiddleWare() {
    let {id} = useParams();
    return(
        <ZoneTable id={`${id}`} />
    )
}



export default App;
