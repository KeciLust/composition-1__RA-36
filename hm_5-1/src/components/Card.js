import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
    const {item} = props;
  return (
    <div className="card">
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.text}</p>
        <a href={item.link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

Card.propTypes = {
    props: PropTypes.object.isRequired,
}

export default Card
