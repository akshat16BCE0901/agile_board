import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Axios from "axios";

class IndividualJiraPage extends Component
{
    
    state = {
        openDesc : true,
        openAtt : false,
        openComm : false,
        jira : {
            "id":null,
            "title":"",
            "description":"",
            "priority":"",
            "story_points":null,
            "project":{
                id : null,
                name : ""
            },
            "sprint":null,
            "assignee":{
                "id":null,
                "firstname":"",
                "lastname":""
            },
            "assigned_to":{
                "id":null,
                "firstname":"",
                "lastname":""
            },
            "date_created":null,
            "status":"",
            "date_ended":null
        },
        jiraId : this.props.id
    };
    
    refreshData = function(){
        Axios.get(`/api/jira/view/${this.state.jiraId}`)
        .then(response => response.data)
        .then((data) => {
            this.setState({jira : data});
            console.log(this.state.jira);
        });
    }
    componentDidMount = () =>{
        this.refreshData();
    }
    changeStatus = async(jiraId,newStatus) =>{

        Axios.put(`/api/jira/updatestatus/${jiraId}/${this.state.jira.status}/${newStatus}`)
        .then(response => response.data)
        .then((data) =>{
            console.log(data);
        });
        await this.refreshData();

    }
    setOpenDesc = function(flag)
    {
        this.setState({openDesc : flag});
    };
    setOpenAtt = function(flag)
    {
        this.setState({openAtt : flag});
    };
    setOpenComm = function(flag)
    {
        this.setState({openComm : flag});
    };
    render(){
        return(
            <>
                <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                    <div className="col-md-4">
                        <p><span className="h6">ID : </span>{this.state.jira.id}</p>
                        <p><span className="h6">Title : </span>{this.state.jira.title}</p>
                        <p><span className="h6">Assignee : </span>{this.state.jira.assignee.firstname +' '+this.state.jira.assignee.lastname}</p>
                        <p><span className="h6">Story Points : </span>{this.state.jira.story_points}</p>
                        <p><span className="h6">Project : </span>{this.state.project!=null?this.state.jira.project.name:"Not assigned to any project"}</p>
                    </div>
                    <div className="col-md-4">
                        <p><span className="h6">Status : </span>{this.state.jira.status}</p>
                        <p><span className="h6">Sprint : </span>{this.state.jira.sprint}</p>
                        <p><span className="h6">Date Created : </span>{this.state.jira.date_created}</p>
                        <p><span className="h6">Date Ended : </span>{this.state.jira.date_ended}</p>
                        <p><span className="h6">Priority : </span>{this.state.jira.priority}</p>
                    </div>
                    <div className="col-md-4">
                        <h2 className="text-center">Quick Actions</h2>
                        <div className="text-center">
                            <Button onClick={() => this.changeStatus(this.state.jiraId,"Done")} variant="success">Mark as Completed</Button>
                            <Button onClick={() => this.changeStatus(this.state.jiraId,"Aborted")} variant="danger">Mark as Aborted</Button>
                            <Button onClick={() => this.changeStatus(this.state.jiraId,"On Hold")} variant="warning">Mark as On hold</Button>
                            <Button onClick={() => this.changeStatus(this.state.jiraId,"In Play")} variant="info">Mark as In Play</Button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#e3e3e3",padding : "10px", border: '1px solid black'}}>
                    <div className="col-md-12">
                        <h5 onClick={() => this.setOpenDesc(!this.state.openDesc)} aria-controls="description" aria-expanded={this.state.openDesc} >Description&nbsp;<i className="fas fa-angle-down"></i>  </h5>
                    </div>
                    <Collapse in={this.state.openDesc}>
                        <div id="description" className="col-md-12">
                            <p className="text-justify">
                                {this.state.jira.description}
                            </p>
                        </div>
                    </Collapse>
                </div>
                <div className="row" style={{backgroundColor:"#e3e3e3",padding : "10px", border: '1px solid black'}}>
                    <div className="col-md-12">
                        <h5 onClick={() => this.setOpenAtt(!this.state.openAtt)} aria-controls="attachments" aria-expanded={this.state.openAtt} >Attachments&nbsp;<i className="fas fa-angle-right"></i>  </h5>
                    </div>
                    <Collapse in={this.state.openAtt}>
                        <div id="attachments" className="col-md-12">
                        As an IDL user, I want to reduce the DAC build time in order<br />
                        As an IDL user, I want to reduce the DAC build time in order<br />
                        As an IDL user, I want to reduce the DAC build time in order<br />
                        </div>
                    </Collapse>
                </div>
                <div className="row" style={{backgroundColor:"#e3e3e3",padding : "10px", border: '1px solid black'}}>
                    <div className="col-md-12">
                        <h5 onClick={() => this.setOpenComm(!this.state.openComm)} aria-controls="comments" aria-expanded={this.state.openComm} >Comments&nbsp;<i className="fas fa-angle-right"></i>  </h5>
                    </div>
                    <Collapse in={this.state.openComm}>
                        <div id="comments" className="col-md-12">
                            As an IDL user, I want to reduce the DAC build time in order<br />
                            As an IDL user, I want to reduce the DAC build time in order<br />
                            As an IDL user, I want to reduce the DAC build time in order<br />
                            As an IDL user, I want to reduce the DAC build time in order<br />
                            As an IDL user, I want to reduce the DAC build time in order<br />
                            As an IDL user, I want to reduce the DAC build time in order<br />
                        </div>
                    </Collapse>
                </div>
            </>
        )
    }
}

export default IndividualJiraPage;