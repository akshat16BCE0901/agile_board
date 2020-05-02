import React, {Component} from 'react';
import {MDBDataTable} from "mdbreact";
import Axios from "axios";

class ZoneTable extends Component{

    state = {
        stateId : this.props.id,
        AllStates : [],
        AllDistrictsCorrespondingToStates : [],
        AllStatesForZones : []
    };

    componentDidMount = async() => {
        await this.setState({
            stateId : this.props.id
        });

        await Axios.get("../zone_data.json")
            .then(response => response.data)
            .then((data) => {
                const arr = [];
                const arr2 = [];
                for(let states of data)
                {
                    const state_arr_1 = [];
                    for(let district of states.districts)
                    {
                        state_arr_1.push(district);
                    }
                    arr.push(states.state);
                    arr2.push(state_arr_1);
                }
                this.setState({
                    AllStatesForZones : arr
                });

                this.setState({
                    AllDistrictsCorrespondingToStates : arr2
                });

                this.setState({
                    RequestedData : this.state.AllDistrictsCorrespondingToStates[this.state.stateId]
                });

            });
    };

    render() {
        const data = {
            columns : [
                {
                    label : 'District',
                    field : 'District',
                    sort : 'asc'
                },
                {
                    label : 'Zone',
                    field : 'Zone',
                    sort : 'asc'
                },

            ],
            rows : this.state.RequestedData
        };
        return(
            <>
                <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                    <div className="col-md-12">
                        <h1 className={"text-center"}>Zone Classification of {this.state.AllStatesForZones[this.state.stateId]}</h1>
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

export default ZoneTable;