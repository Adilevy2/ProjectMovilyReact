import React, { Component } from 'react';
import MovieList from './movies';
class MovieTable extends Component {
    state = {  } 
    render() { 
        return (
            <div className='text-white' style={{backgroundColor:'rgb(97, 94, 94)'}}>
                <h1>{this.props.nameGanere}</h1>
        <table className='table text-white' >
   <thead>
       <tr>
       <th>name</th>
       <th>id</th>
       <th>ganere</th>
       <th>time</th>
       <th>delete</th>
       <th>like</th>
       </tr>
   </thead>
   <tbody>
     {this.props.arr2.map((val)=><MovieList key={val.id} name={val.name} id={val.id} ganere={val.ganere} time={val.time} like2={val.like} delete={()=>this.props.delete(val.id)} likeOrNot={()=>this.props.likeOrNot(val.id)}></MovieList>)} 
   </tbody>
</table>
            <div style={{marginLeft:"45%"}}>
    {this.props.arrInput.map(ev=><button onClick={(ev)=>this.props.changePage(ev)}>{this.props.arrInput.indexOf(ev)+1}</button>)}
            </div>
            </div>
        );
    }
}
 
export default MovieTable;