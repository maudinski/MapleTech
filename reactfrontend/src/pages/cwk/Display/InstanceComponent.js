export default function InstanceComponent({count, players, name}) {

	return (
		<div>
			<h1>{name}</h1>
			<br/>
			{
				players.map(player => {
					return (
						<div key={player["Placement"]}>
						<label>{player["Name"]} - {player["Placement"]}</label>
						</div>
					)
				})
			}
		</div>
	)

}