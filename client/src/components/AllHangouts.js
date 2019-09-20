import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class AllHangouts extends Component {
    constructor(props){
        super(props);
        this.state={
        hangouts:[]
    }
}

    render(){
        return(
        <div>
            <h3>Hangouts</h3>
            <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
             
            </tbody>
            </table>
            <Link to="/add" className="nav-link">
            <button className="btn btn-primary">New Hangout</button>
            </Link>

            <Link to="/update" className="nav-link">
            <button className="btn btn-primary">Update Hangout</button>
            </Link>   
        </div>)
    }
}