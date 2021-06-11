import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';


function Header() {
    const [open, setOpen] = React.useState(false)

    const listItems = Object.entries(PATH).map((route) => <NavLink to={route[1]}>
            <ListItem button>
                <ListItemText primary={route[0]}/>
            </ListItem>
        </NavLink>
    );

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Nav</Button>
            <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
                <div style={{width: 250}} role="presentation" onClick={() => setOpen(false)}>
                    <List>
                        {listItems}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

export default Header
