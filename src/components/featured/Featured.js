import React from 'react'
import './Featured.css'
import { products } from '../data'
import { products2 } from '../data'
import ReactWhatsapp from 'react-whatsapp'
import { FaEnvelope } from 'react-icons/fa'

import { BiBed, BiBath } from 'react-icons/bi'

const Featured = () => {

    function sendEmail(message) {
        var email = 'muconstructionllc155@gmail.com';
        var subject = message.subject;
        var emailBody = 'Hi ' + message.from;
        document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    }


    return (


        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>

            {products.map((products, index) => (
                <div className="container" key={index}>
                    <img className='span-3 image-grid-row-2' src={products.image} alt='' />
                    <img src={products.image1} alt='' />
                    <img src={products.image2} alt='' />
                    <img src={products.image3} alt='' />
                    <img src={products.image4} alt='' />
                    <div className='span-3 img-details'>
                        <div className='top'>
                            <h2>{products.title}</h2>
                            <p>{products.subtitle}</p>
                            <p className='price'>${products.pric}</p>
                        </div>
                        <div className='info-grid'>
                            <div>
                                <div className='info'>
                                    <p className='bold'>  Bedrooms:</p><p className='bold2'>{products.Bedrooms} <BiBed className='BI' /></p>
                                </div>
                                <div className='info'>
                                    <p className='bold'>Bathrooms:</p><p>{products.Bathrooms} <BiBath className='BI' /></p>
                                </div>
                            </div>
                            <div>
                                <div className='info'>
                                    <p className='bold'>Square Feet:</p><p>${products.Spuare}</p>
                                </div>
                                <div className='info'>
                                    <p className='bold'>Est Payment:</p><p>${products.Est}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='span-2 right-img-details'>
                        <p>{products.pa}</p>
                        <div className='space'>   <ReactWhatsapp className='btn' number="+17862013427" message="Hello World!!!">Call Now</ReactWhatsapp>
                            <button className="btn" onClick={sendEmail}><FaEnvelope className=''></FaEnvelope></button></div>


                    </div></div>


            ))};

            {products2.map((products2, index) => (
                <div className='container' key={index}>
                    <img className='order-2' src={products2.image} alt='' />
                    <img className='order-3' src={products2.image1} alt='' />

                    <img className='span-3 image-grid-row-2 order-1' src={products2.image2} alt='' />


                    <img className='order-4' src={products2.image3} alt='' />
                    <img className='order-5' src={products2.image4} alt='' />

                    <div className='span-2 right-img-details order-7'>
                        <p>{products2.pa} </p>
                        <div className='space'>   <ReactWhatsapp className='btn' number="+17862013427" message="Hello World!!!">Call Now</ReactWhatsapp>
                            <button className="btn" onClick={sendEmail}><FaEnvelope className=''></FaEnvelope></button></div>
                    </div>


                    <div className='span-3 img-details order-6'>
                        <div className='top'>
                            <h2>{products2.title}</h2>
                            <p>{products2.subtitle}</p>
                            <p className='price'>${products2.pric}</p>
                        </div>
                        <div className='info-grid'>
                            <div>
                                <div className='info'>
                                    <p className='bold'>Bedrooms:</p><p>{products2.Bedrooms} <BiBed className='BI' /></p>
                                </div>
                                <div className='info'>
                                    <p className='bold'>Bathrooms:</p><p>{products2.Bathrooms} <BiBath className='BI' /></p>
                                </div>
                            </div>
                            <div>
                                <div className='info'>
                                    <p className='bold'>Square Feet:</p><p>${products2.Spuare}</p>
                                </div>
                                <div className='info'>
                                    <p className='bold'>Est Payment:</p><p>${products2.Est}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))},

        </div>


    )
}

export default Featured
