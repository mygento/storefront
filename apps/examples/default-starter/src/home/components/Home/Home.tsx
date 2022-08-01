import css from './Home.module.scss';
import Heart from 'assets/img/like.svg';

const Home = () => {
  return (
    <div className={css.root}>
      <p className={css.title}>Waiting for your feedback!</p>
      {/* This is how we import svgs */}
      <div className={css.hearts}>
        <div className={css.heart}>
          <Heart />
        </div>
        <div className={css.heart}>
          <Heart className={css.pretty} />
        </div>
        <div className={css.heart}>
          <Heart fill="white" />
        </div>
      </div>
    </div>
  );
};

export default Home;
