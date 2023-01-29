import React from "react";
import BookingForm from "./bookingForm";
import Footer from "./Footer";
import Header from "./Header";
import restaurant from "../assets/restaurant.jpg"

export function BookingPage({ availableTimes, setAvailableTimes, submitForm }) {

    return (
        <>
            <Header />
            <div className="restaurantBanner">
                <img src={restaurant} alt="" />
            </div>
            <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                submitForm={submitForm}
            />
            <Footer />
        </>
    )

}
export default BookingPage;