import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>

            {/** Product Id , title , price  rating,iamge*/}
            <div className="home__row">
                <Product
                    id={12321341}
                    title="The Lean Start up : How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={13.31}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                ></Product>
                <Product
                    id={12321341}
                    title="The Lean Start up : How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={13.31}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                ></Product>

            </div>

            <div className="home__row">
                <Product
                    id={12321341}
                    title="The Lean Start up : How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={13.31}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                ></Product>
                <Product
                    id={12321341}
                    title="The Lean Start up : How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={13.31}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                ></Product>
                <Product
                    id={12321341}
                    title="The Lean Start up : How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={13.31}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                ></Product>
            </div>
            {/**Product */}
        </div>
    )
}

export default Home
