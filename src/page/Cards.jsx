import React, {useState} from 'react';
import s from "./page.module.css";
import {cards} from "../data/cards";
import {FaEdit, FaTimesCircle} from "react-icons/fa";
import {RiDeleteBin5Line} from "react-icons/ri";
import {TiPlusOutline} from "react-icons/ti";

const Cards = () => {
    const [dealClosedBtn, setDealClosedBtn] = useState("declined")
    return (
        <div>
            <div className={s.cardsInner}>
                {cards.map((item, index) => (
                    <div key={index} className={s.card}>
                        <div className={s.cardInner}>
                            <ul>
                                <li><span>Account Number:</span><span>{item.accountNumber}</span></li>
                                <li><span>FirstName:</span> <span>{item.firstName}</span></li>
                                <li><span>LastName</span><span>{item.lastName}</span></li>
                                <li><span>Middle Name</span><span>{item.middleName}</span></li>
                                <li><span>Date of Birth</span><span>{item.dateBirth}</span></li>
                                <li><span>TIN:</span><span>{item.tin}</span></li>
                                <li><span>Responsible Person's:</span><span>{item.responsiblePerson}</span></li>
                                <li><span>Status:</span><span>{item.status}</span></li>
                            </ul>
                            <div className={s.bottom}>
                                <button
                                    className={`
                                        ${item.status === "deal closed" ? s.btnClosed : ""}
                                        ${item.status === "declined" ? s.btnDeclined : ""}
                                        ${item.status !== "deal closed" && item.status !== "declined" ? s.btn : ""}
                                    `}>{item.status}</button>
                                <FaTimesCircle/>
                                <RiDeleteBin5Line/>
                                <FaEdit/>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={s.card}>
                    <div className={s.addInner}>
                        <h2 className={s.add}>Add card</h2>
                        <TiPlusOutline size={40}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cards;
