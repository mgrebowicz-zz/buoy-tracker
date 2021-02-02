import { useLocation } from 'react-router-dom';
import BuoyCard from '../../components/BuoyCard/BuoyCard'
import flattenObject from '../../utilities/buoys-service'
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


export default function BuoyDetailPage({ setNewBuoy }) {
    const { state : {buoy} } = useLocation();
    console.log(useLocation().state)
    const classes = useStyles();
    
    const resetState = () => {
        setNewBuoy('');
    };
    
    //need to reformat, add buoy services module for business logic
    return (
        <>
            <h1>Buoy Detail Page</h1>
            <div className='card-container'>
                <Card className={classes.root}>
                    <div>Station ID: {buoy['node:station']}</div>
                    <div>Latitude: {buoy['latitude'].toFixed(2)}</div>
                    <div>Longitude: {buoy['longitude'].toFixed(2)}</div>
                    <div>Time of Observation: {buoy['timeMax']}</div>
                    <div>Barometric Pressure: {buoy['air_pressure'].toFixed(2)} mb</div>
                    <div>Wind Speed: {buoy['wind_spd'].toFixed(2)} kts</div>
                    <div>Wind Direction: {buoy['wind_dir']}</div>
                    <div>Gusts: {buoy['gust']} kts</div>
                    <div>Sea Surface Temp: {buoy['sea_surface_temperature'].toFixed(2)} C</div>
                    <div>Wave Height: {buoy['wave_height'].toFixed(2)} meters</div>
                    <div>Dominant Wave Period: {buoy['dominant_wpd'].toFixed(2)} seconds</div>
                    <div className='button-container'>
                        <Button size="small" color="primary" variant="contained">
                            Add to Favorites
                        </Button>
                        <Button 
                            size="small" 
                            color="secondary" 
                            variant="contained"
                            onClick={resetState}
                            >Cancel
                        </Button>
                    </div>
                </Card>
            </div>          
        </>
    )

};

