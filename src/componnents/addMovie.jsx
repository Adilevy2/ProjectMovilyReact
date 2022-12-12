import {useFormik} from 'formik'
import React from 'react';
import { Link } from 'react-router-dom';

const AddMovie = (props) => {
    const formik=useFormik({
        initialValues:{
            name:'',
            ganere:'',
            hour:'',
            minutes:''
        },
        
    });
    
    return ( 
        

        <div style={{backgroundColor:'rgb(226, 221, 221)', height:'38rem',width:'100%'}}>
             <div className='sticky-top'>
            <div style={{height:'4rem',backgroundColor:'rgb(235, 79, 79)'}} className="d-flex justify-content-between d-flex align-items-end">
                <div className='justify-content-start'><span style={{fontSize:'3rem', fontFamily:'fantasy'}}>movily</span></div>
                </div>
            </div>
                <div className='position-absolute top-50 start-50 w-70 p-5 translate-middle rounded-4' style={{border:'solid black 2px',backgroundColor:'white'}}>
                    <form>
                    <div className="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">movie name</span>
                    <input onChange={formik.handleChange} name="name" type="text" class="form-control" aria-describedby="basic-addon1" pattern="[A-Za-z]{}" required/>
                    </div>
                    <div className="input-group mb-3">
                    <label className="input-group-text" for="inputGroupSelect01">Ganere</label>
                    <input onChange={formik.handleChange} name='ganere' type="text" class="form-control" aria-describedby="addon-wrapping" pattern="[A-Za-z]{}" required/> 
                    </div>
                        <label>Movie Length</label>
                        <div className="row">
                         <div className="col">
                          <input onChange={formik.handleChange} name='hour' type="text" class="form-control" placeholder="hours" min="0" max="99" size="1" maxlength="2" pattern="[0-9]"  required/>
                          </div> : 
                          <div className="col">
                           <input onChange={formik.handleChange} name="minutes" type="text" class="form-control" placeholder="minutes" min="0" max="59" size="1" maxlength="2" pattern="[0-9]" required/>
                         </div>
                        </div>
                    
                        <div className="hstack gap-3" style={{marginLeft:"27%", marginTop:"5%"}}>
                        <button onClick={(ev)=>props.handleNewMovieValues(ev,formik.values)}  type="submit" class="btn btn-outline-primary">Submit</button>
                        <button type="reset" class="btn btn-outline-danger">Reset</button>
                        </div>
                    </form>
                </div>
                
                <Link className="m-3 link-dark" to="/"><button className='position-absolute bottom-0 start-50 translate-middle-x btn btn-danger'>back to main page</button></Link>
        </div>
        
     );
    }
 
export default AddMovie;