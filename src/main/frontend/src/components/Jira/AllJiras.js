import React, {Component} from 'react';
import Axios from 'axios';
import {MDBDataTable} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class AllJiras extends Component
{
    state = {
        jiras : [],
        tableContent : []
    }

    componentDidMount(){
        const URL = "/jira/viewall";
        Axios.get(URL).then(response => response.data)
        .then((data)=>{
            this.setState({jiras : data});
            console.log(this.state.jiras);
            var arr= [];
            this.state.jiras.forEach(function(row){
              var obj = {
                "id" : row.id,
                "title": row.title,
                "description": row.description,
                "priority": row.priority,
                "story_points": row.story_points,
                "project_id": row.project!=null?row.project.id:"Not Assigned",
                "sprint": row.sprint,
                "assignee": row.assignee.firstname + ' '+ row.assignee.lastname,
                "assigned_to": row.assigned_to.firstname + ' '+ row.assigned_to.lastname,
                "date_created": row.date_created,
                "status": row.status,
                "date_ended": row.date_ended
              };
              arr.push(obj);
            });
            this.setState({tableContent : arr});
        })
    }

    render(){
        const data = {
            columns: [
              {
                label: 'ID',
                field: 'id',
                sort: 'asc'
              },
              {
                label: 'Title',
                field: 'title',
                sort: 'asc'
              },
              {
                label: 'Description',
                field: 'description',
                sort: 'asc'
              },
              {
                label: 'Priority',
                field: 'priority',
                sort: 'asc'
              },
              {
                label: 'Story Points',
                field: 'story_points',
                sort: 'asc'
              },
              {
                label: 'Project ID',
                field: 'project_id',
                sort: 'asc'
              },
              {
                label: 'Sprint',
                field: 'sprint',
                sort: 'asc'
              },
              {
                label: 'Assignee',
                field: 'assignee',
                sort: 'asc'
              },
              {
                label: 'Assigned To',
                field: 'assigned_to',
                sort: 'asc'
              },
              {
                label: 'Date Created',
                field: 'date_created',
                sort: 'asc'
              },
              {
                label: 'Status',
                field: 'status',
                sort: 'asc'
              },
              {
                label: 'Date Ended',
                field: 'date_ended',
                sort: 'asc'
              }
            ],
            rows: this.state.tableContent
        };
        return(
            <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                <div id="all_jiras" className="col-md-12">
                    <MDBDataTable
                        striped
                        hover
                        responsive
                        data= {data}
                        >
                    </MDBDataTable>
        
                </div>
            </div>
        )
    }
}

export default AllJiras;