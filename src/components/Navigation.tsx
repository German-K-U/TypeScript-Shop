import React from 'react'
import { Link } from 'react-router-dom'


export function Navigation(){
    return(
        <nav 
        className="h-[50px] flex justify-between px-5 bg-grey-500  items-center  text-yellow"
        >
            <span className="font-bold">My Project Shop</span>

            <nav>
                <Link to="/" className="mr-2 ">Products</Link>
                <Link to="/about">About</Link>
            </nav>
        </nav>
    )
} 