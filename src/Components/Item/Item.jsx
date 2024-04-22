import React from 'react'
import './Item.css'


const Item = (props) => {
  return (
    <div className='item'>
        <h2>{props.name}</h2>
        <img src={props.image} alt="" />
        <div className="item-detail">
            <p>{props.detail}</p>
        </div>
        {/* <div className="buy-btn">
            <button>{props.buy}</button>
        </div> */}
    </div>
  )
}

export default Item