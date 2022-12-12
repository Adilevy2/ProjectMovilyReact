
import HeadBar from './headBar';
import SideBar from './sideBar';
import MovieTable from './moviesTable';
import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <div style={{backgroundColor:'rgb(97, 94, 94)'}}>
                 <div >
                     <HeadBar {...this.props}></HeadBar>    
                     <div class="row">
                         <div class="col-2">
                        <SideBar {...this.props}/>
                        </div>
                        <div class="col-9"><MovieTable {...this.props}></MovieTable></div>
                  </div>     
                 </div>
            </div>
        );
    }
}

export default MainPage;
