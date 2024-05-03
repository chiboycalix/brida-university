import './styles/analytics.scss';
import OnlineAnalytics from '../../../assets/online-analytic.png';
import PolygonIcon from '../../../assets/polygon-icon.png';

type WhatWeOfferProps = {
  offer: string;
}
const WhatWeOffer = ({ offer }: WhatWeOfferProps) => {
  return <div className='what__we__offer__wrapper'>
    <img src={PolygonIcon} alt={PolygonIcon} />
    <p>{offer}</p>
  </div>
}
const Analytics = () => {
  return (
    <div className="analytics__wrapper">
      <div className='analytics__left'>
        <img src={OnlineAnalytics} alt={OnlineAnalytics} />
      </div>
      <div className='analytics__right'>
        <h1>Online data analytics for biz professionals</h1>
        <p>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
        <div className='what__we__offer'>
          <div className="row">
            <WhatWeOffer offer="World Class" />
            <WhatWeOffer offer="Flexible" />
          </div>
          <div className="row">
          <WhatWeOffer offer="Easy Learning" />
            <WhatWeOffer offer="Affordable" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics