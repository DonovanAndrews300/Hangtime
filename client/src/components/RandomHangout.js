import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class RandomHangout extends Component {
    constructor(props){
        super(props);
        this.state={
            hangouts:[]
        }
    }
    
    render(){
        return(
            <div>
                <h3>Hangtime</h3>
                <div className="container">
                    <textarea></textarea>
                </div>
                <button className="btn btn-primary">
                <Link to="/all">All Hangouts</Link>
                </button>
                <button className="btn btn-primary">
                Get a hangout
                </button>
            </div>
        )
    }
}