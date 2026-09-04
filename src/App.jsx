import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json"
import "./App.css";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory"
import "./components/"
function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>

      <div>
        <FriendList friends={friends} />
      </div>
   

    <div>
     <TransactionHistory items={transactions} />
    </div>
     </>
  );
}

export default App;
