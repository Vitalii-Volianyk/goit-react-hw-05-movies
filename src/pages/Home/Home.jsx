import css from './Home.module.css';
import API from 'services/api';
const Home = () => {
  API.getTrending().then(res => console.log(res.json()));
  return <div></div>;
};

export default Home;
