import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';




const AllProductPage = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showfilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedproducts, setSelectedProducts] = useState([]);
  const [sortType,setSortType] = useState('relavant');

  const toggleProduct = (e) => {
    if (selectedproducts.includes(e.target.value)) {
      setSelectedProducts(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSelectedProducts(prev => [...prev, e.target.value])
    }

  }

  const applyFilter = () => {

    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (selectedproducts.length > 0) {
      productCopy = productCopy.filter(item => selectedproducts.includes(item.selectedproduct))
    }

    setFilterProducts(productCopy)


  }

  const sortProduct = ()=> {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }
  
  useEffect(() => {
    applyFilter()
  }, [selectedproducts,search,showSearch,products])

  useEffect(() =>{
    sortProduct()
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options*/}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showfilter)} className='my-2 text-xl flex items-center  cursor-pointer gap-2'>FILTER PRODUCT'S
          <img className={`h-10 sm:hidden ${showfilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter*/}
        <div className={`border border-gray-300 pl-6 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Select Product</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'Bajuband'} onChange={toggleProduct} /> Bajuband
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'Bangles'} onChange={toggleProduct} /> Bangle's
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'Bracelet'} onChange={toggleProduct} /> Bracelet's
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'Eartop'} onChange={toggleProduct} /> Eartop's
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'earing'} onChange={toggleProduct} /> Earing's
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'hairaccessories'} onChange={toggleProduct} /> Hair Accessories
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'hairstyle'} onChange={toggleProduct} /> Hair Style's
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'kamarband'} onChange={toggleProduct} /> Kamarband's
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'necklace'} onChange={toggleProduct} /> Necklace's
            </p>

            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'nosepin'} onChange={toggleProduct} /> Nose Pin's
            </p>


          </div>

        </div>



      </div>
      {/* Right Side */}
      <div className='flex-1 '>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'PRODUCTS'} />
          {/* Product Sort  */}
          <select onChange={(e)=> setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 '>
            <option value="revlant">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: high to Low</option>
          </select>
        </div>

        {/* Map Products  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default AllProductPage
