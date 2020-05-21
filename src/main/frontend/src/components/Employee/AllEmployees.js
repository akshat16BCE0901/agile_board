import React, {Component} from 'react';
import Axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class AllEmployees extends Component
{
    state = {
        employees : [],
        columnDefs: [{
            headerName: "Id", field: "id", sortable : true, filter : true, autoHeight : true
        }, {
            headerName: "First Name", field: "firstname", sortable : true, filter : true, autoHeight : true
        },{
            headerName: "Last Name", field: "lastname", sortable : true, filter : true, autoHeight : true
        },{
            headerName: "Address", field: "address", sortable : true, filter : true, autoHeight : true
        },{
            headerName: "Phone", field: "phone", sortable : true, filter : true, autoHeight : true
        },{
            headerName: "Email", field: "email", sortable : true, filter : true, autoHeight : true
        },{
            headerName: "Date of birth", field: "date_of_birth", sortable : true, filter : true, autoHeight : true
        },{
            headerName: "Username", field: "username", sortable : true, filter : true, autoHeight : true
        },{
            headerName: "Password", field: "password", sortable : true, filter : true, autoHeight : true
        }]
    }
    componentDidMount(){
        const URL = "/employee/viewall";
        Axios.get(URL).then(response => response.data)
            .then((data)=>{
                this.setState({employees : data});
                this.setState({employees : this.state.employees.filter(emp => emp.firstname!=null)})
                console.log(this.state.employees);
            });
    }

    render(){
        return(
            <div className="row" style={{backgroundColor:"white",padding : "10px"}}>

                <div id="all_employees" style={{width : '100%'}} className="col-md-12 ag-theme-balham">
                    <AgGridReact
                        domLayout='autoHeight'
                        colResizeDefault='true'
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.employees}>
                    </AgGridReact>
                </div>
            </div>
        )
    }
}

export default AllEmployees;