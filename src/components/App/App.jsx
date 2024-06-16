import css from './App.module.css';
import Profile from '../Profile/Profile';
import userData from '../../userData.json';

function App() {
  return (
    <section className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </section>
  );
}

export default App;
