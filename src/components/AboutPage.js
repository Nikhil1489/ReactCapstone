import React from 'react';
import Footer from './Footer';
import Header from './Header';
import restaurant from "../assets/restaurant.jpg"


const AboutPage = () => {
    return (
        <>
            <Header />
            <section>
                <div className="restaurantBanner">
                    <img src={restaurant} alt="" />
                </div>
                <div className='container'>
                    <h1>About Little Lemon</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutPage;