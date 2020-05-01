import React, {Component} from 'react';
import Axios from "axios";
import {ListGroup,} from "react-bootstrap";

class StateData extends Component{

    state = {
        AllStates : [],
    }

    componentDidMount() {
        Axios.get("https://api.covid19india.org/state_district_wise.json")
            .then(response => response.data)
            .then((data) =>{
                const keys = Object.keys(data);
                this.setState({
                    AllStates : keys
                })
                console.log(this.state.AllStates);
            });
    }

    render() {
        const tableRows1 = [];
        const tableRows2 = [];
        const tableRows3 = [];
        for(let i=0;i<11;i++)
        {
            tableRows1.push(<ListGroup.Item action href={"/statedata/"+i}>
                {this.state.AllStates[i]}
            </ListGroup.Item>);
        }
        for(let i=11;i<22;i++)
        {
            tableRows2.push(<ListGroup.Item action href={"/statedata/"+i}>
                {this.state.AllStates[i]}
            </ListGroup.Item>);
        }
        for(let i=22;i<32;i++)
        {
            tableRows3.push(<ListGroup.Item action href={"/statedata/"+i}>
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