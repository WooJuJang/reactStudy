import type { NextPage } from 'next';
import LikeButton from './LikeButton';
import TimesTable from './TimesTable';

const Home: NextPage = () => {
  return (
    <div>
      <LikeButton />
      <TimesTable />
    </div>
  );
};

export default Home;
