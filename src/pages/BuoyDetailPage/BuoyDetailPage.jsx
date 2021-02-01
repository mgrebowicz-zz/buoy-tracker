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
                    {buoy.entries.map((entry, i) => {
                        return (
                            <>
                            
                                <div key={i}>Station ID: {entry.classifiers.station}</div>  
                                <div key={i}>Latitude: {entry.axes.latitude.toFixed(2)}</div>
                                <div key={i}>Longitude: {entry.axes.longitude.toFixed(2)}</div>
                                <div key={i}>Time of Observation: {entry.axes.time}</div>
                                
                                <div key={i}>Barometric Pressure: {entry.data.air_pressure.toFixed(2)} mb</div>
                                <div key={i}>Wind Speed: {Math.floor(entry.data.wind_spd)} kts</div>
                                <div key={i}>Wind Direction: {entry.data.wind_dir} degrees</div>
                                <div key={i}>Gusts: {Math.floor(entry.data.wind_spd)} kts</div>
                                <div key={i}>Sea Surface Temperature: {Math.floor(entry.data.sea_surface_temperature)} degrees C</div>
                                <div key={i}>Wave Height: {entry.data.wave_height} meters</div>
                                <div key={i}>Dominant Wave Period: {entry.data.dominant_wpd} kts</div>
                                <div key={i}>Mean Wave Direction: {entry.data.mean_wave_dir} degrees </div>
                                
                            </>
                        )
                    })}
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

