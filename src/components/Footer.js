import React from "react";
import '../styles.css';

export default function Footer(){
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth()+1;
    return(
      <footer className='footer'>
        <p className='footer-text'>
            Today´s date: {currentDay}/{currentMonth}/{currentYear}
        </p>

      </footer> 
    );
}