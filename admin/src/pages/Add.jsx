import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, Setdescription] = useState("");
  const [price, SetPrice] = useState("");
  const [selectedproduct, SetSelectedProduct] = useState("Bangles");
  const [bestseller, setBestseller] = useState(false);
  const [selectedSize, setSelectedSize] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("selectedproduct", selectedproduct);
      formData.append("bestseller", bestseller);
      formData.append("selectedSize", JSON.stringify(selectedSize));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        Setdescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        SetPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }


  return (

    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-3'>Upload Image</p>

        <div className='flex gap-4'>
          <label htmlFor="image1">
            <img className='w-15' src={!image1 ? assets.upload : URL.createObjectURL(image1)} alt="upload image" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-15' src={!image2 ? assets.upload : URL.createObjectURL(image2)} alt="upload image" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-15' src={!image3 ? assets.upload : URL.createObjectURL(image3)} alt="upload image" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-15' src={!image4 ? assets.upload : URL.createObjectURL(image4)} alt="upload image" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className='w-full mb-2'>Product name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className="w-full">
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e) => Setdescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here  ' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'> Product category </p>
          <select onChange={(e) => SetSelectedProduct(e.target.value)} value={selectedproduct} className='w-full px-3 py-2'>
            <option value="Bajuband">Bajuband</option>
            <option value="Bangles">Bangle's</option>
            <option value="Bracelet">Bracelet's</option>
            <option value="Eartop">Eartop's</option>
            <option value="earing">Earing's</option>
            <option value="hairaccessories">Hair Accessories</option>
            <option value="hairstyle">Hair Style's</option>
            <option value="kamarband">Kamarband's</option>
            <option value="necklace">Necklace's</option>
            <option value="nosepin">Nose Pin's</option>
          </select>
        </div>

        <div className="">
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) => SetPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' placeholder='200 rs' type="Number" />
        </div>

      </div>

      <div className=''>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={() => setSelectedSize(prev => prev.includes(2.2) ? prev.filter(item => item !== 2.2) : [...prev, 2.2])} className="">
            <p className={`${selectedSize.includes(2.2) ? "bg-gray-400" : "bg-slate-300"} px-3 py-1 cursor-pointer`}>2.2</p>
          </div>

          <div onClick={() => setSelectedSize(prev => prev.includes(2.4) ? prev.filter(item => item !== 2.4) : [...prev, 2.4])} className="">
            <p className={`${selectedSize.includes(2.4) ? "bg-gray-400" : "bg-slate-300"} px-3 py-1 cursor-pointer`}>2.4</p>
          </div>

          <div onClick={() => setSelectedSize(prev => prev.includes(2.6) ? prev.filter(item => item !== 2.6) : [...prev, 2.6])} className="">
            <p className={`${selectedSize.includes(2.6) ? "bg-gray-400" : "bg-slate-300"} px-3 py-1 cursor-pointer`}>2.6</p>
          </div>

          <div onClick={() => setSelectedSize(prev => prev.includes(2.8) ? prev.filter(item => item !== 2.8) : [...prev, 2.8])} className="">
            <p className={`${selectedSize.includes(2.8) ? "bg-gray-400" : "bg-slate-300"} px-3 py-1 cursor-pointer`}>2.8</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

    </form>

  )
}

export default Add
