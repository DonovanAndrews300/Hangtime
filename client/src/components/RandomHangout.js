import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class RandomHangout extends Component {
    render(){
        return(
            <div>
                <h3>Hangtime</h3>
                <div className="container">
                    <textarea></textarea>
                </div>
                <button classname="btn btn-primary">
            <Link to="/all" classname="nav-link">All Hangouts</Link>
            </button>
            <button classname="btn btn-primary">Get a Hangout</button>
            </div>
        )
    }
}