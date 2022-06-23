// import { Stepper } from "@mui/material";
// import {  Stepper } from "@mui/system";
import React from "react";
import '../../css/style.css';
import { useState, useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';


export default function Section1() {
  const [inputValue, setInputValue] = React.useState(0);
  let [time, setTime] = useState();

  function getTime(){
    let currentDate = new Date();
    let endDate = new Date("06/30/2022");
    let dateDiffHour = parseInt(Math.abs(endDate - currentDate)/(1000*3600));
    let dateDiffMin = parseInt(Math.abs(endDate - currentDate)/(1000*60)) - (parseInt(Math.abs(endDate - currentDate)/(1000*3600))*60);
    let dateDiffSec = parseInt(Math.abs(endDate - currentDate)/(1000)) - (parseInt(Math.abs(endDate - currentDate)/(1000*60))*60);
    let time = (dateDiffHour + " Hr : " + dateDiffMin + " Min : " + dateDiffSec + " Sec ");
    return time;
  }

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(getTime())
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    function handleIncrement() {
      handleChange(inputValue + 1);
    }
  
    function handleDecrement() {
      handleChange(inputValue - 1);
    }
  
    async function handleChange(value) {
      if (value !== "") {
        const number = Number(value);
        if (number) {
          if (number <= freeMintAllowed) {
            setInputValue(Math.abs(number));
          }
        }
      } else {
        setInputValue(0);
      }
    }

  return (
    <div style={{
      marginTop: 20
    }}>
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
                <button type="button" onClick={handleDecrement}> - </button>
                <input id="input-value" type="number" onChange={(e)=> handleChange(e.target.value)} value={inputValue} />
                <button type="button" onClick={handleIncrement}> + </button>
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

