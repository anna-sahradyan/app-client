import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Declined from "./page/Declined";
import InProgress from "./page/InProgress";
import DealClosed from "./page/DealClosed";
import AllClients from "./page/AllClients";
import InputForm from "./components/home/InputForm.";

const App = () => {
    return (
        <div>
            <Sidebar>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route index element={ <AllClients/>}/>
                        <Route path={'/deal'} element={ <DealClosed/> }/>
                        <Route path={'/progress'} element={ <InProgress/>}/>
                        <Route path={'/declined'} element={ <Declined/>}/>
                        <Route path={'/form'} element={<InputForm/>}/>
                    </Routes>
                </div>

            </Sidebar>
        </div>
    );
};

export default App;
