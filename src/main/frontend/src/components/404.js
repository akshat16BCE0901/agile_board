import React, {Component} from 'react';

class ErrorPage extends Component{

    render() {
        return(
            <div style={{backgroundImage : "404.png", backgroundSize : "cover", width : "100%"}} className={"text-center"}>
                <img className="img-responsive img" src="404.png" alt={"Error 404"}/>
            </div>
        )
    }

}

export default ErrorPage;