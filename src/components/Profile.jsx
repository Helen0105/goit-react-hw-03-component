import { BsEmojiHeartEyes } from "react-icons/bs";
import { CgPin } from "react-icons/cg";
import { BsChatLeftHeart } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FcLike } from "react-icons/fc";


function Profile({ username, tag, location, avatar, stats = {} }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={`Avatar of ${username}`} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location"> <CgPin /> {location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label"> <MdOutlinePeopleAlt /> Followers: </span>
          <span className="quantity"> {stats.followers || 0}</span>
        </li>
        <li>
          <span className="label"><IoMdEye /> Views: </span>
          <span className="quantity">{stats.views || 0}</span>
        </li>
        <li>
          <span className="label"> <FcLike /> Likes: </span>
          <span className="quantity">{stats.likes || 0}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;