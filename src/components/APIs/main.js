import axios from "axios"
const value_key ="c91502dadf52d1844c7536a7e9d565f5";
const allmovies = "https://api.themoviedb.org/3/discover/movie?api_key="+value_key+"&language=ar-MA&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate";
const todaytrendmovies = "https://api.themoviedb.org/3/trending/movie/day?api_key="+value_key+"&language=ar-MA";
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+value_key+"&language=ar-MA&page=1";


const valuekey2 = "apikey=4b04b6c9&"

const searchmovie = "https://www.omdbapi.com/?"+valuekey2+"s=";

export async function getmoviebysearch(moviename){
  const themoviedbsearchmovies = "https://api.themoviedb.org/3/search/movie?api_key="+value_key+"&language=en-US&query="+moviename+"&page=1&include_adult=false";
   const requestomdb = searchmovie +  moviename;
  const requestthetmdb = themoviedbsearchmovies;
  let data = await axios.get(requestthetmdb);
  return data;
  window.location.replace("/searchmovie/"+moviename);
}
export  async function gettrendmovies(){
    let data;
  data = await axios.get(todaytrendmovies);
  return data;
}

export async function getdiscovermovies(){
  let data;
  data = await axios.get(allmovies);
  return data;
}


export async function getmoviedetails(id_movie){
  let data;
  data = await axios.get("https://api.themoviedb.org/3/movie/"+id_movie+"?api_key=c91502dadf52d1844c7536a7e9d565f5&&language=ar-MA");
  return data;
}