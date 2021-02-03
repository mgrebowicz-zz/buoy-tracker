import * as usersService from '../../utilities/users-service';
import SearchBar from '../../components/SearchBar/SearchBar'
import BuoyCard from '../../components/BuoyCard/BuoyCard'
import './BuoyIndexPage.css'

export default function BuoyIndexPage() {
  

  return (
    <>
      <h1>Buoy Index</h1>
      <h3>On BuoyTracker you can search for any active National Data Buoy Center buoy, 
      but if you're new to in-situ sea surface observation, try one of these station ID's to get started :)</h3> 
      <h3>46026 , keca2, 46059, 42020, 41044, 46703, cspa2, 51202</h3>    
    </>
  );
}