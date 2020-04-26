import React, {Component} from 'react';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


class LiveText extends Component
{

    componentDidMount = () =>{
        const script1 = document.createElement("script");
        script1.src = "https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.4/sockjs.min.js";
        script1.async = true;
        document.body.appendChild(script1);

        const script2= document.createElement("script");
        script2.src = "https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js";
        script2.async = true;
        document.body.appendChild(script2);

        const script3 = document.createElement("script");
        script3.src = "/js/main.js";
        script3.async = true;
        document.body.appendChild(script3);

        const script4 = document.createElement("script");
        script4.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
        script4.async = true;
        document.body.appendChild(script4);

        const script5 = document.createElement("script");
        script5.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
        script5.async = true;
        document.body.appendChild(script5);

        const script6 = document.createElement("script");
        script6.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
        script6.async = true;
        document.body.appendChild(script6);

    }
    render(){
        return(
            <div id="main-content" className="row" style={{backgroundColor:"white",padding : "10px"}}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form className="form-inline">
                        <div className="form-group">
                            <input id="username" type="text" placeholder="Enter Name" />
                            <button id="connect" className="btn btn-default" type="button">Connect</button>
                            <button id="disconnect" className="btn btn-default" type="button"
                                    disabled="disabled">Disconnect
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-2"></div>
                <div className="col-md-8" id="chattab">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="name">Enter your message</label>
                            <textarea className="form-control" id="name" placeholder="Enter yor message here"></textarea>
                        </div>
                        <button id="send" className="btn btn-default" type="button">Send</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-12">
                    <table id="conversation" className="table table-striped">
                        <thead>
                        <tr>
                            <th>ChatRoom</th>
                        </tr>
                        </thead>
                        <tbody id="greetings">
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default LiveText;