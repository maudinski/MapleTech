import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function WrappedListItemButton({name, toggledOn, handleFunc, players, count}) {

	return (
		<ListItemButton selected={toggledOn} onClick={(event) => handleFunc(event, name, players, count)}>
			<ListItemText style={{ color: '#FFFFFF', opacity: "0.83" }} primary={name} />
		</ListItemButton>
	)

}