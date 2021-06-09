import { React } from "react";
import { a } from "react-router-dom";

const LefSide = () => {
    return (
     
<aside id="leftsidebar" class="sidebar">
<div class="admin-image" style={{marginBottom:50+"px",textAlign:"center", marginleft:3+"px"}}><img src="assets/images/logo.png" alt="" style={{width:"auto",height:4.5+"rem"}}/><i className="fas fa-bars"></i></div>
                   
           <div className="menu">    
                <div className="slimScrollDiv" style={{ position: "relative", overflow: "hidden", width: "auto" }}><ul className="list" id="documenter_nav" style={{ overflow: "hidden", width: "auto" }}>
                    <li className="active open"><a to="#documenter_cover" className="toggled waves-effect waves-block"><i className="fas fa-tachometer-alt"/><span>Dashboard </span></a></li>
                    <li className=""><a to="#Template_Description" className=" waves-effect waves-block"><i className="fas fa-network-wired"></i><span>Network</span></a></li>
                    <li><a to="#Advanced_Features" className=" waves-effect waves-block"><i className="fas fa-user-plus"></i><span>SignUp</span></a></li>
                    <li className=""><a to="#main_content" className=" waves-effect waves-block"><i className="far fa-building"></i><span>Business</span></a></li>
                    <li className=""><a to="#folder_structure" className=" waves-effect waves-block"><i className="fas fa-wallet"></i><span>Ewallet</span></a></li>
                    <li className=""><a to="#css" className=" waves-effect waves-block"><i className="far fa-money-bill-alt"></i><span>Payout</span></a></li>
                    <li className=""><a to="#javascript" className=" waves-effect waves-block"><i className="far fa-bookmark"></i><span>E-pin</span></a></li>
                    <li className=""><a to="#gulp-sass" className=" waves-effect waves-block"><i className="far fa-address-book"></i><span>Profile Management</span></a></li>
                    <li className=""><a to="#faqs" className=" waves-effect waves-block"><i className="fas fa-cubes"></i><span>Package</span></a></li>
                    <li><a to="#sources" className=" waves-effect waves-block"><i className="fas fa-shopping-basket"></i><span>Shopping Cart </span></a></li>
                    <li><a to="#fonts" className=" waves-effect waves-block"><i className="far fa-chart-bar"></i><span>Reports</span></a></li>
                    <li><a to="#thank_you" className=" waves-effect waves-block"><i className="fas fa-user"></i><span>Privileged User </span></a></li>
                    <li><a to="#thank_you" className=" waves-effect waves-block"><i className="fas fa-envelope"></i><span> MailBox</span></a></li>
                    <li><a to="#thank_you" className=" waves-effect waves-block"><i className="fas fa-wrench"></i><span> Tools</span></a></li>
                    <li><a to="#thank_you" className=" waves-effect waves-block"><i className="fas fa-cogs"></i><span> Setting</span></a></li>
                    <li><a to="#thank_you" className=" waves-effect waves-block"><i className="fas fa-ticket-alt"></i><span> </span>Support Center</a></li>
                    <li><a to="#thank_you" className=" waves-effect waves-block"><i className="fas fa-sign-out-alt"></i><span> Logout</span></a></li>
                </ul><div class="slimScrollBar" style={{ background: "rgba(0, 0, 0, 0.2)", width: 4 + "px", position: "absolute", top: 0 + "px", opacity: "0.4", display: "none", borderRadius: 0 + "px", zIndex: "99", right: 1 + "px", height: 753 + "px" }}></div><div class="slimScrollRail" style={{ width: 4 + "px", height: 100 + "%", position: "absolute", top: 0 + "px", display: "none", borderRadius: 0 + "px", background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: "90", right: 1 + "px" }}></div></div>
            
                </div>
            
        </aside>
        
    );
}

export default LefSide;