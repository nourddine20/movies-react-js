import React, { Component } from 'react'
import "../styles/Home.css"
import {gettrendmovies} from "./APIs/main"
import {getdiscovermovies} from "./APIs/main"
import popanime1 from "../images/popanime1.png"
import popanime2 from "../images/popanime2.png"
import popanime3 from "../images/popanime3.png"
import popanime4 from "../images/popanime4.png"
import load_data from "../images/loading.gif"
import cover3 from "../images/cover3.jpg"
import cover4 from "../images/cover4.jpg"
import cover5 from "../images/cover5.jpg"
import $ from "jquery"
import {Fragment} from "react"
import { Link } from 'react-router-dom'
class Home extends Component {

    state = {
       trendmovies:[],
       discovermovies:[],
       img_url :"https://image.tmdb.org/t/p/w500"
    }

  /// draw trend movies from api 
    drawtrendmovies = ()=>{
      let arrytrendmovies=[];
      gettrendmovies().then(e=>{
        
        this.setState({
          trendmovies:e.data.results
        })
        
       this.state.trendmovies.map((ele,index)=>{
          if(index<4){
            arrytrendmovies.push(ele);
          }
        })

        console.log(arrytrendmovies);
      this.setState({
          trendmovies:arrytrendmovies
      })

      console.log(this.state)
    }
  )
  }


  /// draw dicover movies from api 
  drawdiscovermovies = ()=>{
    let arrydiscovermovies=[];
    getdiscovermovies().then(e=>{
      
      this.setState({
        discovermovies:e.data.results
      })
      
     this.state.discovermovies.map((ele,index)=>{
        if(index<10){
          arrydiscovermovies.push(ele);
        }
      })

      console.log(arrydiscovermovies);
    this.setState({
      discovermovies:arrydiscovermovies
    })

    console.log(this.state)
  }
)
}


    componentDidMount(){
      
      this.drawtrendmovies();
      this.drawdiscovermovies();
    }
  
    shownav = ()=>{
      
        let nav = document.querySelector(".navhead");

       
      if(window.innerWidth<=750){
         if(nav.style.display=="none"){
              nav.style.display="flex";
              nav.style.visibility="visible";
              nav.style.opacity="1";
              
          }
          else{
              nav.style.display="none";
              nav.style.visibility="hidden";
              nav.style.opacity="0";
              
          } }else{
            nav.style.display="flex";
            nav.style.visibility="visible";
            nav.style.opacity="1";
          }
        
    
       
    }
    render() {
        return (
    <div className="homepage">
   
        
   

    <div  id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={cover3} alt="First slide"/>
     
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={cover4} alt="Second slide"/>
          
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src={cover5} alt="Second slide"/>
    
    </div>
   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

<section className="animepopular">
      <div className="listanimepop row">
         
          <div className="box_list col-12">
            <div className="state_list">
            <span className="animepop">افلام اليوم</span>
            </div>
             <div className="anime_list row my-2">
               {console.log(this.state.trendmovies.length)}
              {this.state.trendmovies.length > 0 ? 
                  this.state.trendmovies.map((ele)=>{
                 return(
                  <Link to={`/movie-details/${ele.id}`} key={ele.id} className="animepost col-lg-2 col-sm-3 col-5 p-2">
                   <div className="box_preview">
                      <div className="preview">
                        <img src={this.state.img_url+ele.poster_path}/>
                        <span className="noti1">يعرض الان</span>
                        <span className="noti2">Trend</span>
                      </div>
                   </div>
                 

                  <div className="title">
                     {ele.title}
                  </div>
                </Link>
                 )
               }) :  <div className="load ">
                  <img src={load_data}/>
               </div> 
              
            }
            
             </div>
           
          </div>
      </div>
    
</section>
        
        <section className="box_list_movies">

            <div className="list_movies p-2">
                <div className="more_things">
                    <span className="title_morethings">الافلام المشهورة</span>
                    <Link to={"/categries"} className="btn_morethings">المزيد من الافلام</Link>
                </div>

                <div className="movies_listarticle row  mx-2 mr-4 my-2" >
                {this.state.discovermovies.length > 0 ? 
                  this.state.discovermovies.map((ele)=>{
                 return(
                  <Link to={`/movie-details/${ele.id}`} className="articlemovie col-lg-2 col-sm-3 col-7 p-2">
                   
                  <div className="box_preview">
                  <div className="preview">
                     <img src={this.state.img_url+ele.poster_path}/>
                     {/* <span className="noti1">يعرض الان</span>
                     <span className="noti2"></span> */}
                   </div>
                  </div>
                  
                   <div className="title">
                     {ele.title}
                   </div>
                 </Link>)
                  }): 
                   "no data here"}
                </div>
            </div>
            

        </section>
  </div>

        )
    }
}


export default Home