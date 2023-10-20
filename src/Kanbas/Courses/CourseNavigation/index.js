import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import {FaBars} from "react-icons/fa";
import db from "../../Database";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes",
        "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files",
        "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const loc = pathname.split("/");
    const finalEl = loc.slice(-1);
    console.log(pathname);

    return (
        //<div className={"row"}>
        <div>
            <div className={"wd-breadcrumb-bar"}>
            <div style={{width: 20, display: "inline-block"}}><a href="#" className="wd-breadcrumb-a"><FaBars/></a></div>
            <div style={{ display: "inline-block"}}>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li> <Link to={`/Kanbas/Courses/${courseId}`} className="breadcrumb-item wd-breadcrumb-item">CS5610.17367.202410</Link> </li>
                        <p> > </p>
                        <li className="breadcrumb-item active wd-breadcrumb-active" aria-current="page">{finalEl}</li>
                    </ol>
                </nav>
            </div>
            </div>
            <hr/>


            <div className=" wd-column wd-courses-bar" style={{ width: 150 }}>
                <ul className={"wd-courses-ul"}>
                {links.map((link, index) => (
                    <li className={"wd-courses-li"}>
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`wd-courses-li wd-courses-a ${pathname.includes(link) && "active" ? 'wd-courses-a-active wd-courses-li-active' : ''}`}>
                        {link}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}
export default CourseNavigation;