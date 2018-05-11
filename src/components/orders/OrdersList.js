import React from 'react'
import {OrderCard} from './OrderCard';


const OrdersList =({orders})=>(
            <div>
                {orders.map((o, key)=>(
                    <OrderCard {...o} key={key}/>
                ))}
            </div>
)
export default OrdersList