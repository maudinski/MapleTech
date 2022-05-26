import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import CwkComponent from "./pages/cwk/CwkComponent"
import LeechComponent from "./pages/leech/LeechComponent"
import WashingComponent from "./pages/washing/WashingComponent"
import FourOhFourComponent from "./pages/404/FourOhFourComponent"
import HomeComponent from "./pages/home/HomeComponent"
import RollingComponent from "./pages/rolling/RollingComponent"
import "./App.css"
//import Button from "@mui/material/Button"

import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"

import maplelogo from "./maplelogo.png"

export default function App() {

	return (
		<>
		<BrowserRouter forceRefresh={true}>
			
			{/* gotta render a second toolbar if using position absolute"*/}
			<AppBar className="appbar" position="absolute">{/*style={{ background: '#2E3B55' }}>*/} 
				<Toolbar >
					<IconButton component={Link} to="/" edge="start" color="inherit" aria-label="logo" >
						<img className="logo" alt="edit" src={maplelogo} />
					</IconButton>
					{/* the sx={flexgrow} thing is to make it push all the buttons to the right */}
					<Typography variant="h6" component="div" sx={{ flexGrow : 1}}> 
						MapleTech
					</Typography>
					<Stack direction="row" spacing={2}>

							<Button className="navbarButton" component={Link} to="/cwk" color="inherit">Cwk</Button>
							<Button className="navbarButton" component={Link} to="/washing" color="inherit">Washing</Button>
							<Button className="navbarButton" component={Link} to="/leech" color="inherit">Leech</Button>
							<Button className="navbarButton" component={Link} to="roll" color="inherit">Roll</Button>

					</Stack>
				</Toolbar>
			</AppBar>
			<Toolbar/> {/* render a 'ghost' toolbar, cause: appbar position as absolute doesn't effect other components, so they
						will render underneath it (hiding them). render a second tool bar just to push things down*/}
			<Routes>
				<Route exact path="/" element={<HomeComponent/>} />
				<Route exact path="/cwk" element={<CwkComponent/>} />
				<Route exact path="/leech" element={<LeechComponent/>} />
				<Route exact path="/washing" element={<WashingComponent/>} />
				<Route exact path="/roll" element={<RollingComponent/>} />
				<Route exact path="*" element={<FourOhFourComponent/>} />
			</Routes>

		</BrowserRouter>
		</>

	)
}