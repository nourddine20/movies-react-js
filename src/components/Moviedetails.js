import React, { Component } from 'react'
import "../styles/Moviedetails.css"
import preview from "../images/previewmovie.png"
import { getmoviedetails } from './APIs/main'
import $ from "jquery"
import load_data from "../images/loading.gif"
export default class Moviedetails extends Component {

    state = {
       detailsmovie:{
        poster_path:"",
        title:"",
        overview:"",
        release_date:"",
        status:"",
        runtime:"",
        genres:[{
            id:"",
            name:""
        }],
        original_language:""





       },
       img_url :"https://image.tmdb.org/t/p/w500/"

    }

   

    draw_detailsmovie =()=>{
        getmoviedetails(this.props.match.params.id).then(e=>{
          
            this.setState({
                detailsmovie:e.data
              })

              
          
        })

    }

    componentDidMount(){
        this.draw_detailsmovie();
    }

    showfilm = ()=>{
        let movie_show_dom = document.querySelector(".movie_show");
        movie_show_dom.style.display="block";
        movie_show_dom.style.visibility="visible";
        movie_show_dom.style.opacity="1";

        let offset = $(movie_show_dom).offset().top;
        $("html,body").animate({
            scrollTop:offset
        },1000)
        // $(window).scrollTop(offset);

        
    }

    
    render() {
        return (
           
        <div>
             
              
            <section className="detailspage animepopular w-100% m-0">
              
              <div className="details_movie row">
                    {this.state.detailsmovie != {} && console.log(this.state.detailsmovie)}
                        <div className="preview_movie col-lg-3 col-md-4 col-12">
                            
                            <img src={this.state.img_url + this.state.detailsmovie.poster_path} />
                        </div> 
          
                        <div className="info_movie text-right col-lg-9 col-md-8 col-12">
                            <div className="title_movie">
                                <h2>{this.state.detailsmovie.title}</h2>
                            </div>
                            <div className="category_movie my-4 mr-5">

                    {this.state.detailsmovie.genres.map((ele) => {
                        return (<span key={ele.id}>
                            {ele.name}
                        </span>
                        )
                    }) }
                   
                            </div>

                            <div className="history_movie">
                                <p>
                                    {this.state.detailsmovie.overview}
                                </p>
                            </div>

                            <div className="other_info ">
                                <div className="side_info">
                                    <div className="item">
                                        <span>النوع :</span><b className="blueones">movie</b>
                                    </div>

                                    <div className="item">                      <span> تاريخ انتاج :
                                    </span><b>{this.state.detailsmovie.release_date}</b>
                                    </div>

                                    <div className="item">
                                        <span>حالة الفيلم :</span>
                                        <b className="blueones"> {this.state.detailsmovie.status}</b>
                                    </div>
                            
                                </div>

                                <div className="side_info">
                                    <div className="item">
                                        <span>عدد الحلقات :</span><b>غير معروف</b>
                                    </div>

                                    <div className="item">
                                        <span>مدة   :</span><b>{this.state.detailsmovie.runtime}    دقيقة</b>
                                    </div>

                                    <div className="item ">
                                    <span> اللغة   :</span><b>{this.state.detailsmovie.original_language}</b>

                                    </div>
                                    <div className="item">
                                        <span>المصدر :</span><b></b>
                                    </div>

                                </div>

                            </div>


                                            <div className="btn_watch my-3 ">
                                                <button className="mx-3" id="trilar">العرض التشويقي</button>

                                                <button className="mx-3" id="shahid" onClick={this.showfilm}>شاهد الان</button>

                                            </div>

                      

                                     
                        </div>

                        <div className="movie_show">
                                            <iframe id="انميفوراب1-episode-iframe" src="https://www.4shared.com/web/embed/file/mxTeqEHgea" frameBorder="0" allowFullScreen></iframe>
                                        </div>


                </div>

            </section>

        </div>

        )
    }
}
