import {useColorScheme} from 'react-native';
import {darkColours, lightColours} from './colours';

export const useColours = () =>
  useColorScheme() === 'light' ? lightColours : darkColours;

export default useColours;
