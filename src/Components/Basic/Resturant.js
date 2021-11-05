import React, { useState } from 'react'
import Menu from './apiMenu'
import MenuCard from './MenuCard'

import "./styles.css"

const Resturant = () => {

    const [menuDate, setMenuData] = useState(Menu)
    console.log(menuDate)


    return (
        <div className="card-container">
            <section className="main-card--container">
                {
                    menuDate.map(item => <MenuCard item={item} key={item.id} />)
                }
            </section>
        </div>
    )
}

export default Resturant