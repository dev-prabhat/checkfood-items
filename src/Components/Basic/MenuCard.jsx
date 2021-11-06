/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const MenuCard = ({item}) =>{
    
    const {id , name, category , image , description} = item

    return(
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                        {description}
                    </span>
                    <div className="card-read">Read</div>
                </div>
                <img src={image} alt="image" className="card-media"/>
                <span className="card-tag subtle">Order Now</span>
            </div>
    )
}

export default MenuCard