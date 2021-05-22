import React, { useEffect, useState, useContext } from 'react'

const ImageContainer=(props)=>{

   
   let path='http://localhost:8090/static/'
   let file=props.imagename

   let getimage=path+file
   

    return(

        <img className="card-img-top" src={getimage} alt="Card image cap" height="40%"></img>
    )
}


export default ImageContainer;