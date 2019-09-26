import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Hangout = props => (
    <tr>
        <td>{props.hangout.name}</td>
        <td>{props.hangout.location}</td>
        <td>{props.hangout.cost}</td>
        <td>
            <Link to={"/update/"+props.hangout._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteHangout(props.hangout._id)}}>Delete</a>
        </td>
    </tr>
)

export default class AllHangouts extends Component {
    constructor(props){
        super(props);
        this.deleteHangout = this.deleteHangout.bind(this);
        this.state={
        hangouts:[]
    };
}
    componentDidMount(){
        axios.get('http://localhost:4000/hangout/')
        .then(res => {
        this.setState({
            hangouts:res.data
        })
        })
    }

    deleteHangout(id){
        axios.delete('http://localhost:4000/hangout/'+id)
            .then(res => console.log(res.data));

        this.setState({
            hangouts:this.state.hangouts.filter(el => el._id !== id)
        })
    }

    allHangouts(){
        return this.state.hangouts.map(hangout => {
          return  <Hangout hangout={hangout} deleteHangout={this.deleteHangout} key={hangout._id}/>
        })
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
             {this.allHangouts()}
            </tbody>
            </table>   
        </div>)
    }
}