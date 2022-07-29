import { useState } from 'react'
import jsonData from './../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData)

    const handleSearch = (searchValue) => {
        if (searchValue === '') {
            setProducts(jsonData)
        } else {
            const filtered = products.filter(el => el.name.toLowerCase().includes((searchValue).toLowerCase()))
            setProducts(filtered)
        }
    }
    return (
        <div>
            <h1>IronStore</h1>
            <div>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div>
                <ProductTable products={products} />
            </div>
        </div>
    )
}
