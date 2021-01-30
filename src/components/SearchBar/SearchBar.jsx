import { useState, useEffect, useHistory } from 'react';
import * as buoysAPI from '../../utilities/buoys-api'
import { fade, makeStyles } from '@material-ui/core/styles';
import BuoyDetailPage from '../../pages/BuoyDetailPage/BuoyDetailPage';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }, 
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    // sectionDesktop: {
    //     display: 'none',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'flex',
    //     },
    // },
}));

export default function SearchBar() {
    const classes = useStyles();
    const [newBuoy, setNewBuoy] = useState([]);
    
    async function handleSubmit() {
        try {
            const buoy = await buoysAPI.getBuoy(newBuoy);
            setNewBuoy(buoy);
            // console.log(newBuoy)
        } catch (err) {
            console.log(err);
        }
    };

    

    // refactor for KeyPress submit
    // const handleKeypress = e => {
    //     //it triggers by pressing the enter key
    //     if (e.keyCode === 13) {
    //         btn.click();
    //     }
    // };
    
    return (
        <div className={classes.grow}>
            <Toolbar>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        // type='submit'
                        value={newBuoy}
                        onChange={(evt) => setNewBuoy(evt.target.value)}
                        // onKeyPress={handleKeypress}
                        // placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <button value={newBuoy} onClick={() => handleSubmit(newBuoy)}>Search</button>
                </div>
            </Toolbar>
        </div>
    );
}