import React, {Component} from 'react';
import Axios from 'axios';
import {MDBDataTable} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class AllProjects extends Component
{
    state = {
        projects : [],
        dataDisplay : []
    }

    
    componentDidMount(){
        const URL = "/project/viewall";
        Axios.get(URL).then(response => response.data)
        .then((data)=>{
            this.setState({projects : data});
            console.log(this.state.projects);
            var arr= [];
            this.state.projects.forEach(function(row){
                var obj = {
                    "id" : row.id,
                    "name" : row.name,
                    "description" : row.description,
                    "project_head" : row.project_head.firstname + ' ' + row.project_head.lastname
                };
                arr.push(obj);
            });
            this.setState({dataDisplay : arr});
            console.log(this.state.dataDisplay);
        });
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
                label: 'Name',
                field: 'name',
                sort: 'asc'
              },
              {
                label: 'Description',
                field: 'description',
                sort: 'asc'
              },
              {
                label: 'Project Head',
                field: 'project_head',
                sort: 'asc'
              }
            ],
            rows: this.state.dataDisplay
        };
        return(
            <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                <div id="all_projects" className="col-md-12">

                <MDBDataTable
                    striped
                    bordered
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

export default AllProjects;
