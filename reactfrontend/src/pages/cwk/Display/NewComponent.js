export default function NewComponent() {

	function submitForm() {
		var form = document.getElementById("CWK_SUBMIT_FORM")

		var XHR = new XMLHttpRequest();


		// Bind the FormData object and the form element
		const FD = new FormData( form );

		// Define what happens on successful data submission
		XHR.addEventListener( "load", function(event) {
			window.location.href = "http://localhost:3000/cwk"
		} );

		// Define what happens in case of error
		// TODO shouldnt alert like this
		XHR.addEventListener( "error", function( event ) {
			alert( 'Oops! Something went wrong.' );
		} );

		// Set up our request
		
		XHR.open( "POST", "http://localhost:8080/cwk" );

		// The data sent is what the user provided in the form
		XHR.send( new URLSearchParams(FD) );

		//cwk_new_toggle_off()
	}

	return(
		<div>
			<form id="CWK_SUBMIT_FORM">
				<label>Group name</label>
				<input type="text" id="groupname" name="groupname"/><br/>
				<input type="text" id="ign0" name="ign0"/><br/>
				<input type="text" id="ign1" name="ign1"/><br/>
				<input type="text" id="ign2" name="ign2"/><br/>
				<input type="text" id="ign3" name="ign3"/><br/>
				<input type="text" id="ign4" name="ign4"/><br/>
				<input type="button" onClick={submitForm} value="Submit"/>
			</form>
		</div>
	)
}