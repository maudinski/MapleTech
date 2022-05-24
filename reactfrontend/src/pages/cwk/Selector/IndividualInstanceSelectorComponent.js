import "./IndividualInstanceSelectorComponent.css"

export default function IndividualInstanceSelectorComponent({count, players, name, toggleFunc}) {

	function handleClick() {
		toggleFunc(name, players, count)
	}

	return (
		<div>
			<button className="instanceSelector" onClick={handleClick}>{name}</button>
			<br/>
		</div>
	)
}