import React from 'react';
import { data } from "../API/data";
import {useParams} from 'react-router-dom';
export default function Cardetails(){
    const {id}=useParams()
    return(
        <>
        <div className="container">
            <div className="row mt-5">
            <div className="col-md-8">
                <img src="" alt="car"/>
            </div>
            <div className="col-md-4">
                
            </div>
            </div>
        </div>
        <h1>Welcome {id} </h1>
        </>
    )
}