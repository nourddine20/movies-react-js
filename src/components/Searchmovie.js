import react,{useEffect,useRef,useState} from "react"
import {getmoviebysearch} from "./APIs/main"
import "../styles/Searchmovie.css"
import { Link } from 'react-router-dom'


export default function Searchmovie(props){
    // const {count,increment,desincrement} = useCount();
        const [searchmovies, setsearchmovies] = useState([])
        const [titlemovie,settitlemovie] = useState();
        const {textref,settextref}=useRef();
       const  [img_url,setimg_url] =useState("https://image.tmdb.org/t/p/w500/");

        console.log("title",titlemovie)
   function findmoviesbysearch(){
         getmoviebysearch(props.match.params.movietitle).then(e=>{

            console.log(e.data.results);
            let updatearry=[];
           
            e.data.results && e.data.results.map(ele=>{
                   
            updatearry = [
                // copy the current users state
                ...updatearry,
                // now you can add a new object to add to the array
                 ele
              ];
                

            })

           
            
            setsearchmovies(updatearry)

            updatearry=[];
            
         });

         console.log("state",searchmovies)

            
       
    }

   

    useEffect(()=>{
        
           if(props.match.params.title == ' ')
           return

               
           findmoviesbysearch();
           
        console.log("hellwo oll")
        console.log("hi hhh ",props.match.params.title)
    },[window.location.pathname])
    return (
    <div >
       <section className="box_search_movie p-2">
          
           <header>
              <h3 dir="rtl" ref={textref} className="text_head p-4">البحث عن : {props.match.params.movietitle}</h3>
              <div className="basic_filter_search">
                <span className="span1 mx-2">البحث </span>
                <span className="span2 mx-2"> تصفح الكل</span>
              </div>
             
          </header>
          <div className="list_search_movie movies_listarticle row m-3">
             
              {searchmovies.length>0 ? searchmovies.map(ele=>{
                   return(<Link key={ele.id}  to={`/movie-details/${ele.id}`} className="articlemovie p-2 col-lg-2 col-sm-3 col-7 p-2">
                        <div className="box_preview">
                        <div className="preview">
                            <img src={img_url+ele.poster_path}/>

                           <span className="noti1">{ele.release_date}</span>
                            <span className="noti2"> % {ele.vote_average}</span>
                        </div>
                        </div>
                       
                        <div className="title mt-4">
                            {ele.title}
                        </div>
                    </Link>)

              }) : "no data here"}

              {/* <div className="box_filter ">
              <i class="fas fa-sort"></i>
            </div>   */}
              
           </div>
          
       </section>
    </div>
    );
}
