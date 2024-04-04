import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";

import { Product } from "~/utils/types";
import ProductCard from "./ProductCard";


const Products = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then((data => setProducts(data)))

        } catch (error) {
            console.log(error)
        }
    }, [])

    console.log(products)

    return (
        <div className='container'>
            <h1 className='text-[32px] font-semibold text-center'>
                Our Products
            </h1>

            <div className="flex justify-center my-8">
                <button className="bg-black px-2 py-1 flex items-center gap-1 text-white text-sm mt-6 mb-16">
                    <FaFilter />
                    <p>Filter</p>
                </button>
            </div>

            <div className="px-4 md:px-0 md:grid grid-cols-4 gap-8">
                {products.map((item, index) => (
                    <ProductCard key={item.id} product={item} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Products
