import React, {Component} from 'react';
import {MDBDataTable} from "mdbreact";
import Axios from "axios";

class StateTable extends Component{

    state = {
        stateId : this.props.id,
        AllStates : [],
    };

    componentDidMount = async() => {
        await this.setState({
            stateId : this.props.id
        });

        await Axios.get("https://api.covid19india.org/state_district_wise.json")
            .then(response => response.data)
            .then((data) =>{
                const Stdata = [];
                const keys = Object.keys(data);
                this.setState({
                    AllStates : keys
                });
                for(let key of this.state.AllStates)
                {
                    let state_data = data[key];
                    const state_keys = Object.keys(state_data);
                    Stdata.push(state_data[state_keys[0]]);
                }
                const stid = this.state.stateId;
                var b = Stdata[stid];
                this.setState({
                    Statedata : b
                });
                // console.log(this.state.Statedata);
                const cities = Object.keys(this.state.Statedata);
                const buildData = [];
                for(let city of cities)
                {
                    var obj ={
                        "city" : city,
                        "confirmed" :  this.state.Statedata[city]["confirmed"],
                        "active" : this.state.Statedata[city]["active"],
                        "deaths" : this.state.Statedata[city]["deceased"],
                        "recovered" : this.state.Statedata[city]["recovered"]
                    };
                    buildData.push(obj);
                }
                this.setState({
                    RequestedData : buildData
                });

            });
    };

    render() {
        const data = {
            columns : [
                {
                    label : 'City',
                    field : 'city',
                    sort : 'asc'
                },
                {
                    label : 'Confirmed',
                    field : 'confirmed',
                    sort : 'asc'
                },
                {
                    label : 'Active',
                    field : 'active',
                    sort : 'asc'
                },
                {
                    label : 'Recovered',
                    field : 'recovered',
                    sort : 'asc'
                },
                {
                    label : 'Deaths',
                    field : 'deaths',
                    sort : 'asc'
                }

            ],
            rows : this.state.RequestedData
        };
        return(
            <>
                <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                    <div className="col-md-12">
                        <h1 className={"text-center"}>City Wise Data of {this.state.AllStates[this.state.stateId]}</h1>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                    <div className="col-md-12">
                        <MDBDataTable
                            striped
                            hover
                            responsive
                            small
                            data= {data}
                        >
                        </MDBDataTable>
                    </div>
                </div>

            </>
        );
    }
}

export default StateTable;