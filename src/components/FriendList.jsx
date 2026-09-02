function FriendList ({friends = []}) {

    
    return (
      
       <ul className="friend-list">
{friends.map( ({id, isOnline, avatar, name}) => (
     <li className="item" key={id}>
  <span className={`status ${isOnline ? 'online' : 'offline'} `}> Статус: {isOnline ? 'online' : 'offline'} </span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
))}

</ul>
    )
}

export default FriendList