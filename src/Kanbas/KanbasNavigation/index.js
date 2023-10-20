import {NavLink, Link, useLocation} from "react-router-dom";
import "./index.css";
import {FaNeos, FaUserCircle, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock, FaTv, FaArrowCircleRight, FaQuestionCircle, } from "react-icons/fa";

function getImage(link) {
    switch (link){
        default:
            return
        case "Account":
            return <FaUserCircle className={"wd-sidebar-icon"} style={{color: "grey"}}/>
        case "Dashboard":
            return <FaTachometerAlt className={"wd-sidebar-icon wd-sidebar-icon-color"}/>
        case "Courses":
            return <FaBook className={"wd-sidebar-icon wd-sidebar-icon-color"}/>
        case "Calendar":
            return <FaCalendar className={"wd-sidebar-icon wd-sidebar-icon-color"}/>
        case "Inbox":
            return <FaInbox className={"wd-sidebar-icon wd-sidebar-icon-color"}/>
        case "History":
            return <FaClock className={"wd-sidebar-icon wd-sidebar-icon-color"}/>
        case "Studio":
            return <FaTv className={"wd-sidebar-icon wd-sidebar-icon-color"} />
        case "Commons":
            return <FaArrowCircleRight className={"wd-sidebar-icon wd-sidebar-icon-color"}/>
        case "Help":
            return <FaQuestionCircle className={"wd-sidebar-icon wd-sidebar-icon-color"}/>
        case "Logo":
            return <FaNeos className={"wd-sidebar-NEU-logo"}/>
    }
}

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const {pathname} = useLocation();
    return(

            <div className="wd-column wd-nav-div float-start" style={{ width: 100}}>
                <a className={"list-group-item wd-sidebar-padding"}>{getImage("Logo")}</a>

                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`list-group-item wd-sidebar-padding ${pathname.includes(link) && "active" ? 'wd-sidebar-li-current' : ''}`}
                        style={{paddingBottom: 10, paddingTop: 10, backgroundColor: pathname.includes(link) ? 'white' : ''}}>

                        {getImage(link)}

                        <div className={`wd-sidebar-a ${pathname.includes(link) && "active" ? 'wd-sidebar-a-current' : ''}`}>
                            {link}
                        </div>
                    </NavLink>
                ))}
            </div>

    );
}
export default KanbasNavigation;