import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class RandomHangout extends Component {
    constructor(props){
        super(props);
        this.randomHangout = this.randomHangout.bind(this);
        this.state={
            name:'',
            location:'',
            cost:'',
            hangout:{},
        };
    }

    randomHangout(){
        axios.get('http://localhost:4000/hangout/')
            .then(res => {
                this.setState({ hangout:res.data[Math.floor(Math.random() *res.data.length)]});
        
                this.setState({
                    name:this.state.hangout.name,
                    location:this.state.hangout.location,
                    cost:this.state.hangout.cost,
                });
            })
        }

    
    
    
    render(){
        return(
            <div>
                <h3>Hangtime</h3>
                <div className="container">
                    <ul>
                        <li>{ this.state.name }</li>
                        <li>{ this.state.location }</li>
                        <li>{ this.state.cost }</li>
                    </ul>
                </div>
                <button className="btn btn-light">
                <a href="#" onClick={this.randomHangout}>Get Hangout</a>
                </button> 
                <button className="btn btn-light">
                <Link to="/all">All Hangouts</Link>
                </button>
                <button className="btn btn-light">
                <Link to="/add">New Hangout</Link>
                </button>
                <button className="btn btn-light">
                <a href="#" onClick={this.randomHangout}>Get Hangout</a>
                </button> 
            </div>
        )
    }
    }
