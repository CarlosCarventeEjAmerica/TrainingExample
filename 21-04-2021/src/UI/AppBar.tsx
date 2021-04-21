import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withRouter , RouteComponentProps} from 'react-router';
// import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface Props extends RouteComponentProps{

}

const MyAppBar = ( props: Props ) => {
  const classes = useStyles();
  console.log('MyAppBar: ', props);

  const homeButtonClickerHandler = () => {
      console.log('Home click handler')
      props.history.push({pathname: '/'});
  }
  const adminButtonClickerHandler = () => {
    console.log('Admin click handler')
    props.history.push({pathname: '/admin'})
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Application
          </Typography>
          <Button color="inherit" onClick={homeButtonClickerHandler}>Home</Button>
          <Button color="inherit" onClick={adminButtonClickerHandler}>Admin</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MyAppBar);