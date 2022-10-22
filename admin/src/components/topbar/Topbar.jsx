import React from 'react'
import "./topbar.css";
import { LanguageOutlined, Settings, NotificationsActive } from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">FoodVerse Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsActive />
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
