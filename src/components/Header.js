import React from "react";
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='calendar.jpg' alt="Hola"/>
            <h2 className='app-subtitle'>My sports event calendar</h2>
        </div>
    );
}