import InstanceComponent from "./InstanceComponent"
import NothingComponent from "./NothingComponent"
import NewComponent from "./NewComponent"
import DiagramsComponent from "./DiagramsComponent"

export const INSTANCE = Symbol("instance")
export const NEW = Symbol("new")
export const DIAGRAMS = Symbol("diagrams")
export const NOTHING = Symbol("nothing")

export default function DisplayComponent({state, instanceCount, instancePlayers, instanceName}) {

	function displaySwitch() {
		switch(state) {
			case INSTANCE:
				return (
					<InstanceComponent 
						name={instanceName}
						players={instancePlayers}
						count={instanceCount}>
					</InstanceComponent>
				)
			case NEW:
				return (
					<NewComponent></NewComponent>
				)
			case DIAGRAMS:
				return (
					<DiagramsComponent></DiagramsComponent>
				)
			case NOTHING:
				return (
					<NothingComponent></NothingComponent>
				)
				
		}
	}

	return (
		<div>
			{displaySwitch()}
		</div>
	)
}	