import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import CwkComponent from "./pages/cwk/CwkComponent"
import LeechComponent from "./pages/leech/LeechComponent"
import WashingComponent from "./pages/washing/WashingComponent"
import FourOhFourComponent from "./pages/404/FourOhFourComponent"
import HomeComponent from "./pages/home/HomeComponent"
import RollingComponent from "./pages/rolling/RollingComponent"

//import Button from "@mui/material/Button"

import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"

export default function App() {

	return (
		<>

		<AppBar position="static" style={{ padding: 0, background: '#2E3B55' }}>
			<Toolbar >
				<BrowserRouter forceRefresh={true}>

					<IconButton component={Link} to="/" size="large" edge="start" color="inherit" aria-label="logo" >
						<CatchingPokemonIcon/>
					</IconButton>
					{/* the sx={flexgrow} thing is to make it push all the buttons to the right */}
					<Typography variant="h6" component="div" sx={{ flexGrow : 1}}> 
						MapleTech
					</Typography>
					<Stack direction="row" spacing={2}>

							<Button component={Link} to="/cwk" color="inherit">Cwk</Button>
							<Button component={Link} to="/washing" color="inherit">Washing</Button>
							<Button component={Link} to="/leech" color="inherit">Leech</Button>
							<Button component={Link} to="roll" color="inherit">Roll</Button>




						// prolly wont have these as links or use the BrowserRouter, but instead just make them change the state of some useState 
						// var, then have that linked to some useEffect that changes the state of the mainbody component

							


					</Stack>
					<Routes>
						<Route exact path="/" element={<HomeComponent/>} />
						<Route exact path="/cwk" element={<CwkComponent/>} />
						<Route exact path="/leech" element={<LeechComponent/>} />
						<Route exact path="/washing" element={<WashingComponent/>} />
						<Route exact path="/roll" element={<RollingComponent/>} />
						<Route exact path="*" element={<FourOhFourComponent/>} />
					</Routes>
				</BrowserRouter>
			</Toolbar>
		</AppBar>
		<br/>
		<br/>
		<br/>
		<br/>
		</>

	)
}