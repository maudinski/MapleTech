// this was ripped from https://mui.com/material-ui/react-list/
// then modified to fit my needs

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function ToggledList() {

	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	
	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<Divider/>
			<List component="nav" aria-label="main mailbox folders">
				<ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Inbox" />
				</ListItemButton>
				<ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Drafts" />
				</ListItemButton>
			</List>
		  
		</Box>
	  );
}