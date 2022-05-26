import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';

export default function WrappedListItemButton({name, toggledOn, handleFunc, players, count}) {

	return (
		<ListItemButton selected={toggledOn} onClick={(event) => handleFunc(event, name, players, count)}>
			<ListItemIcon style={{ color: '#FFFFFF' }} >
				<InboxIcon />
			</ListItemIcon>
			<ListItemText style={{ color: '#FFFFFF' }} primary={name} />
		</ListItemButton>
	)

}