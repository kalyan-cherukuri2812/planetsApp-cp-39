import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Planetitem = props => {
  const {planetList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="item-bg">
      <h1 className="h">PLANETS</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {planetList.map(each => (
            <div>
              <img className="img" src={each.imageUrl} alt="img" />
              <h1 className="name">{each.name}</h1>
              <p className="p-des">{each.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Planetitem
