import React, { useState } from 'react'
import Menu from './apiMenu'
import MenuCard from './MenuCard'

import "./styles.css"

const uniqueList = [...new Set(Menu.map((item) => (
    item.category
)))]

console.log(uniqueList)



const Resturant = () => {

    const [menuDate, setMenuData] = useState(Menu)


    const filterItem = (category) => {
        const updatedList = Menu.filter((item) => (category === 'all' ? Menu : item.category === category
        ))

        setMenuData(updatedList)
    }


    return (
        <div>
            <nav className="navbar">
                <div className='btn-group'>
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("snack")}>Snack</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => filterItem("all")}>All</button>
                </div>
            </nav>

            <div className="card-container">
                <section className="main-card--container">
                    {
                        menuDate.map(item => <MenuCard item={item} key={item.id} />)
                    }
                </section>
            </div>
        </div>
    )
}

export default Resturant