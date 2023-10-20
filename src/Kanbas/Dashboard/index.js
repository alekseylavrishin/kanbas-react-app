import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'

function Dashboard() {
    const courses = db.courses;
    return (
        <div className={"wd-dashboard-column"}>
            <div className={"row"}>
                <h1 className={"wd-dashboard-h1"}>Dashboard</h1>
                <hr/>
            </div>
            <div className={"row"}>
                <h4 className={"ms-4"}>Published Courses (7)</h4>
                <hr/>
            </div>


            <div className={"row"}>
                <div className="float-start container d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <div className="card wd-dashboard-card">

                                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item wd-dashboard-card-a">
                                    <div className="wd-dashboard-card-img card-img-top"></div>
                                    <h5 className={"card-title ps-1"}>{course.name}</h5>
                                    <h6 className="card-subtitle wd-dashboard-card-a ps-1">{course.number}</h6>
                                    <p className="card-text wd-dashboard-card-body-p ps-1">{course.fullId}
                                    </p>
                                </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;