<script>
	// Date-Time Display
	function displayClock(){
		var ztime = new Date().toLocaleTimeString();
		var zdate = new Date().toLocaleDateString();			  
		var dayName = new Date().toLocaleString('en-GB', {weekday:'short'})	

		var dateMonthYear = new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).replace(/ /g, '-');
		
		//document.getElementById('dateTimeObj').innerHTML=dayName +' '+ zdate +' '+ztime ;
		document.getElementById('dateTimeObj').innerHTML=dayName +' '+ dateMonthYear +' '+ztime ;
		setTimeout(displayClock, 1000); 
	}
	window.onload = displayClock();
</script>