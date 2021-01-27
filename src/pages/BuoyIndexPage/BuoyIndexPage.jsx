import * as usersService from '../../utilities/users-service';
import BuoyCard from '../../components/BuoyCard/BuoyCard'
import './BuoyIndexPage.css'

export default function BuoyIndexPage() {

  return (
    <>
      <h1>This is the buoy index</h1>
      <p>You can search for buoys by station number or chose 
      from a list of bouys for the most current sea and weather 
      conditions.</p>
      <div className='card-container'>
        <div className='card'>
          <BuoyCard />
        </div>
        <div className='card'>
          <BuoyCard />
        </div>
        <div className='card'>
          <BuoyCard />
        </div>
        <div className='card'>
          <BuoyCard />
        </div>
        <div className='card'>
          <BuoyCard />
        </div>
        <div className='card'>
          <BuoyCard />
        </div>
        <div className='card'>
          <BuoyCard />
        </div>
        <div className='card'>
          <BuoyCard />
        </div>
      </div>
    </>
  );
}