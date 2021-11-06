import React, { useState } from 'react'
import Menu from './apiMenu'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

import "./styles.css"

const uniqueList = [...new Set(Menu.map((item) => (
    item.category
))), "All"]

// console.log(uniqueList) in uniqueList we get all the unique category i.e. any category is not repeated



const Resturant = () => {

    const [menuDate, setMenuData] = useState(Menu)
    const [categoryList] = useState(uniqueList)


    const filterItem = (category) => {
        const updatedList = Menu.filter((item) => (category === 'All' ? Menu : item.category === category
        ))

        setMenuData(updatedList)
    }


    return (
        <div>
            <Navbar filterItem={filterItem} categoryList={categoryList} />
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