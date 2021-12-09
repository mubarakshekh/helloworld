import classes from "./Layout.module.css";

function Layout(props: any) {
  return <div className={classes.wrapper}>{props.children}</div>;
}

export default Layout;
