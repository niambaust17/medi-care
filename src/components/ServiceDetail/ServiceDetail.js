import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import services from '../fakeService/fakeService.json'

function ServiceDetail()
{
    const { id } = useParams();
    const singleServiceInfo = services.filter(service => service.id == id)[0];

    return (
        <div className="container">
            <div className="text-center">
                <img className="border border-blue" src={singleServiceInfo.img} alt={singleServiceInfo.serviceType} />
                <h3 className="m-3">{singleServiceInfo.serviceType}</h3>
                <p style={{ textAlign: 'justify' }}>{singleServiceInfo.description}</p>
            </div>
        </div>
    )
}

export default ServiceDetail
