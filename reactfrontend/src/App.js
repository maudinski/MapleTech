import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import CwkComponent from "./pages/cwk/CwkComponent"
import LeechComponent from "./pages/leech/LeechComponent"
import WashingComponent from "./pages/washing/WashingComponent"
import FourOhFourComponent from "./pages/404/FourOhFourComponent"
import HomeComponent from "./pages/home/HomeComponent"
import RollingComponent from "./pages/rolling/RollingComponent"


export default function App() {

	return (
		<>
		<h1>MapleTech</h1>
		<BrowserRouter forceRefresh={true}>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/cwk">Cwk</Link>
					</li>
					<li>
						<Link to="/leech">Leech Calculator</Link>
					</li>
					<li>
						<Link to="/washing">Washing Calculator</Link>
					</li>
					<li>
						<Link to="/roll">Mass Roll</Link>
					</li>
				</ul>

				<hr />
				<Routes>
					<Route exact path="/" element={<HomeComponent/>}/>
					<Route exact path="/cwk" element={<CwkComponent/>} />
					<Route exact path="/leech" element={<LeechComponent/>} />
					<Route exact path="/washing" element={<WashingComponent/>} />
					<Route exact path="/roll" element={<RollingComponent/>} />
					<Route exact path="*" element={<FourOhFourComponent/>} />
				</Routes>
			</div>
		</BrowserRouter>
		</>

	)
}