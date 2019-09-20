import React, {Component} from 'react';

export default class UpdateHangout extends Component{
    constructor(props){
            super(props)
            this.onChangeName=this.onChangeName.bind(this);
            this.onChangeLocation=this.onChangeLocation.bind(this);
            this.onChangeCost=this.onChangeCost.bind(this);
            this.onSubmit=this.onSubmit.bind(this);

            this.state = {
                name:"",
                location:"",
                cost:0,
            }
        }
        
        onChangeName(e){
            this.setState({
                name:e.target.value
            });
        }
        onChangeLocation(e){
            this.setState({
                location:e.target.value
            });
        }
        onChangeCost(e){
            this.setState({
                cost:e.target.value
            });
        }

        onSubmit(e){
            e.preventDefault(e);

            const hangout ={
                name:this.state.name,
                location:this.state.location,
                cost:this.state.cost
            }
            console.log(hangout)
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
                    <form onSubmit={this.onSubmit}> 
                        <div className="form-group" >
                            <label>Name:</label>
                            <input 
                            required
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Location:</label>
                            <input
                            required
                            type="text"
                            value={this.state.location}
                            onChange={this.onChangeLocation}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Cost:</label>
                            <input
                            required
                            type="text"
                            onChange={this.onChangeCost}
                            value={this.state.cost}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-primary"/>
                        </div>
                    </form>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

