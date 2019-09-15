import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Enter City Name..."/>
		<button>Search</button>
	</form>
);

export default Form;