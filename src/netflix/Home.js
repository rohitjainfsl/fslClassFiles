import React from "react";
import Row from "./Row";
import requests from './requests'

function Home() {
  return (
    <>
      <Row 
        endpoint = {requests.fetchNetflixOriginals} 
        heading='Netflix Originals' />
      <Row 
        endpoint = {requests.fetchTrending} 
        heading='Trending Now' />
      <Row 
        endpoint = {requests.fetchTopRated} 
        heading='Top Rated' />
      <Row 
        endpoint = {requests.fetchActionMovies} 
        heading='Action Movies' />
      <Row 
        endpoint = {requests.fetchComedyMovies} 
        heading='Comedy Movies' />
      <Row 
        endpoint = {requests.fetchHorrorMovies} 
        heading='Horror Movies' />
      <Row 
        endpoint = {requests.fetchRomanceMovies} 
        heading='Romantic Movies' />
      <Row 
        endpoint = {requests.fetchDocumentaries} 
        heading='Documentaries' />
      
    </>
  );
}

export default Home;
