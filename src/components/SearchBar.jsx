import React from 'react'

export default function () {
    return (
        <div>
            <label htmlFor="">Search</label>
            <input type="text" placeholder='Search' />
            <input type="checkbox" id='checkbox' />
            <label htmlFor="checkbox">Only show products in stock</label>
        </div>
    )
}
