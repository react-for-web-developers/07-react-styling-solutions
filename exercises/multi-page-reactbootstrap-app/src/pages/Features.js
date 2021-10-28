import { useContext } from 'react';
import AppContext from '../context';
import Main from '../components/Main';
import featuresImg from '../assets/features.svg';
import featuresDarkImg from '../assets/features_dark.svg';

function NotFound() {
  const { theme } = useContext(AppContext);

  return (
    <Main image={theme === 'light' ? featuresImg : featuresDarkImg} page={"Features"} />
  );
}

export default NotFound;