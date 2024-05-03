
import './styles/feature.scss';
import redFeature from '../../../assets/red-feature.png';
import blueFeature from '../../../assets/blue-feature.png';
import orangeFeature from '../../../assets/orange-feature.png';

const data = [
  {
    id: 1,
    text: 'Amet minim mollit non deserunt ullamco.',
    icons: blueFeature
  },
  {
    id: 2,
    text: 'Amet minim mollit non deserunt ullamco.',
    icons: redFeature
  },
  {
    id: 3,
    text: 'Amet minim mollit non deserunt ullamco.',
    icons: orangeFeature
  }
]
type FeatureProps = {
  id: number;
  text: string;
  icons: string;
}

const Feature = () => {
  return (
    <div className='feature__wrapper'>
      {
        data.map((feature: FeatureProps) => {
          return <div key={feature.id} className='feature'>
            <img src={feature.icons} alt={feature.icons} />
            <div>
              <p>{feature.text}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}
export default Feature
