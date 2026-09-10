import "./FriendList.css"


function FriendList ({friends = []}) {

    
    return (
      
       <ul className="friend-list">
{friends.map( ({id, isOnline, avatar, name}) => (
     <li className="itemF" key={id}>
  {/* <span className={`status ${isOnline ? 'online' : 'offline'} `}> Статус: {isOnline ? 'online' : 'offline'} </span> */}

   <span
            className={`status ${isOnline ? "online" : "offline"}`}
          ></span>
  <img className="avatarF" src={avatar} alt="User avatar" width="48" />
  <p className="nameF">{name}</p>
</li>
))}

</ul>
    )
}

export default FriendList