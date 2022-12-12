const SideBar = props => {
    const{arr}=props;
    let arrGanere=arr.map(ev=>ev=ev.ganere);
    let arrButtons=[];
    for(let i=0;i<arrGanere.length;i++){
        if(!arrButtons.includes(arrGanere[i]))
        arrButtons.push(arrGanere[i]);
    }
    return ( 
        <div className="d-grid gap-2 mt-3">
            <button onClick={()=>props.allMovies()} type="button" className="btn btn-danger position-relative">All movies
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.arr.length}
        <span className="visually-hidden">unread messages</span>
        </span>
        </button>
            {arrButtons.map(ev=><button onClick={()=>props.ganereButtons(ev)} type="button" className="btn btn-danger position-relative">{ev}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.arr.filter(event=>event.ganere===ev).length}
        <span className="visually-hidden">unread messages</span>
        </span>
        </button>)}
        
        </div>
     );
}
 
export default SideBar;