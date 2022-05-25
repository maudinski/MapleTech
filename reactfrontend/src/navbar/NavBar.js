// appbar is the actual navbar
// toolbar is used within the appbar (and only with the appbar i guess) to vertically align the stuff within it
//			basically toolbar just applies css to make the stuff fit within a navbar.
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"

export default function NavBar() {
	return (
		<div>
			<AppBar position="static" style={{ padding: 0, background: '#2E3B55' }}>
				<Toolbar >
					<IconButton size="large" edge="start" color="inherit" aria-label="logo" >
						<CatchingPokemonIcon/>
					</IconButton>
					{/* the sx={flexgrow} thing is to make it push all the buttons to the right */}
					<Typography variant="h6" component="div" sx={{ flexGrow : 1}}> 
						MapleTech
					</Typography>
					<Stack direction="row" spacing={2}>
						<Button color="inherit">Cwk</Button>
						<Button color="inherit">Washing</Button>
						<Button color="inherit">Leech</Button>
						<Button color="inherit">Roll</Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</div>
	)
}