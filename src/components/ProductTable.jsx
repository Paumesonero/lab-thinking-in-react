import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    const { product: { category, price, inStock, name, id } } = props
    //console.log(name)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><ProductRow info={{ category, price, inStock, name, id }} /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
