import React from 'react';
import s from './sidebar.module.css';
import {data} from "../../data/sidebarItems";
import {Link} from "react-router-dom";

const SidebarItems = () => {

    return (
        <div className={s.sidebarInner}>
            <div className={s.headerSidebarItem}>
                <div className={s.avatar}><img src="/img/avatar.svg" alt="avatar"/></div>
                <div className={s.emailPart}><span>anna@gmail.com</span></div>
                <div className={s.center}>
                    <div className={s.sidebarItemsInner}>
                        {data.map((item, index) => (
                            <Link to={item.link} key={index} className={s.sidebarItems}><span>{item.icon}</span>{item.title}</Link>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarItems;
