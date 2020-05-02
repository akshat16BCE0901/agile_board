import React, {Component} from 'react';
import Axios from "axios";
import {ListGroup,} from "react-bootstrap";

class ZoneData extends Component{

    state = {

        Zones : [],
        AllStatesForZones : []
    }

    componentDidMount() {
        Axios.get("./zone_data.json")
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

                console.log(this.state.AllStatesForZones);
                console.log(this.state.AllDistrictsCorrespondingToStates);

            })
    }

    render() {
        const tableRows1 = [];
        const tableRows2 = [];
        const tableRows3 = [];
        for(let i=0;i<12;i++)
        {
            tableRows1.push(<ListGroup.Item action href={"/zonedata/"+i}>
                {this.state.AllStatesForZones[i]}
            </ListGroup.Item>);
        }
        for(let i=12;i<24;i++)
        {
            tableRows2.push(<ListGroup.Item action href={"/zonedata/"+i}>
                {this.state.AllStatesForZones[i]}
            </ListGroup.Item>);
        }
        for(let i=24;i<36;i++)
        {
            tableRows3.push(<ListGroup.Item action href={"/zonedata/"+i}>
                {this.state.AllStatesForZones[i]}
            </ListGroup.Item>);
        }

        return(
            <>
                <div className="col-md-4 text-center">
                    <ListGroup>
                        {tableRows1}
                    </ListGroup>
                </div>
                <div className="col-md-4 text-center">
                    <ListGroup>
                        {tableRows2}
                    </ListGroup>
                </div>
                <div className="col-md-4 text-center">
                    <ListGroup>
                        {tableRows3}
                    </ListGroup>
                </div>
            </>



        );
    }
}

export default ZoneData;