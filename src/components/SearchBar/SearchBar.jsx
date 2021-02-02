import { useState, useEffect, useHistory } from 'react';
import * as buoysAPI from '../../utilities/buoys-api'
import { fade, makeStyles } from '@material-ui/core/styles';
import BuoyDetailPage from '../../pages/BuoyDetailPage/BuoyDetailPage';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'

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
        marginRight: 'auto',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: 'auto',
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
        padding: theme.spacing(1, 10, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

export default function SearchBar() {
    const classes = useStyles();
    const [newBuoy, setNewBuoy] = useState('');
    
    async function handleSubmit() {
        try {
            const buoy = await buoysAPI.getBuoy(newBuoy);
            setNewBuoy(buoy);
            console.log(buoy);
        } catch (err) {
            console.log(err);
        }
    };

    const resetState = () => {
        setNewBuoy('');
    };
    
    return (
        <>
        {typeof newBuoy === 'object' ?
                <>
                    <div>&nbsp;</div> 
                    <NavLink to={{ pathname: '/details', state: { buoy: newBuoy } }} style={{color: "white", textDecoration: "none"}}>
                        <Button variant="contained">Buoy Details</Button>
                    </NavLink>
                </>
            :
            <div className={classes.grow}>
                <Toolbar className='search-container'>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            value={newBuoy}
                            onChange={(evt) => setNewBuoy(evt.target.value)}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <Button 
                            variant="contained" 
                            value={newBuoy} 
                            onClick={() => handleSubmit(newBuoy)}
                            >Search
                        </Button>
                    </div>
                </Toolbar>
            </div> }
        </>
    );
}