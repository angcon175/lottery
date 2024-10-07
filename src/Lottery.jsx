import { useState } from "react";
import './Lottery.css';
import { genTicket, sum } from "./helper";

// Lottery.propTypes = {
//     money: PropTypes.number.isRequired, // Ensure money is a number
//     setMoney: PropTypes.number.isRequired, // Ensure money is a number
// };

export default function Lottery({ money, setMoney }){
    let [ticket, setTicket] = useState(genTicket(3))
    let isWinning = sum(ticket) === 11;
    let reload = () => {
        if(money>0){
            setMoney (money-10)
            setTicket(genTicket(3))
        }
    }
    return (
        <div>
            
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button type="button" className="btn btn-primary" onClick={reload}>Buy a Ticket</button>
            <br /> <br />
            <h3>{isWinning && "Congratulations Buddy!"}</h3>
        </div>
    )
    }