import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'

const Profile = () => {

    const { backendUrl, token, navigate } = useContext(ShopContext)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const getProfile = async () => {

        try {

            const response = await axios.post(backendUrl + '/api/user/profile', {}, {
                headers: { token }
            })

            if (response.data.success) {
                setUser(response.data.user)
            } else {
                console.log(response.data.message)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        if (!token) {
            navigate('/login')
            return
        }

        getProfile()

    }, [token])

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-[50vh]'>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className='w-full max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6'>
            <h1 className='text-xl sm:text-2xl font-medium mb-6 sm:mb-8'>
                My Profile
            </h1>
            {user && (
                <div className='border border-gray-300 rounded-lg p-5 sm:p-8 md:p-12'>
                    <div className='mb-5 sm:mb-6'>
                        <p className='text-gray-700 text-sm sm:text-md'>
                            Name
                        </p>
                        <p className='text-base sm:text-lg mt-1 border border-gray-500 px-3 sm:px-4 py-2 rounded-md break-words'>
                            {user.name}
                        </p>
                    </div>
                    <div>
                        <p className='text-gray-700 text-sm sm:text-md'>
                            Email
                        </p>
                        <p className='text-base sm:text-lg mt-1 border border-gray-500 px-3 sm:px-4 py-2 rounded-md break-words'>
                            {user.email}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile