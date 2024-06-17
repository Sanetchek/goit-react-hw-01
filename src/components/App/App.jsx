import css from './App.module.css';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import userData from '../../userData.json';
import friends from '../../friends.json';

function App() {
  return (
    <>
      <section className={css.container}>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </section>

      <FriendList friends={friends} />
    </>
  );
}

export default App;
