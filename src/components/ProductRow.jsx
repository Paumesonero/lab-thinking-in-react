import React from 'react'

export default function ProductRow(props) {
    const { products: { price, name, inStock } } = props
    //console.log(name)
    const redColor = {
        color: 'red'
    }
    const isOutOfStock = inStock ? <td>{name}</td> : <td style={redColor}>{name}</td>

    return (
        <tr>
            <td>{isOutOfStock}</td>
            <td>{price}</td>
        </tr>
    )
}
