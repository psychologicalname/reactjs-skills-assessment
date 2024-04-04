import Image from 'next/image'
import { TiStar } from "react-icons/ti";
import { Product } from '~/utils/types';

const ProductCard = ({ product, index }: { product: Product, index: number }) => {
    return (
        <div className='group mb-6 cursor-pointer'>
            <div className='relative h-[400px] object-contain bg-gray-100 p-4'>
                <div className='w-full h-full relative group-hover:scale-105 transition-all'>
                    <Image src={product.image} fill priority alt='product' className='object-contain' />
                </div>
                {index === 3 || index === 5 ? <div className='absolute top-4 left-0 bg-black text-white py-1 px-3 text-sm'>SALE</div> : (index === 4 ? <div className='absolute top-4 left-0 bg-red-400 text-white py-1 px-3 text-sm'>HOT</div> : null)}
            </div>
            <div className='mt-4'>
                <h2 className='font-semibold text-base text-black mb-4'>{product.title}</h2>
                <div className='flex justify-between w-full'>
                    <p className='text-sm text-gray-500'>{product.category}</p>
                    <div className='flex items-center space-x-2'>
                        {index === 3 || index === 5 ? <p className=' text-gray-500 text-sm line-through'>$ {product.price*2}</p> : null}
                        <p className={`font-semibold text-base ${index === 3 || index === 5 ? 'text-red-500':'text-black'}`}>$ {product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
