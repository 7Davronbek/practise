import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar py-3'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link to='/'>Logo</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar