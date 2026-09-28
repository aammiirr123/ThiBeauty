import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 100;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();

    const addToCart = async (itemId, selectedSize, productType) => {

        if (productType === "Bangles" && !selectedSize) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (productType === "Bangles") {
            if (!cartData[itemId]) {
                cartData[itemId] = {};
            }

            if (cartData[itemId][selectedSize]) {
                cartData[itemId][selectedSize] += 1;
            } else {
                cartData[itemId][selectedSize] = 1;
            }
        } else {

            if (cartData[itemId]) {
                cartData[itemId] += 1;
            } else {
                cartData[itemId] = 1;
            }
        }

        setCartItems(cartData);

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/add', { itemId, selectedSize }, { headers: { token } })

            } catch (error) {
                console.log(error);
                toast.error(error.message)

            }
        }

    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            const product = cartItems[itemId];
            if (typeof product === 'number') {
                if (product > 0) {
                    totalCount += product;
                }
            } else if (typeof product === 'object' && product !== null) {

                for (const size in product) {
                    if (product[size] > 0) {
                        totalCount += product[size];
                    }
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, selectedSize, quantity) => {

        let cartData = structuredClone(cartItems);

        if (selectedSize) {
            if (cartData[itemId]) {
                cartData[itemId][selectedSize] = quantity;

                if (quantity === 0) {
                    delete cartData[itemId][selectedSize];

                    if (Object.keys(cartData[itemId]).length === 0) {
                        delete cartData[itemId];
                    }
                }
            }
        } else {

            if (quantity === 0) {
                delete cartData[itemId];
            } else {
                cartData[itemId] = quantity;
            }
        }

        setCartItems(cartData)

        if (token) {

            try {

                await axios.post(backendUrl + '/api/cart/update', { itemId, selectedSize, quantity }, { headers: { token } })

            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }

        }

    }

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const itemId in cartItems) {
            const itemInfo = products.find(
                (product) => product._id === itemId
            );

            if (!itemInfo) continue;

            const productData = cartItems[itemId];


            if (typeof productData === "number") {
                totalAmount += itemInfo.price * productData;
            }


            else if (typeof productData === "object") {
                for (const size in productData) {
                    totalAmount += itemInfo.price * productData[size];
                }
            }
        }

        return totalAmount;
    };

    const getProductData = async () => {
        try {

            const response = await axios.get(backendUrl + '/api/product/list')


            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            
            const response = await axios.post(backendUrl + '/api/cart/get',{}, {headers:{ token }})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, setCartItems, addToCart, getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl, setToken, token,
    }



    useEffect(() => {
        getProductData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [])

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
