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

    const handleCheckbox = (e) => {
        let isChecked = e.target.checked;

        console.log('inside checkbox', isChecked)
        if (isChecked) {
            const filteredStock = products.filter(el => el.inStock)
            //console.log(filteredStock)
            setProducts(filteredStock)
        } else {
            setProducts(jsonData)
        }
    }
    return (
        <div>
            <h1>IronStore</h1>
            <div>
                <SearchBar onSearch={handleSearch} onChecked={handleCheckbox} />
            </div>
            <div>
                <ProductTable products={products} />
            </div>
        </div>
    )
}
