import userData from './userData.json';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div>
      <h1>Social Media Dashboard</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;
