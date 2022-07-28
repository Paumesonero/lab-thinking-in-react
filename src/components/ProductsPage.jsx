import { useState } from 'react'
import jsonData from './../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData)
    return (
        <div>
            <h1>IronStore</h1>
            <div>
                <SearchBar />
            </div>
            <div>
                {products.map(el => {
                    return <ProductTable key={el.id} product={el} />
                })}

            </div>
        </div>
    )
}
