import React, {useEffect, useState}from 'react'
import axios from 'axios'
import AxiosInstance from '../../AxiosInstance'

const Dashboard = () => {

    const accesToken = localStorage.getItem('access_token')

    useEffect(() => {

        const fetchProtectedData = async () => {
            try {
                const response = await AxiosInstance.get('/protected-view/'
                    //,{
                    //headers : {
                    //    Authorization: `Bearer ${accesToken}`
                    //}

                //}
            );
                console.log('sucess ', response.data );
            } catch (error) {
                console.log('error featching data: ', error)
                
            }
        }

        fetchProtectedData();

    }, [])

  return (
    <div className='text-light container'>Dashboard</div>
  )
}

export default Dashboard

// if we 401 unauthorise which mean our accessToken is expired, we need to handle this sitution so that we can loged out for this we are going to use refresherToken and we use Interceptors
// Axios Interceptors : Interceptors are a features that allows you to modify request and responses before they are handled by the success handler or error handler.
/* two type of interceptors are : 
1.> Request Interceptors : this use to modify the  request before they are sent to the server
ex; we want to send the access token with the request or with api requeest we use this interceptors

2.> Response Interceptors : Response inceptors are used to handle responses before they reach your then or cach methods. (success handler or error handlers)


*/