import { useLocation } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import './BuoyDetailPage.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: "4vmin",
    },
});

export default function BuoyDetailPage({ newBuoy, setNewBuoy }) {
    const { state : {buoy} } = useLocation();
    const classes = useStyles();
    
    const resetState = () => {
        setNewBuoy({ newBuoy: '' });
    };
    
    //need to reformat, add buoy services module for business logic

    return (
        <>
            <h1>Buoy Detail Page</h1>
            <div className='card-container'>
                <Card className={classes.root}>
                    <h2>Station ID: {buoy['node:station']}</h2>
                    {buoy['latitude'] ? 
                        <div>Latitude: {buoy['latitude'].toFixed(2)}</div>
                        :
                        <div></div>
                        }
                    {buoy['longitude'] ? 
                        <div>Longitude: {buoy['longitude'].toFixed(2)}</div>
                        :
                        <div></div>
                        }
                    <div>Time of Observation: {buoy['timeMax']}</div>
                    {buoy['air_pressure'] ? 
                        <div>Barometric Pressure: {buoy['air_pressure'].toFixed(2)} mb</div>
                        :
                        <div></div>
                    }
                    <div>Wind Direction: {buoy['wind_dir']}</div>
                    <div>Gusts: {buoy['gust']} kts</div>
                    {buoy['sea_surface_temperature'] ? 
                        <div>Sea Surface Temp: {buoy['sea_surface_temperature'].toFixed(2)} C</div>
                        :
                        <div></div>
                        }
                    {buoy['wave_height'] ? 
                        <div>Wave Height: {buoy['wave_height'].toFixed(2)} meters</div>
                        :
                        <div></div>
                        }
                    {buoy['dominant_wpd'] ? 
                        <div>Dominant Wave Period: {buoy['dominant_wpd'].toFixed(2)} seconds</div>
                        :
                        <div></div>
                        }
                    <div className='button-container'>
                        <Button size="small" color="primary" variant="contained">
                            Add to Favorites
                        </Button>
                        <NavLink to="/bouys" style={{ color: "white", textDecoration: "none" }}>
                            <Button 
                                size="small" 
                                color="secondary" 
                                variant="contained"
                                onClick={resetState}
                                >Cancel
                            </Button>
                        </NavLink>
                    </div>
                </Card>
            </div>          
        </>
    )

};

