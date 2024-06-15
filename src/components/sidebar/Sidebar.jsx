import React from 'react';
import  s from  './sidebar.module.css';
import SidebarItems from "./SidebarItems";
const Sidebar = ({children}) => {
    return (
        <div className={'container'}>
            <div className={s.sidebar}>
                <div className={s.scrollableContent}>
                            <SidebarItems/>
                    <div className={s.bottom}>
                      <span>Log Out</span>
                    </div>
                </div>
            </div>
            <main className={'main'}>{children}</main>
        </div>
    );
};

export default Sidebar;
