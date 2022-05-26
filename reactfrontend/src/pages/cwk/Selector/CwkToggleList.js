// this was ripped from https://mui.com/material-ui/react-list/
// then modified to fit my needs

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';


import Divider from '@mui/material/Divider';
import WrappedListItemButton from "./WrappedListItemButton"

export default function CwkToggleList({instances, toggleInstanceFunc, toggleNewFunc, toggleDiagramsFunc}) {

	const [selectedDisplay, setSelectedDisplay] = React.useState("new");

	const handleListItemClick = (event, displayName, players, count) => {
		setSelectedDisplay(displayName);
		switch(displayName) {
			case "new":
				toggleNewFunc()
				break
			case "diagrams":
				toggleDiagramsFunc()
				break
			default:
				toggleInstanceFunc(displayName, players, count)
		}
	};
	
	return (

		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#151515' }}>
			
			<WrappedListItemButton
				toggledOn={selectedDisplay === "new"}
				key={"new"}
				name={"new"}
				handleFunc={handleListItemClick}
				players={""}
				count={0}
			>
			</WrappedListItemButton>

			<WrappedListItemButton
				toggledOn={selectedDisplay === "diagrams"}
				key={"diagrams"}
				name={"diagrams"}
				handleFunc={handleListItemClick}
				players={""}
				count={0}
			>
			</WrappedListItemButton>

			<Divider/>		
			<Divider/>
			<List component="nav" aria-label="main mailbox folders">
				
				{instances.map(instance => {
					return (
						<WrappedListItemButton 
							key={instance.GroupName} 
							toggledOn={selectedDisplay === instance.GroupName} 
							name={instance.GroupName}
							players={instance.Players}
							count={instance.count}
							handleFunc={handleListItemClick}>
						</WrappedListItemButton>
					)
				})}

			</List>
		  
		</Box>
	  );
}