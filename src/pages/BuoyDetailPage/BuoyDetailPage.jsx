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
        opacity: 0.9
    },
});

export default function BuoyDetailPage({ newBuoy, setNewBuoy }) {
    const classes = useStyles();
    
    //need to reformat, add buoy services module for business logic

    return (
        <>
            <h1>Buoy Detail Page</h1>
            <div className='card-container'>
                <Card className={classes.root}>
                    <h2>Station ID: {newBuoy['node:station']}</h2>
                    {newBuoy['latitude'] ? 
                        <div>Latitude: {newBuoy['latitude'].toFixed(2)}</div>
                        :
                        <div></div>
                        }
                    {newBuoy['longitude'] ? 
                        <div>Longitude: {newBuoy['longitude'].toFixed(2)}</div>
                        :
                        <div></div>
                        }
                    
                    {newBuoy['timeMax'] ?
                        <div>Time of Observation: {newBuoy['timeMax']}</div>
                        :
                        <div></div>
                    }
                    
                    {newBuoy['air_pressure'] ? 
                        <div>Barometric Pressure: {newBuoy['air_pressure'].toFixed(2)} mb</div>
                        :
                        <div></div>
                    }
                    
                    {newBuoy['wind_dir'] ?
                        <div>Wind Direction: {newBuoy['wind_dir']}</div>
                        :
                        <div></div>
                    }

                    {newBuoy['gust'] ?
                        <div>Gusts: {newBuoy['gust'].toFixed(2)}</div>
                        :
                        <div></div>
                    }
                    {newBuoy['sea_surface_temperature'] ? 
                        <div>Sea Surface Temp: {newBuoy['sea_surface_temperature'].toFixed(2)} C</div>
                        :
                        <div></div>
                        }
                    {newBuoy['wave_height'] ? 
                        <div>Wave Height: {newBuoy['wave_height'].toFixed(2)} meters</div>
                        :
                        <div></div>
                        }
                    {newBuoy['dominant_wpd'] ? 
                        <div>Dominant Wave Period: {newBuoy['dominant_wpd'].toFixed(2)} seconds</div>
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
                                onClick={() => setNewBuoy(null)}
                                >Cancel
                            </Button>
                        </NavLink>
                    </div>
                </Card>
            </div>          
        </>
    )

};

