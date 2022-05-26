import {Component} from "react"
import CwkComponent from "./pages/cwk/CwkComponent"
import LeechComponent from "./pages/leech/LeechComponent"
import WashingComponent from "./pages/washing/WashingComponent"
import FourOhFourComponent from "./pages/404/FourOhFourComponent"
import HomeComponent from "./pages/home/HomeComponent"
import RollingComponent from "./pages/rolling/RollingComponent"

//import Button from "@mui/material/Button"

import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"

export default class App extends Component {

	CWK = "cwk"
	LEECH = "leech"
	WASHING = "washing"
	HOME = "home"
	ROLL = "roll"
	

	constructor(props) {
		super(props);
		this.state = {
			page: this.HOME
		}
	}

	setPage(p) {
		this.setState({
			page: p
		})
	}

	renderPage() {
		switch(this.state.page) {
			case this.CWK:
				return (<CwkComponent></CwkComponent>)
			case this.LEECH:
				return (<LeechComponent></LeechComponent>)
			case this.ROLL:
				return (<RollingComponent></RollingComponent>)
			case this.HOME:
				return (<HomeComponent></HomeComponent>)
			case this.WASHING:
				return (<WashingComponent></WashingComponent>)
		}
	}

	render() {
		return (
			<>

			<AppBar position="static" style={{ padding: 0, background: '#2E3B55' }}>
				<Toolbar >
					<IconButton onClick={() => this.setPage(this.HOME)} size="large" edge="start" color="inherit" aria-label="logo" >
						<CatchingPokemonIcon/>
					</IconButton>
					{/* the sx={flexgrow} thing is to make it push all the buttons to the right */}
					<Typography variant="h6" component="div" sx={{ flexGrow : 1}}> 
						MapleTech
					</Typography>
					<Stack direction="row" spacing={2}>

							<Button onClick={() => this.setPage(this.CWK)} color="inherit">Cwk</Button>
							<Button onClick={() => this.setPage(this.WASHING)} color="inherit">Washing</Button>
							<Button onClick={() => this.setPage(this.LEECH)} color="inherit">Leech</Button>
							<Button onClick={() => this.setPage(this.ROLL)} color="inherit">Roll</Button>

					</Stack>
				</Toolbar>
			</AppBar>
			{this.renderPage()}
			</>

		)
	}
}