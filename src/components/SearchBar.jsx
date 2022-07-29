import React from 'react'

export default function (props) {
    const { onSearch, onChecked } = props;
    return (
        <div className='search-container'>
            <label htmlFor="">Search</label>
            <input type="text" placeholder='Search' onChange={(e) => onSearch(e.target.value)} id='search-inp' />
            <div>
                <input type="checkbox" id='checkbox' onChange={onChecked} />
                <label htmlFor="checkbox">Only show products in stock</label>
            </div>
        </div>
    )
}
