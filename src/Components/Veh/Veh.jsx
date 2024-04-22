import data_product from '../Assets/data'
import Item from '../Item/Item'
import './Veh.css'
import { Link } from 'react-router-dom'

const Veh = () => {

  return (
    <div className='veh'>
      <h1>Our Products</h1>
      <hr />
      <div className="veh-item">
        {data_product.map((item,i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} detail={item.detail} buy={item.buy}></Item>
        })}
        
      </div>
      <div className="compare-btn">
        <button><Link style={{textDecoration: 'none', color: '#171717' }} to="/compareAll">Compare All</Link></button>
      </div>
    </div>
  )
}

export default Veh