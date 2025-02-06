import "./Topbar.css"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Topbar() {
    return(
    <div className="topbar-container">
        <div className = "return"><ArrowBackIcon/></div>
        <div className ="page-name">CNSocial</div>
        <div className = "right-topbar">
            <div className = "profile"><AccountBoxIcon/></div>
            <div className="worldmap"><TravelExploreIcon/></div>
        </div>

    </div>
    )
}