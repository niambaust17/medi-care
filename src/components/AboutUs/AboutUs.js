import React from 'react'
import about from '../../assets/images/banner-1.png'

function AboutUs()
{
    return (
        <div className="mt-5">
            <div className="container">
                <h1 className="mb-5 text-center">ABOUT US</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img src={about} alt="About Us" style={{ width: "100%" }} />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h3>Making Health Facilities <br />In Emergencies</h3>
                            <br />
                            <p style={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore ut debitis accusamus sed labore distinctio suscipit vero in! Laudantium fuga enim porro earum, cupiditate, animi amet ea incidunt aperiam dolorem iure inventore dolorum adipisci ducimus maxime! Sapiente enim, dolorum veritatis quia suscipit exercitationem natus minima modi vitae quos commodi consequatur accusantium fugit necessitatibus porro architecto? Maxime magnam deleniti nihil qui mollitia, omnis ipsa eligendi nisi maiores quibusdam magni praesentium inventore veritatis voluptas officia quo.
                            </p>
                            <button className="btn btn-primary">Discover More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
