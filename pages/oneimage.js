import React from "react";
import {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
export function OneImage(props) {

  const [liked, setLiked] = useState(false);
  let color = "fas fa-heart text-xl i-color";
  function handleLike() {
    color = "fas fa-heart text-xl i-color-liked"
    console.log("liked")
    setLiked(!liked)
  }
  return (
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src={props.url}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <Grid container spacing={3}>
                      <Grid item xs={10}>
                      <div>
                    <h4 className="text-xl font-bold text-white">
                      {props.title}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {props.date}
                    </p>
                    </div>
                      </Grid>
                      <Grid item xs={2} className="flex flex-wrap items-center">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 ml-auto mb-6 shadow-lg rounded-full bg-white">
                      <i className={liked ? 'fas fa-heart text-xl i-color-liked' : 'fas fa-heart text-xl i-color'} onClick={handleLike}></i>
                    </div>
                      </Grid>
                    </Grid>
                    
                    
                  </blockquote>
                </div>
  )
}

