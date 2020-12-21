//                navbar
// =====================================
export function handleSelectDateTime(selectedDateTime, setSelectedDateTime, e){
    let newDateTime = {...selectedDateTime};
    newDateTime[e.target.name] = e.target.value;
    setSelectedDateTime(newDateTime);
}

export function handleSearch(selectedDateTime, setSearchDateTime, e){
    e.preventDefault();
    setSearchDateTime(selectedDateTime);
}

export function findDate(next) {
    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + next);
    const fullDate = `${nextDay.getDate()} ${findMonth(nextDay.getMonth())} ${nextDay.getFullYear()}`;
    return fullDate;
}

 function findMonth(month){
    const monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthString[month];
}


// =====================================
//               booking
// =====================================
export function setSeatStatus(bc, seats, setBookedSeats, setSeats){
    setBookedSeats(bc);
    let newSeats = [...seats];
    for(let element of bc){
        newSeats[element] = 1;
    }
    setSeats(newSeats);
}

export function handelSelectSeat(seatIndex, seats, setSeats, selectedSeats, setSelectedSeats){
    if(seats[seatIndex] == 0 && selectedSeats.length < 10){
        const newSelectedSeats = [...selectedSeats];
        newSelectedSeats.push(seatIndex);
        setSelectedSeats(newSelectedSeats);
        let newSeats = [...seats];
        newSeats[seatIndex] = 2;
        setSeats(newSeats);
    } else if(seats[seatIndex] == 2){
        setSelectedSeats(selectedSeats.filter(index => index != seatIndex));
        let newSeats = [...seats];
        newSeats[seatIndex] = 0;
        setSeats(newSeats);
    }
}

export function handleConfirmBooking(selectedSeats, setSelectedSeats, movieID, searchDateTime, bookedSeats, setIsLoading){
    setIsLoading(true);
    selectedSeats.length && fetch(`https://ar-cinema-hall-server.herokuapp.com/confirm-booking`,{
        method: "POST",
        body: JSON.stringify({ 
            movieID, 
            time: searchDateTime.time,
            bookedSeats: [...bookedSeats, ...selectedSeats], 
            availableSeats: 40 - bookedSeats,
         }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(response => response.json())
    .then(result => {        
        alert("Thanks For Booking.")
        setSelectedSeats([]);
    })
}

export function seatName(index){
    if(index < 10){
        return " A" + (index + 1);
    } else if(index < 20){
        return " B" + (index - 9);
    }else if(index < 30){
        return " C" + (index - 19);
    } else{
        return " D" + (index - 29);
    }
}