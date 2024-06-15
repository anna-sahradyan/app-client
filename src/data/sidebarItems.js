import {FaCheckCircle, FaClock, FaTimesCircle} from "react-icons/fa";

export const data = [
    {
        title: 'All Clients',
        link:"/"

    },
    {
        title: "In Progress",
        icon:<FaClock/>,
        link:"/progress"
    },
    {
        title: "Declined",
        icon:<FaTimesCircle/>,
        link:"/declined"
    },
    {
        title: 'Deal Closed',
        icon:<FaCheckCircle/>,
        link:"/deal"
    }

]
