import React from 'react'
import axios from 'axios'

const UpdateGS = () => {


    
    
    return (
        <div>UpdateGS</div>
        )
    }
    
    export default UpdateGS
    
export const updateGooglesheet=async(orderno, chefdetails)=>{
    
    console.log('hi udpate google is running ')
    console.log(`${chefdetails} team is assigned for this order ${orderno} number` )


    let res = await axios.post('http://127.0.0.1:3030/ac', {orderno, chefdetails}).then((res)=>{console.log(res)
return res})
// console.log(res)
// return <div>{`${chefdetails} team is assigned for this order ${orderno} number`}</div>
}