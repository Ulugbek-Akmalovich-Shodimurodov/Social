import { Chat, Notifications, Person, Search } from '@material-ui/icons'
import './topbar.css'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLift">
            <span className="logo">
                Ulug'bek
            </span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <Search className="searchIcon"/>
                <input type="search" className="searchInput" placeholder="Search for friend, post or video" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Home Page</span>
                <span className="topbarLink">Time line</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/userIcon.png" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
