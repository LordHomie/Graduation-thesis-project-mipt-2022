import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes["header_heading"]}>
        Graph Theory Application for <span>Traffic</span> <span>Light</span>{" "}
        <span>Control</span> at Crossroads
      </h1>
    </header>
  );
};

export default Header;
