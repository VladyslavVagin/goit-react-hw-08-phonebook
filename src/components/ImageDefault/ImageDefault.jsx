import { useLocation } from 'react-router-dom';
import superHero from '../../icons/use/superhero.svg';

const ImageDefault = () => {
const location = useLocation();

  return (
    <>
     {location.pathname !== '/contacts' &&
            location.pathname !== '/login' &&
            location.pathname !== '/signup' && (
              <div>
                <h2 className='defaultTitle'>Let's write your contacts!</h2>
              <img
                src={superHero}
                alt="icon of superhero"
                className="defaultImage"
              />
              </div>
            )}
    </>
  )
}

export default ImageDefault