import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    const { products } = props
    //console.log(products)

    return (

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(el => {
                    return <ProductRow key={el.id} products={el} />
                })}
            </tbody>
        </table>

    )
}
