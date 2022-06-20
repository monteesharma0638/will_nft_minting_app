// import { Stepper } from "@mui/material";
// import {  Stepper } from "@mui/system";
import React from "react";
import '../../css/style.css';
import PersonIcon from '@mui/icons-material/Person';
import { useState, useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';


export default function Section1() {
  function subValue(){
    if((document.getElementById("input-value").value)>1){
      document.getElementById("input-value").value--;    
    }
  }
  function addValue(){
    document.getElementById("input-value").value++;
  }
  function getTime(){
    let currentDate = new Date();
    let endDate = new Date("06/30/2022");
    let dateDiffHour = parseInt(Math.abs(endDate - currentDate)/(1000*3600));
    let dateDiffMin = parseInt(Math.abs(endDate - currentDate)/(1000*60)) - (parseInt(Math.abs(endDate - currentDate)/(1000*3600))*60);
    let dateDiffSec = parseInt(Math.abs(endDate - currentDate)/(1000)) - (parseInt(Math.abs(endDate - currentDate)/(1000*60))*60);
    let time = (dateDiffHour + " Hr : " + dateDiffMin + " Min : " + dateDiffSec + " Sec ");
    return time;
  }
  let [time, setTime] = useState();

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(getTime())
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])
  return (
    <div>   
      {/* <Container>
        <Box bgcolor="blue">
          <Grid container>
          <Grid item xs={6}>
          <Box display="flex" justifyContent="center">
                Hello 1
              </Box>
              </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center">
              Hello 1
              </Box>
              </Grid>
          </Grid>
          </Box>
      </Container> */}
      <div className="stepper">
        <div className="steps line">
          <div className="icon">
            <PersonIcon />
          </div>
          <p className="step-content">
            step: 1
          </p>
        </div>
        <div className="steps line">
          <div className="icon">
            <PersonIcon />
          </div>
          <p className="step-content">
            step: 2
          </p>
        </div>
        <div className="steps">
          <div className="icon">
            <PersonIcon />
          </div>
          <p className="step-content">
            step: 3
          </p>
        </div>
      </div>
      <div className="card-holder">
        <div className="card">
            <img src="/images/Slide_1.jpg" alt="error" />
            <div className="card-content">
              <h2>Wallet Not Connected</h2>
              <p id="timer">{time}</p>
              <ul>
                <li>You Owned: 23</li>
                <li>Total Supply: 23</li>
                <li>Max Supply: 10000</li>
                <li>Remaining Supply: 9977</li>
              </ul>
              <div className="input-component"> 
                <button type="button" onClick={subValue}>-</button>
                <input id="input-value" type="number" value={1} />
                <button type="button" onClick={addValue}>+</button>
              </div>
              <input type="submit" value="Mint" />
            </div>
        </div>
      </div>
      <div id="footer">
        <h1>Follow Us:</h1>
        <div>
          <FacebookIcon className="fb-icon" />
          <TwitterIcon className="tw-icon" />
          <TelegramIcon className="tl-icon" />
        </div>
      </div>
    </div>
  );
}

