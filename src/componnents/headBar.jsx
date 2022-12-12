import React, { Component } from 'react';
import {Link} from "react-router-dom";
class HeadBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='sticky-top'>
            <div style={{height:'4rem',backgroundColor:'rgb(235, 79, 79)'}} className="d-flex justify-content-between d-flex align-items-end">
                <div onClick={()=>this.props.goBack()} className='justify-content-start'><span style={{fontSize:'3rem', fontFamily:'fantasy'}}>movily</span></div>
                <div className='justify-content-center'><Link className="m-3 link-dark" to="/addMovie"><button className="btn btn-danger">add movie</button></Link></div>
                <div className='justify-content-end '><span>items in page: <input onChange={(ev)=>this.props.clickInputFunction(ev)} type="text" style={{width:'30px'}} /></span>
                <button className='btn btn-light' onClick={()=>this.props.extractInput()}>enter</button>
                </div>
                </div>
    </div>
        );
    }
}
 
export default HeadBar;