import React, {Component} from 'react';
import Axios from "axios";
import {Col, ListGroup, Nav, Row, Tab} from "react-bootstrap";

class StateData extends Component{

    state = {
        cityData : {

        },
        AllStates : [],
        Stdata : []
    }

    componentDidMount() {
        Axios.get("https://api.covid19india.org/state_district_wise.json")
            .then(response => response.data)
            .then((data) =>{
                const Stdata = [];
                const keys = Object.keys(data);
                this.setState({
                    AllStates : keys
                })
                for(let key of this.state.AllStates)
                {
                    let state_data = data[key];
                    const state_keys = Object.keys(state_data);
                    Stdata.push(state_data[state_keys[0]]);
                }
                this.setState({
                    Stdata : Stdata
                })
                console.log(this.state.AllStates);

                console.log(this.state.Stdata);
            });
    }

    constructor(props) {
        super(props);
    }

    render() {
        const tableRows1 = [];
        const tableRows2 = [];
        const tableRows3 = [];
        for(let i=0;i<11;i++)
        {
            tableRows1.push(<ListGroup.Item>
                {this.state.AllStates[i]}
            </ListGroup.Item>);
        }
        for(let i=11;i<22;i++)
        {
            tableRows2.push(<ListGroup.Item>
                {this.state.AllStates[i]}
            </ListGroup.Item>);
        }
        for(let i=22;i<32;i++)
        {
            tableRows3.push(<ListGroup.Item>
                {this.state.AllStates[i]}
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

export default StateData;