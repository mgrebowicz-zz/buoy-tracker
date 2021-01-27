import * as usersService from '../../utilities/users-service';
import { Link, NavLink } from 'react-router-dom';
import BuoyDetailPage from '../BuoyDetailPage/BuoyDetailPage'

export default function BuoyIndexPage() {

  return (
    <>
      <h1>This is the buoy index</h1>
      <p>You can search for buoys by station number or chose 
      from a list of bouys for the most current sea and weather 
      conditions.</p>
      {/* <NavLink></NavLink> */}
      
    </>
  );
}