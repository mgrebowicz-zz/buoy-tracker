import { useLocation } from 'react-router-dom';
import BuoyCard from '../../components/BuoyCard/BuoyCard'

export default function BuoyDetailPage({ newBuoy, setNewBuoy}) {
    
    console.log(useLocation().state.buoy);
    const { state : {buoy} } = useLocation();
    
    return (
        <>
            <h1>Buoy Detail Page</h1>
            {buoy.entries.map((entry, i) => {
                return (<div key={i}>Wind Speed: {entry.data.wind_spd} kts</div>)
            })}
        </>
    )

};

