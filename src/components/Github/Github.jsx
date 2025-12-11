import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data=useLoaderData()

    // const [data,setData]=useState([])
    
//    useEffect(()=>{
//      fetch('https://api.github.com/users/mvishalsingh25')
//      .then(res=>res.json())
//      .then(data=>{
//         console.log(data)
//         setData(data)})
// },[])

  return (
    <>
    <div className='text-center bg-gray-200  text-3xl'>Github: {data.followers}</div>
  <img src={`${data.avatar_url}`} width={100} alt="Github image" />

    
    </>
  )
}

export default Github

export const githubInfoLoader = async()=>{

  const response=  await fetch('https://api.github.com/users/mvishalsingh25')
    
  return response.json()

}