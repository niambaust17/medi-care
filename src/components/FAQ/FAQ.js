import React from 'react'
import faq from '../../assets/images/faq.png'

function FAQ()
{
    return (
        <div className="mt-5">
            <div className="container text-center">
                <h1 className="mb-5">FAQ</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <b>What Is Good Health?</b>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quaerat maiores modi. Ratione officiis beatae, aliquid ipsa explicabo placeat repellat blanditiis ab molestiae voluptatem pariatur fugit vero expedita dolores suscipit non laboriosam, veniam soluta corporis quas culpa obcaecati. Ullam ea blanditiis iusto repellat odio, quia a nostrum. Illo sunt impedit id illum iure consectetur ea sit cumque enim voluptas sequi hic voluptates maxime repudiandae, voluptatibus adipisci. Impedit voluptate, eius error libero distinctio a aperiam quo quos? Obcaecati natus non saepe excepturi sint sed reprehenderit itaque neque ipsum dignissimos corrupti, ratione libero ut. Numquam, eum. Error ratione dolorum aperiam earum quos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <b>Is A Good Blood Pressure?</b>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quaerat maiores modi. Ratione officiis beatae, aliquid ipsa explicabo placeat repellat blanditiis ab molestiae voluptatem pariatur fugit vero expedita dolores suscipit non laboriosam, veniam soluta corporis quas culpa obcaecati. Ullam ea blanditiis iusto repellat odio, quia a nostrum. Illo sunt impedit id illum iure consectetur ea sit cumque enim voluptas sequi hic voluptates maxime repudiandae, voluptatibus adipisci. Impedit voluptate, eius error libero distinctio a aperiam quo quos? Obcaecati natus non saepe excepturi sint sed reprehenderit itaque neque ipsum dignissimos corrupti, ratione libero ut. Numquam, eum. Error ratione dolorum aperiam earum quos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <b>Does Require Medication?</b>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quaerat maiores modi. Ratione officiis beatae, aliquid ipsa explicabo placeat repellat blanditiis ab molestiae voluptatem pariatur fugit vero expedita dolores suscipit non laboriosam, veniam soluta corporis quas culpa obcaecati. Ullam ea blanditiis iusto repellat odio, quia a nostrum. Illo sunt impedit id illum iure consectetur ea sit cumque enim voluptas sequi hic voluptates maxime repudiandae, voluptatibus adipisci. Impedit voluptate, eius error libero distinctio a aperiam quo quos? Obcaecati natus non saepe excepturi sint sed reprehenderit itaque neque ipsum dignissimos corrupti, ratione libero ut. Numquam, eum. Error ratione dolorum aperiam earum quos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
                        <img src={faq} alt="FAQ" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
