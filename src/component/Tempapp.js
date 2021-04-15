import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./css/style.css"

const Tempapp=()=>{
   
    
    const [full,setFull]=useState("")
    const [city,setCity]=useState("") 
    const [wet,setWeather]=useState("") 
   const [unit,setUnit]=useState("");
   const [set,set1]=useState("false");
    const [search,setSearch]=useState("Kota");


 

   
  



    useEffect(()=>{
        async function getData(){
           
            console.log(unit);
                const res=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cb96fe2a2e57a80e13066c0ad73b8769`)
                console.log(res);
                setFull(res);
                setCity(res.data.main);
                setWeather(res.data.weather[0]);

            
           
            
            
            
        }
        getData();
        setFull("");
       
    },[search],[unit])
    
   

    const dateBuilder=(d)=>{
        var months=["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sept","Oct","Nov","Dec"];
        let days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

        let day=days[d.getDay()]
        let date=d.getDate();
        let month=months[d.getMonth()]
        let year=d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    
   




    return (
        <>
        <div className="box">
        <div className="heading">
            <h1>Weather App</h1>
        </div>
            <div className="inputData">
                <input type="search" className="inputField" placeholder="Search..." value={search} onChange={(e)=>{setSearch(e.target.value)}} ></input>
            </div>
           <div className="conver">
         
           </div>

            {
                (!full.data )?(<p className="error">No Data Found</p>):(
                    <>
                    <div className="icon">
                    <img src={`./assests/${wet.icon}.png`} alt="icon"/>
                    </div>
                    <div className="info">
                 <h2 className="location"><i className="fas fa-street-view">{search}</i></h2>
                <div className="date">{dateBuilder(new Date())}</div>
                 <h1 className="temp">{city.temp}&deg;C

            </h1>
            <h3 className="tempmin-max">Min:{city.temp_min}&deg;C | Max:{city.temp_max}&deg;C</h3>
            <p className="description">{wet.description}</p>
            
            </div>

        <div className="wave"></div>
        <div className="two"></div>
        <div className="three"></div>
        </>
                )
            }
        
   </div>
        </>
    )
}



export default Tempapp ;