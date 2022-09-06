import './index.css'
import Planetitem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="bg-container">
      <Planetitem planetList={planetsList} />
    </div>
  )
}

export default PlanetsSlider
