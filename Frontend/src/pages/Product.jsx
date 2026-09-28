import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('')

  const fetchproductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })

  }

  useEffect(() => {
    fetchproductData();
  }, [products, productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Proudct Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row sm:items-stretch'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll 
                  justify-between sm:justify-between 
                  sm:w-[18.7%] w-full sm:h-[500px]'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full h-[80px] sm:h-[120px] 
                     flex-shrink-0 cursor-pointer object-cover' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[70%] h-[400px] sm:h-[500px]'>
            <img className='w-full h-full ' src={image} alt="" />
          </div>
        </div>

        {/* ----------- Product Info ---------------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">
            {productData.name}
          </h1>
          <p className='mt-5 text-3xl font-medium'> {currency}{productData.price} </p>
          <p className='mt-5 text-gray-500 md:w-4/5'> {productData.description} </p>

          {/* Sizes for Bangles*/}

          {productData.selectedproduct === "Bangles" && (
            <div className='mt-5'>
              <label htmlFor="size" className='block mb-2 font-medium'>Select Size:</label>
              <select id="size" className='border border-gray-300 rounded px-3 py-2' defaultValue="" onChange={(e) => setSelectedSize(e.target.value)}>
                <option value="" >Select Size</option>
                <option value="2.2">2.2</option>
                <option value="2.4">2.4</option>
                <option value="2.6">2.6</option>
                <option value="2.8">2.8</option>
              </select>

            </div>
          )}

          <button onClick={() => addToCart(productData._id, selectedSize, productData.selectedproduct)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-5'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on Delivery is available on this product</p>
          </div>
        </div>
      </div>

      {/*-------- Description & Review Section -------------*/}

      <div className='mt-20'>
        <div className='flex'>
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews (122) </p>
        </div>
        <div className='flex flex-col gap-4 border px-6 text-sm text-gray-700'>
          <p className='py-3'>{productData.name}</p>
          <p className='py-3'>{productData.description}</p>
        </div>
      </div>
      {/* ----------- Related Products ----------------- */}

      <RelatedProducts selectedproduct={productData.selectedproduct} />


    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
