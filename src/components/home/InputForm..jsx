
import React, {useState} from 'react';
import s from './input.module.css';
import {TiPlusOutline} from "react-icons/ti";
import {useNavigate} from "react-router-dom";

const InputForm = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const closeInputForm = () => {
        setVisible((prev) => !prev)
        navigate('/');
    };
    return (
        <>
            <div className={s.inputInnerOpacity}></div>
            <div className={s.inputInner}>
                <div className={s.cardInput}>
                    <div className={s.boxBtn}>
                        <button className={s.btnPlus} onClick={closeInputForm}>
                            <TiPlusOutline size={20}/></button>
                    </div>
                    <form className={s.formGroup}>
                        <div className={s.inputFill}>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                                className={s.input}
                                defaultValue="Paruryan"
                            />
                        </div>
                        <div className={s.inputFill}>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                                className={s.input}
                                defaultValue="Anna"
                            />
                        </div>
                        <div className={s.inputFill}>
                            <label htmlFor="middleName">Middle Name</label>
                            <input
                                id="middleName"
                                type="text"
                                placeholder="Middle Name"
                                className={s.input}
                                defaultValue="Gurgenovna"
                            />
                        </div>
                        <div className={s.inputFill}>
                            <label htmlFor="accountNumber">Account Number</label>
                            <input
                                id="accountNumber"
                                type="text"
                                placeholder="Account Number"
                                className={s.input}
                            />
                        </div>
                        <div className={s.inputFill}>
                            <label htmlFor="tin">TIN</label>
                            <input
                                id="tin"
                                type="text"
                                placeholder="TIN"
                                className={s.input}
                                defaultValue="12"
                            />
                        </div>
                        <div className={s.inputFill}>
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                id="dob"
                                type="text"
                                placeholder="Date of Birth"
                                className={s.input}
                                defaultValue="02.10.1972"
                            />
                        </div>
                        <div className={s.inputFill}>
                            <label htmlFor="responsiblePerson">Responsible Person</label>
                            <input
                                id="responsiblePerson"
                                type="text"
                                placeholder="Responsible Person"
                                className={s.input}
                                defaultValue="Responsible Person"
                            />
                        </div>
                        <button type="submit" className={s.btnSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default InputForm;
