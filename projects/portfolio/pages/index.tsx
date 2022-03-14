import type { NextPage } from 'next';
import { ToggleDarkMode } from '../layoutContext';

const Home: NextPage = () => {
  return (
    <>
      <h2>Home</h2>;
      <ToggleDarkMode />
    </>
  );
};

export default Home;
