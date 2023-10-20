import {FaFileImport, FaArrowAltCircleRight, FaBullseye, FaChartBar, FaBullhorn, FaBell} from "react-icons/fa";
import "./index.css";

function Status() {
    return(
        <div className="wd-column wd-status-column d-none d-lg-block">

                <h5>Course Status</h5>
                <button type="button" className="btn btn-light btn-outline-dark"><i
                    className="fas fa-ban"></i>&nbsp;Unpublish&nbsp;</button>
                <button type="button" className="btn btn-success"><i className="far fa-check-circle"></i>&nbsp;Published&nbsp;
                </button>

                <div className="list-group">
                    <a href="#" className="wd-status-a list-group-item list-group-item-action list-group-item-secondary">
                        <i className="fas fa-file-import"></i>
                        Import Existing Content</a>
                    <a href="#" className="wd-status-a list-group-item list-group-item-action list-group-item-secondary">
                        <i className="fas fa-arrow-alt-circle-right"></i>
                        Import From Commons</a>
                    <a href="#" className="wd-status-a list-group-item list-group-item-action list-group-item-secondary">
                        <i className="fas fa-bullseye"></i>
                        Choose Home Page</a>
                    <a href="#" className="wd-status-a list-group-item list-group-item-action list-group-item-secondary">
                        <i className="fas fa-chart-bar"></i>
                        View Course Stream</a>
                    <a href="#" className="wd-status-a list-group-item list-group-item-action list-group-item-secondary">
                        <i className="fas fa-bullhorn"></i>
                        New Announcement</a>
                    <a href="#" className="wd-status-a list-group-item list-group-item-action list-group-item-secondary">
                        <i className="fas fa-chart-bar"></i>
                        New Analytics</a>
                    <a href="#" className="wd-status-a list-group-item list-group-item-action list-group-item-secondary">
                        <i className="fas fa-bell"></i>
                        View Course Notifications</a>
                </div>

                <div>
                    <h5 className="wd-status-h5">Coming Up</h5>
                    <a className="wd-status-view-calendar" href="#">
                        <i className="fas fa-calendar"></i>
                        View Calendar</a>
                    <hr/>
                        <ul className="wd-status-ul">
                            <li className="wd-status-li"><a href="#" className="wd-status-a2"><i
                                className="fas fa-calendar"></i>&nbsp;Lecture</a>
                                <p className="wd-status-p">CS4550.12631.202410 Sep 7 at 11:45am</p></li>
                            <li className="wd-status-li"><a href="#" className="wd-status-a2"><i
                                className="fas fa-calendar"></i>&nbsp;Lecture</a>
                                <p className="wd-status-p">CS4550.12631.202410 Sep 11 at 11:45am</p></li>
                            <li className="wd-status-li"><a href="#" className="wd-status-a2"><i
                                className="fas fa-calendar"></i>&nbsp;CS5610 06 FA23 Lecture</a>
                                <p className="wd-status-p">Sep 11 at 7pm</p></li>
                        </ul>
                </div>
        </div>
    );
}
export default Status;




