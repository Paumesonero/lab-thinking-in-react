import React from 'react'

export default function (props) {
    const { onSearch, onChecked } = props;
    return (
        <div>
            <label htmlFor="">Search</label>
            <input type="text" placeholder='Search' onChange={(e) => onSearch(e.target.value)} />
            <input type="checkbox" id='checkbox' onChange={onChecked} />
            <label htmlFor="checkbox">Only show products in stock</label>
        </div>
    )
}
