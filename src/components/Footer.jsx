import React from 'react';

var date = new Date();
console.log(date);

function Footer(){
	
	var date = new Date();
	var year = date.getFullYear();
	
	return (
		<footer className='footer'>
			<p>Copyright &copy; {year}</p>
		</footer>
	);
	
}

export default Footer;