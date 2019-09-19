import React, {Component} from 'react';

export default class UpdateHangout extends Component{
    constructor(props){
            super(props)

            this.state = {
                name:"",
                location:"",
                cost:0,
            }
        }
        
        render(){
        return(
            <div>
                <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                    Update Hangout
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group" >
                            <label>Name:</label>
                            <input 
                            required
                            type="text"
                            value={this.state.name}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Location:</label>
                            <input
                            required
                            type="text"
                            value={this.state.location}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Cost:</label>
                            <input
                            required
                            type="text"
                            value={this.state.cost}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="sumbit" value="Submit" className="btn btn-primary"/>
                        </div>
                    </form>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

