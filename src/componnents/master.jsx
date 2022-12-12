import React, { Component } from 'react';
import { Route, Routes} from "react-router-dom";
import MainPage from './mainPage';
import AddMovie from './addMovie';
class Master extends Component {
    state = { 
        arr:[{
            name:'shrek',
            id:1,
            ganere:'comedy',
            time:'2:20',
            like:0
            },
            {name:'shrek2',
            id:2,
            ganere:'drama',
            time:'2:30',
            like:0 
            },
            {
            name:'shrek3',
            id:3,
            ganere:'comedy',
            time:'1:20',
            like:0   
            },
            {name:'shrek4',
            id:4,
            ganere:'comedy',
            time:'2:50',
            like:0
            },
            {
            name:'shrek5',
            id:5,
            ganere:'horror',
            time:'1:20',
            like:0                  },
            {
            name:'shrek6',
            id:6,
            ganere:'action',
            time:'1:20',
            like:0   
           },
           {
            name:'shrek7',
            id:7,
            ganere:'action',
            time:'1:20',
            like:0   
            },
            {
            name:'shrek8',
            id:8,
            ganere:'horror',
            time:'1:20',
            like:0   
             },
             {
             name:'shrek9',
             id:9,
             ganere:'drama',
             time:'1:20',
             like:0   
              },
              {
              name:'shrek10',
              id:10,
              ganere:'drama',
              time:'1:20',
              like:0   
              },
              {
               name:'shrek11',
               id:11,
               ganere:'horror',
               time:'1:20',
               like:0   
               },
               {
               name:'shrek12',
               id:12,
               ganere:'comedy',
               time:'1:20',
               like:0   
               },
               {
               name:'shrek13',
               id:13,
               ganere:'action',
               time:'1:20',
               like:0   
               },],
       arr2: [{
         name:'shrek',
         id:1,
         ganere:'comedy',
         time:'2:20',
         like:0
         },
         {name:'shrek2',
         id:2,
         ganere:'drama',
         time:'2:30',
         like:0 
         },
         {
         name:'shrek3',
         id:3,
         ganere:'comedy',
         time:'1:20',
         like:0   
         },
         {name:'shrek4',
         id:4,
         ganere:'comedy',
         time:'2:50',
         like:0
         },
         {
         name:'shrek5',
         id:5,
         ganere:'horror',
         time:'1:20',
         like:0                  },
         {
         name:'shrek6',
         id:6,
         ganere:'action',
         time:'1:20',
         like:0   
        },
        {
         name:'shrek7',
         id:7,
         ganere:'action',
         time:'1:20',
         like:0   
         },
         {
         name:'shrek8',
         id:8,
         ganere:'horror',
         time:'1:20',
         like:0   
          },
          {
          name:'shrek9',
          id:9,
          ganere:'drama',
          time:'1:20',
          like:0   
           },
           {
           name:'shrek10',
           id:10,
           ganere:'drama',
           time:'1:20',
           like:0   
           },
           {
            name:'shrek11',
            id:11,
            ganere:'horror',
            time:'1:20',
            like:0   
            },
            {
            name:'shrek12',
            id:12,
            ganere:'comedy',
            time:'1:20',
            like:0   
            },
            {
            name:'shrek13',
            id:13,
            ganere:'action',
            time:'1:20',
            like:0   
            },],
         arr3:[{
               name:'shrek',
               id:1,
               ganere:'comedy',
               time:'2:20',
               like:0
               },
               {name:'shrek2',
               id:2,
               ganere:'drama',
               time:'2:30',
               like:0 
               },
               {
               name:'shrek3',
               id:3,
               ganere:'comedy',
               time:'1:20',
               like:0   
               },
               {name:'shrek4',
               id:4,
               ganere:'comedy',
               time:'2:50',
               like:0
               },
               {
               name:'shrek5',
               id:5,
               ganere:'horror',
               time:'1:20',
               like:0                  },
               {
               name:'shrek6',
               id:6,
               ganere:'action',
               time:'1:20',
               like:0   
              },
              {
               name:'shrek7',
               id:7,
               ganere:'action',
               time:'1:20',
               like:0   
               },
               {
               name:'shrek8',
               id:8,
               ganere:'horror',
               time:'1:20',
               like:0   
                },
                {
                name:'shrek9',
                id:9,
                ganere:'drama',
                time:'1:20',
                like:0   
                 },
                 {
                 name:'shrek10',
                 id:10,
                 ganere:'drama',
                 time:'1:20',
                 like:0   
                 },
                 {
                  name:'shrek11',
                  id:11,
                  ganere:'horror',
                  time:'1:20',
                  like:0   
                  },
                  {
                  name:'shrek12',
                  id:12,
                  ganere:'comedy',
                  time:'1:20',
                  like:0   
                  },
                  {
                  name:'shrek13',
                  id:13,
                  ganere:'action',
                  time:'1:20',
                  like:0   
                  },],
         
                   arrInput:[1],
                   nameGanere:'All movies',
                   numInput:100,
                   countInputStart:0,
                   countInputend:1,
                   pageNumber:1
     } 
     delete=(id)=>{
        let arr=this.state.arr.filter(ev=>ev.id!==id);    
         let arr2=arr.filter(ev=>{return ev.ganere===this.state.nameGanere || this.state.nameGanere==='All movies'});
         let arrInputlength=Math.ceil(arr2.length/this.state.numInput);
         let arrInput=this.state.arr2.filter(ev=>this.state.arr2.indexOf(ev)<arrInputlength);
         arr2=arr2.filter(ev=>{return arr2.indexOf(ev)<this.state.pageNumber*this.state.numInput && arr2.indexOf(ev)>=(this.state.pageNumber-1)*this.state.numInput})
        this.setState({arr,arr2, arrInput});
     }  
     goBack=()=>{
        let x=[...this.state.arr3];
                   this.setState({arr:x, arr2:x, nameGanere:'All movies', numInput:this.state.arr.length})
     }
     likeOrNot=(index)=>{
      let arr2=this.state.arr2.map(ev => {
         if(ev.id === index)
         ev.like=ev.like+1
         return ev});  
         let arr=this.state.arr.map(ev =>ev);
               this.setState({arr,arr2})
     }
     allMovies=()=>{
      let arr2=this.state.arr;
      let arrInputlength=Math.ceil(arr2.length/this.state.numInput);
      arr2=arr2.filter(ev=>{return(arr2.indexOf(ev)>=this.state.numInput*this.state.countInputStart && arr2.indexOf(ev)<this.state.numInput*this.state.countInputend)});
      let arrInput=this.state.arr.filter(ev=>this.state.arr.indexOf(ev)<arrInputlength);
      this.setState({arr2 ,nameGanere:'All movies',arrInput})
     }
     ganereButtons=(ganere)=>{
        let arr2=this.state.arr.filter(ev=>ev.ganere===ganere);
        arr2=arr2.filter(ev=>{return(arr2.indexOf(ev)>=this.state.numInput*this.state.countInputStart && arr2.indexOf(ev)<this.state.numInput*this.state.countInputend)});
        let arr3=this.state.arr.filter(ev=>ev.ganere===ganere);
        let arrInputlength=Math.ceil(arr3.length/this.state.numInput);
        let arrInput=this.state.arr.filter(ev=>this.state.arr.indexOf(ev)<arrInputlength);
        this.setState({arr2 ,nameGanere:ganere,arrInput});
     }
     extractInput=()=>{          
        let arrInput=this.state.arr.filter(ev=>{return ev.ganere===this.state.nameGanere || this.state.nameGanere==='All movies'});
        arrInput=arrInput.filter(ev=>arrInput.indexOf(ev)<arrInput.length/this.state.numInput);
        let arr2=this.state.arr.filter(ev=>{return ev.ganere===this.state.nameGanere || this.state.nameGanere==='All movies'});
        arr2=arr2.filter(ev=>{return(arr2.indexOf(ev)>=this.state.numInput*this.state.countInputStart && arr2.indexOf(ev)<=this.state.numInput*this.state.countInputend-1)});
       this.setState({arr2,arrInput});
     }
     clickInputFunction=(input)=>{
      let numInput=input.target.value;
      this.setState({numInput});
     }
     changePage=(x)=>{
        let arr2=this.state.arr.filter(ev=>{return ev.ganere===this.state.nameGanere || this.state.nameGanere==='All movies'});
        let countInputStart=this.state.numInput* x.target.innerText-this.state.numInput;
      let countInputend=this.state.numInput* x.target.innerText;
        arr2=arr2.filter(ev=>{return(arr2.indexOf(ev)>=countInputStart && arr2.indexOf(ev)<countInputend)});
       this.setState({arr2});
       this.setState({pageNumber:x.target.innerText});
     }
     handleNewMovieValues=(ev,values)=>{
      ev.preventDefault();
      let timeMovie='';
      if(parseInt( values.minutes)<10)
      timeMovie=values.hour+':0'+values.minutes;
      else
      timeMovie=values.hour+':'+values.minutes;
      let newMovie={name:values.name,id:this.state.arr[this.state.arr.length-1].id+1,ganere:values.ganere,time:timeMovie,like:0};
      this.state.arr.push(newMovie);
      this.state.arr2.push(newMovie);
      this.state.arr3.push(newMovie);
      this.setState({arr:this.state.arr,arr2:this.state.arr2,arr3:this.state.arr3});  
      alert(values.name+' has been added to the list')  
     } 
    render() { 
        return (
         <div style={{backgroundColor:'rgb(97, 94, 94)', height:'38rem'}}>
         <Routes>
                  <Route path="/" element={<MainPage arr={this.state.arr} arr2={this.state.arr2} arr3={this.state.arr3} delete={(id)=>this.delete(id)} goBack={this.goBack}
                   likeOrNot={(index)=>this.likeOrNot(index)} allMovies={this.allMovies} ganereButtons={(ganere)=>this.ganereButtons(ganere)} extractInput={this.extractInput}
                   clickInputFunction={(input)=>this.clickInputFunction(input)} changePage={(x)=>this.changePage(x)} arrInput={this.state.arrInput}
                   nameGanere={this.state.nameGanere} numInput={this.state.numInput} countInputStart={this.state.countInputStart} countInputend={this.state.countInputend}
                   pageNumber={this.state.pageNumber}/>}></Route>
                   <Route path="/addMovie" element={<AddMovie handleNewMovieValues={(ev,value)=>this.handleNewMovieValues(ev,value)}/>}></Route>
               </Routes>
        </div>
            
        );
    }
}
 
export default Master;