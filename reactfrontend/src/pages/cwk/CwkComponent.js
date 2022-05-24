import {useEffect, useState} from "react"
import SelectorComponent from "./Selector/SelectorComponent"
import DisplayComponent from "./Display/DisplayComponent"
import {INSTANCE, NEW, DIAGRAMS, NOTHING} from "./Display/DisplayComponent"




export default function CwkComponent() {
	

	const [displayState, setDisplayState] = useState(NOTHING)

	
	const [activeInstanceCount, setActiveInstanceCount] = useState(0)
	const [activeInstancePlayers, setActiveInstancePlayers] = useState([])
	const [activeInstanceName, setActiveInstanceName] = useState("") 



	
	const [instances, setInstances] = useState([])
	
	// useeffect takes another function as its first parameters
  	// its second parameter is an array of "dependencies", anytime something in that array changes,
 	// it will call the function that you passed
	useEffect(() => {
		// HERE instead of console, MIGHT NOT HAVE TO DO ANYTHING
		// console.log(instances)
	  }, [instances])

	// useEffect is used to do an action everytime some piece of data changes.
	// IF you pass in an empty array as the data (second argument), it will trigger strictly
	// on page refresh/load.
	useEffect( () => {
		getCwkInstances()
	  }, [])

	function getCwkInstances(e) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.addEventListener('load', () => {
		  setInstances(JSON.parse(xmlHttp.responseText))
		})
		xmlHttp.open( "GET", "http://localhost:8080/cwk", false ); // false for synchronous request
		xmlHttp.send( null );
	}
	

	function postCwkInstance() {
		// TODO gotta error check that new-group creation name is unique
		// xmlHttp.addEventListener('load', () => {
		// 	setInstances(JSON.parse(xmlHttp.responseText))
		// })
		console.log("not posting")
	}

	
	function toggleActiveInstance(name, players, count) {
		setActiveInstanceCount(count)
		setActiveInstancePlayers(players)
		setActiveInstanceName(name)
		setDisplayState(INSTANCE)
	}

	function toggleNew() {
		setDisplayState(NEW)
	}

	function toggleDiagrams() {
		setDisplayState(DIAGRAMS)
	}

	return (
		<>
		<SelectorComponent 
			instances={instances} 
			toggleInstanceFunc={toggleActiveInstance}
			toggleNewFunc={toggleNew}
			toggleDiagramsFunc={toggleDiagrams}>	
		</SelectorComponent>

		<DisplayComponent 
			state={displayState}
			instanceCount={activeInstanceCount}
			instancePlayers={activeInstancePlayers}
			instanceName={activeInstanceName}>	
		</DisplayComponent>
		</>
	)
}