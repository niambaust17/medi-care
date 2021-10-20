import React, { useEffect, useState } from 'react'
import SpecificService from '../SpecificService/SpecificService';

function Service()
{
    const [services, setServices] = useState([]);

    useEffect(() =>
    {
        fetch('fakeService.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-5">
            <div className="container">
                <h1 className="mb-5 text-center">SERVICES</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <SpecificService key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Service
