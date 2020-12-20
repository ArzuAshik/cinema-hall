import React from 'react';
import { Link } from 'react-router-dom';
import { MdEventSeat } from "react-icons/md";

const Booking = () => {
    const seats = [1, 2, 0, 0, 0, 0, 0, 0, 0, 10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 30, 31, 0, 0, 0, 0, 0, 0, 0, 0, 40];
    const rowOne = seats.slice(0, 10);
    const rowTwo = seats.slice(10, 20);
    const rowThree = seats.slice(20, 30);
    const rowFour = seats.slice(30);
    const seatColor = ["gray", "black", "green"]
    return (
        <div className="container">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Cinema Ticket</Link>
                </nav>
                <div className="header-content mt-3">
                    <div className="row border-bottom">
                        <div className="col-md-5 text-center mb-3">
                            <img src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-7 mb-3">
                            <h2>Movie Name</h2>
                            <h4>Date:</h4>
                            <h4>Time:</h4>
                            <h4>Available Seat:</h4>
                            <h4>Price: 500Tk / Seat</h4>
                        </div>
                    </div>
                </div>
            </header>
            <div className="row mt-3">
                <div className="col-md-7">
                    <h3>Select A Seat to Book</h3>
                    <div className="seat-info">
                        <p><MdEventSeat color={seatColor[0]} size="2.5em"/> Available Seats</p>
                        <p><MdEventSeat color={seatColor[1]} size="2.5em"/> Booked Seats</p>
                        <p><MdEventSeat color={seatColor[2]} size="2.5em"/> Selected Seats</p>
                    </div>
                    <div className="seats my-3">
                        {
                            rowOne.map(seat => <MdEventSeat size="2.5em"/>)
                        }
                    </div>
                    <div className="seats my-3">
                        {
                            rowTwo.map(seat => <MdEventSeat size="2.5em"/>)
                        }
                    </div>
                    <div className="seats my-3">
                        {
                            rowThree.map(seat => <MdEventSeat size="2.5em"/>)
                        }
                    </div>
                    <div className="seats my-3">
                        {
                            rowFour.map(seat => <MdEventSeat size="2.5em"/>)
                        }
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-center flex-column">
                    <h3>Total Selected Seats: 0</h3>
                    <h3>Total Price: 0Tk</h3>
                    <button className="btn btn-primary">Confirm Booking</button>
                </div>
            </div>

        </div>
    );
};

export default Booking;