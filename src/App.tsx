import { CVFrame } from './components/CVFrame';
import { gidgetCVData } from './data/gidget-cv-data';

export default function App() {
  return <CVFrame data={gidgetCVData} />;
}