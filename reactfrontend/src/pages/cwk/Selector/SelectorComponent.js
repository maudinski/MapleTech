import IndividualInstanceSelectorComponent from "./IndividualInstanceSelectorComponent"

export default function SelectorComponent({instances, toggleInstanceFunc, toggleNewFunc, toggleDiagramsFunc}) {

	return (
		<div>
			<div>
				<button onClick={toggleNewFunc}>New</button>
				<button onClick={toggleDiagramsFunc}>View Diagrams</button>
			</div>
			<br/>
			<div>
				{instances.map(instance => {
					return (
						<IndividualInstanceSelectorComponent 
							key={instance.GroupName} 
							count={instance.length} 
							players={instance.Players} name={instance.GroupName} 
							toggleFunc={toggleInstanceFunc}
						/>
					)
				})}
			</div>
		</div>
	)

}