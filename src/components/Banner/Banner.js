import React from 'react'

function Banner()
{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
                    <div>
                        <h1>Good Health Is The Root Of All Happiness</h1>
                        <button className="btn btn-primary m-2">Book Appointment</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img style={{ height: '85vh' }} src="https://i.ibb.co/87svRvS/banner-1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img style={{ height: '85vh' }} src="https://i.ibb.co/nCV8KQ3/banner-2.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img style={{ height: '85vh' }} src="https://i.ibb.co/w49T5ZV/banner-3.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Banner
