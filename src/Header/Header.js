import React from 'react';
import './Header.css';
function Header(props){
    return(
        <div>
            <div class="place" id="place">
            <span id="place">{props.headerInfo.cityLocation}
            </span>
            </div>
            <div class="day" id="day">
            <span id="day">{props.headerInfo.day}
            </span>
            </div>
            <div class="condition" id="condition">
            <span id="condition">{props.headerInfo.weatherCondition}
            </span>
            </div>
        </div>


    );

    
}

export default Header