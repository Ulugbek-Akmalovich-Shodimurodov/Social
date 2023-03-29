import './sidebar.css'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sitebarListItem">
              <RssFeed className="sidebarIcon "/>
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sitebarListItem">
              <Chat className="sidebarIcon "/>
              <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sitebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon "/>
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sitebarListItem">
              <Group className="sidebarIcon "/>
              <span className="sidebarListItemText">Group</span>
            </li>
            <li className="sitebarListItem">
              <Bookmark className="sidebarIcon "/>
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sitebarListItem">
              <HelpOutline className="sidebarIcon "/>
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sitebarListItem">
              <WorkOutline className="sidebarIcon "/>
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sitebarListItem">
              <Event className="sidebarIcon "/>
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sitebarListItem">
              <School className="sidebarIcon "/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/userIcon.png" alt="" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/userIcon.png" alt="" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/userIcon.png" alt="" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/userIcon.png" alt="" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/userIcon.png" alt="" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/userIcon.png" alt="" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/userIcon.png" alt="" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>

          </ul>
        </div>
    </div>
  )
}
