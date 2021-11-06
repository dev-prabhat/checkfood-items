import React from 'react'

const Navbar = ({filterItem , categoryList}) =>{
  return(
    <nav className="navbar">
        <div className='btn-group'>
            {
                categoryList.map((item) => (
                    <button className="btn-group__item" onClick={()=> filterItem(item)}>{item}</button>
                ))
            }
        </div>
    </nav>
    
    
  )
}

export default Navbar