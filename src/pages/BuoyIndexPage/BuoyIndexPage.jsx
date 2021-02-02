import * as usersService from '../../utilities/users-service';
import SearchBar from '../../components/SearchBar/SearchBar'
import BuoyCard from '../../components/BuoyCard/BuoyCard'
import './BuoyIndexPage.css'

export default function BuoyIndexPage() {
  

  return (
    <>
      <h1>This is the buoy index</h1>
      <p>On BuoyTracker you can search for any active National Data Buoy Center buoy, 
      but if you're new to in-situ sea surface observation, try one of these station ID's to get started :)</p> 
      <p>46026 , keca2, 46059</p>    
    </>
  );
}