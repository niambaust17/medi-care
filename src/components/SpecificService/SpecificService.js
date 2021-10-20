import React from 'react'
import { useHistory } from 'react-router';
import './SpecificService.css'

function SpecificService(props)
{
    const { id, icon, serviceType } = props.service;
    const history = useHistory();

    return (
        <div className="col">
            <div className="card" onClick={() => history.push(`/service/${ id }`)}>
                <div className="row text-center">
                    <div className="col-xs-12 col-md-12">
                        <img src={icon} className="card-img-top m-2" alt={serviceType} style={{ height: '75px', width: '75px' }} />
                    </div>
                    <div className="col-xs-12 col-md-12" style={{ display: 'grid', alignContent: 'center' }}>
                        <h5 className="card-title">{serviceType}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecificService
