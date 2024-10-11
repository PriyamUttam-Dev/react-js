import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-emerald-500 py-4 px-3'>
        <div><h1 className='px-5 text-2xl'>Priyam</h1></div>
        <div className='flex text-xl gap-4 px-4'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/content'>Content</Link>
        </div>
    </div>
  )
}

export default Header