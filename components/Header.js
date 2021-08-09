import headerStyles from '../styles/Header.module.css';
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> New
      </h1>
      <p className={headerStyles.description}>
        Keept up the up to date with the latest news
      </p>
    </div>
  );
};

export default Header;
