import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 	
	 	props.wind && <p className="weather__key"> Wind: 
	 		<span className="weather__value"> { props.wind } Km/hr</span>
	 	</p> 
	 }
	 { 	
	 	props.pressure && <p className="weather__key"> Pressure: 
	 		<span className="weather__value"> { props.pressure } Pa</span>
	 	</p> 
	 }
	  { 	
	 	props.max && <p className="weather__key"> Max Temperature: 
	 		<span className="weather__value"> { props.max } </span>
	 	</p> 
	 }
	  { 	
	 	props.min && <p className="weather__key"> Min Temperature: 
	 		<span className="weather__value"> { props.min } </span>
	 	</p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	 
	</div>
);

export default Weather;