import React, { Component } from 'react'
import mylogo from "../images/log.png"
import {getmoviebysearch} from "./APIs/main"
import { Link } from 'react-router-dom'
export default class Nav extends Component {

      state={
          movietitle:"",
          isclick:false
      }

    handlerinput = (event)=>{
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
        })
      
         
          
      }

   

    //   control(){
    //       document.onclick(()=>{
    //           this.state.isclick=false
    //       })
    //   }

    //   componentDidUpdate(){
    //       this.control();
    //   }

    showhide = ()=>{
        if(this.state.isclick==false){
            this.setState({
                isclick:true
            })
        }
        else{
            this.setState({
                isclick:false
            })
        }
    }
    render() {
        return (
            <div className="box_container">
                 <div className="container_nav">
        <div className="logo">
            <Link to="/"><img src={mylogo}/></Link>
        </div>

        <ul className="navhead">
                    <li> <Link to="/movies-react-js/">الرئيسية</Link></li>
                    <li><a href="#">قائمة الافلام</a></li>
                    <li><a href="#">اتصل بنا</a></li>
                    
                </ul>
        <div className="btn_toggle">
            <a><i className="fa fa-bars fa" onClick={this.shownav} ></i><span className="mr-3">القائمة</span></a>
        </div>
    <div className="accounent">
       <i className="fas fa-user"></i>
        <i className="fas fa-search" onClick={this.showhide}
         ></i>
        <i className="fas fa-sun"></i>
        {console.log(this.state.isclick)}
    { this.state.isclick == true && <div className="box_search p-2">      
                <input type="search" className="w-100 p-2" placeholder="ابحت عن افلام  ..." name="movietitle"  onChange={this.handlerinput} />
                
                <Link to={`/searchmovie/${this.state.movietitle}`}>
                <i className="fas fa-search fa-x iconsearch"
                 onClick={this.showhide}></i>
                 </Link>
                
                 
                 
            <div className="tring">
                    
            </div>
        </div> }
    </div>  
    
    </div>
   
            </div>
        )
    }
}
