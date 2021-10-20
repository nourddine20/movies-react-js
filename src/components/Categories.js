import React, { createRef, useRef,Link} from 'react'
import "../styles/Categories.css"
import react,{Component,useState,useEffect} from "react"
import { useContext } from 'react'
import { useReducer } from 'react';
import { getmoviebysearch } from './APIs/main';
import { matchPath, useParams } from 'react-router-dom';


// function useCount(){
//     const [count,setcount] = useState(0);

//     function increment(){
//         setcount(count+1);
//     }

//     function desincrement(){
//         setcount(count >0 ? count-1 : count);
//     }

//     return {
//         count,increment,desincrement
//     }
// }

export default function Categories(moviestitle){
    // const {count,increment,desincrement} = useCount();
    let {title} = useParams();
   function getmoviesbysearch(){
        //  getmoviebysearch(this.matc).then(e=>console.log(e.data));
       console.log(title)
    }

  

    useEffect(()=>{
        getmoviesbysearch();
        console.log("hellwo oll")
    })
    return (
    <div>
         <section className="box_list_movies">

<div className="list_movies p-2">
    {/* <div className="more_things">
        <span className="title_morethings">الافلام المشهورة</span>
        <Link to={"/categries"} className="btn_morethings">المزيد من الافلام</Link>
    </div> */}

    <div className="movies_listarticle row  mx-2 mr-4 my-2" >
    
     
      <div className="articlemovie col-lg-2 col-sm-3 col-7 p-2">
       
       <div className="preview">
         <img src=""/>
         {/* <span className="noti1">يعرض الان</span>
         <span className="noti2"></span> */}
       </div>
       <div className="title">
        
       </div>
     </div>
      
    </div>
</div>


</section>
    </div>
    );
}

// /********* class component  */
// // export class Loginc extends Component{
// //     constructor(){
// //         super();
// //         this.inputref = createRef();
// //     }
// //     state={
// //         fullname:" "
// //     }
     
// //     run= ()=>{
// //         console.log(this.inputref.current.style=
// //            'color',"red"
// //         )
// //     }

// //     componentDidMount(){
// //         this.run();
// //     }
// //     handlefullname = (e)=>{
// //         this.setState({
// //             fullname : e.target.value
// //         })
// //     }
// //     render(){
// //         return(
// //             <div>
// //                     hello world i am in class component
// //                     <input ref={this.inputref} type="text" onChange={this.handlefullname}/>

// //                 <button onClick={this.run}></button>
// //                    {this.state.fullname ? <h2>{this.state.fullname}</h2> : " "}

                
// //             </div>
// //         )
// //     }

// // }

// // function countreduce(state,action){
// //     if(action === "incress"){
// //         return  {count :state.count +1}
// //     }else if(action === "desincress"){
// //         return  {count :state.count -1}
// //     }else if(action === "reset"){
// //         return {count:state.count =0}
// //     }
    
// //     throw new Error(action + "is not define in count reducer");
    
// // }


// /************* function component */
// export function Loginf(){

//     const [firstname,setfirstname] = useState(" ");
//     const [lastname,setlastname] = useState(" ");

//     const fname = useRef();
//     const lname = useRef();

//     const [state,dispatch] = useReducer(countreduce,{
//         count:0
//     });

    
    
//     function showdata(){
//         console.log(lname)
//     }

//     useEffect(()=>{
//         fname.current.focus();
//     },[])


//     function focusnextinput(e){
//         if(e.key === 'Enter'){
//             lname.current.focus();
//         }
//     }
   

//     // /*** component did mount only */
//     // useEffect(()=>{
//     //     console.log("function component did mount")
//     // },[])
  
//     // //   /*** component did mount update only */ 
//     // // useEffect(()=>{
//     // //    
//     // //     console.log("function component did update")
//     // // },[skill])

//     // /** component sepefice update */

//     // useEffect(()=>{
//     //     if(skill ==='')
//     //     return
//     //     console.log("function component sepefic update")
//     // },[skill]);

//     // /**** function component will unmount  */

//     // useEffect(()=>{
//     //     console.log("function component will unmount")
//     //     return 
//     // },[])

// //    function handledata(e){
// //         setskill(e.target.value)
// //         console.log("hhhh")
// //     }

//     return  <div> 
        

//         {/* <select onChange={handleskill}>
//             <option vlaue="1">PhP</option>
//             <option vlaue="2">Python</option>
//             <option value="3">C#</option>

//         </select> */}

//          {/* <span>{skill}</span> */}

//          <input placeholder="first name ..." ref={fname} type="text" value={firstname} onChange={(e)=>{setfirstname(e.target.value) }}  onKeyDown={focusnextinput}/>
//          <input placeholder="last name ..." ref={lname} type="text" value= {lastname} onChange={(e)=>{ setlastname(e.target.value)}}/>
//          <button onClick={showdata}> ok </button>

            
//             <button onClick={()=>{dispatch("incress")}}> + </button>
//          <span> count : {state.count}</span>
//          <button onClick={()=>{dispatch("desincress")}}> - </button>
//          <button onClick={()=>{dispatch("reset")}}> reset</button>
         
//     </div>
// }



