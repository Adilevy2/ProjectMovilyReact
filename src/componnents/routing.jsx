import { Route, Routes} from "react-router-dom";
import AddMovie from "./addMovie";
import Main from "./main";
import React, { Component } from 'react';

class Routing extends Component {
    state={
    
    }
    
    render() {
        return (
            <React.Fragment>    
                        <Routes>
                          <Route path="/" element={<Main></Main>}></Route>
                          <Route path="/addMovie" element={<AddMovie handleNewMovieValues={(ev,values)=>this.handleNewMovieValues(ev,values)}/>}></Route>
                      </Routes>
                
            </React.Fragment>
        );
    }
}

export default Routing;
