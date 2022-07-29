import React from 'react'

export default function (props) {
    const { onSearch } = props;
    return (
        <div>
            <label htmlFor="">Search</label>
            <input type="text" placeholder='Search' onChange={(e) => onSearch(e.target.value)} />
            <input type="checkbox" id='checkbox' />
            <label htmlFor="checkbox">Only show products in stock</label>
        </div>
    )
}
