import "./Header.css"

export default function Header() {
	// todos is a 'list' of strings, actually some object receieved from the useState function
	// .map i guess maps each item to a different item?
	return (
		<div>
			<img className="techStrip" src={require("./techStrip.jpg")}/>
		</div>
	)
}