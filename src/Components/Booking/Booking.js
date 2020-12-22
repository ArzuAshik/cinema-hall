import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdEventSeat } from "react-icons/md";
import { SearchDateTimeContext, UserContext } from '../../App';
import { setSeatStatus, handleConfirmBooking, seatName, handelSelectSeat} from '../../functions';
import { MoonLoader } from 'react-spinners';

const Booking = () => {
    const [searchDateTime] = useContext(SearchDateTimeContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [movieInfo, setMovieInfo] = useState("");
    const [bookedSeats, setBookedSeats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [seats, setSeats] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const { id } = useParams();
    
    
    const rowOne = seats.slice(0, 10);
    const rowTwo = seats.slice(10, 20);
    const rowThree = seats.slice(20, 30);
    const rowFour = seats.slice(30);
    
    const seatColor = ["gray", "red", "green"];
    useEffect(() =>{
        fetch(`https://ar-cinema-hall-server.herokuapp.com/movie/${id}`)
        .then(response => response.json())
        .then(data => setMovieInfo(data));

        fetch(`https://ar-cinema-hall-server.herokuapp.com/booking-info?movieID=${id}&time=${searchDateTime.time}`)
        .then(response => response.json())
        .then(data => {
            setSeatStatus(data.bookedSeats, seats, setBookedSeats, setSeats);
            setIsLoading(false);
        });
    }, [isLoading])
    
    return (
        <div className="container">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Cinema Ticket</Link>
                </nav>
                <div className="header-content mt-3">
                    <div className="row border-bottom">
                        <div className="col-md-5 text-center mb-3">
                            <img src={movieInfo.img} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-7 mb-3">
                            <h2>{movieInfo.title}</h2>
                            <h4>Date: {searchDateTime.date}</h4>
                            <h4>Time: {searchDateTime.time}</h4>
                            <h4>Available Seats: {isLoading ? "..." : bookedSeats.length === 40 ? "HouseFull" : 40 - bookedSeats.length}</h4>
                            <h4>Price: 500Tk / Seat</h4>
                        </div>
                    </div>
                </div>
            </header>
            {
                isLoading ? <div className="loading"><MoonLoader /></div>  : 
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
                                rowOne.map((seat, index) => <MdEventSeat key={index} color={seatColor[seat]} onClick={() => handelSelectSeat(index+0, seats, setSeats, selectedSeats, setSelectedSeats)} size="2.5em"/>)
                            }
                        </div>
                        <div className="seats my-3">
                            {
                                rowTwo.map((seat, index) => <MdEventSeat key={index} color={seatColor[seat]} onClick={() => handelSelectSeat(index+10, seats, setSeats, selectedSeats, setSelectedSeats)} size="2.5em"/>)
                            }
                        </div>
                        <div className="seats my-3">
                            {
                                rowThree.map((seat, index) => <MdEventSeat key={index} color={seatColor[seat]} onClick={() => handelSelectSeat(index+20, seats, setSeats, selectedSeats, setSelectedSeats)} size="2.5em"/>)
                            }
                        </div>
                        <div className="seats my-3">
                            {
                                rowFour.map((seat, index) => <MdEventSeat key={index} color={seatColor[seat]} onClick={() => handelSelectSeat(index+30, seats, setSeats, selectedSeats, setSelectedSeats)} size="2.5em"/>)
                            }
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-center justify-content-center flex-column">
                        <h3>Total Selected Seats: {selectedSeats.length}</h3>
                        <h3>Total Price: {selectedSeats.length * 500}Tk</h3>
                        <h3>Selected Seats</h3>
                        <p>
                            {
                            selectedSeats.map(index => <span key={index} className="badge badge-secondary mx-2">{seatName(index)}</span>)
                            }
                        </p>
                        <button disabled={selectedSeats.length ? false : true} onClick={() => handleConfirmBooking(selectedSeats, setSelectedSeats, id, searchDateTime, bookedSeats, setIsLoading, movieInfo.title, loggedInUser.email)} className="btn btn-primary">Confirm Booking</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Booking;