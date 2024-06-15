import React, {useState} from 'react';
import Cards from "./Cards";
import {TiPlusOutline} from "react-icons/ti";
import s from './page.module.css';
import {useNavigate} from "react-router-dom";


const AllClients = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const toggleInputForm = () => {
        setVisible((prev) => !prev)
        navigate('/form')
    };
    return (
        <>
            <div>
                <div className={s.allClientInner}>
                <div className={s.plus}>
                    <button className={s.btnAll} onClick={toggleInputForm}>
                        <TiPlusOutline size={20} /></button>
                </div>
                </div>

                <div className={s.boxClient}> <Cards home={true} openInput={toggleInputForm} /></div>
            </div>
        </>
    );
};

export default AllClients;
