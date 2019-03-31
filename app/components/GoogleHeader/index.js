import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import './HeaderBar.css';
import DatAvarta from 'images/Dat.jpg';
const styles = theme => ({
  googleTitle: {
    '&:before': {
      content:
        'url("https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg")',
      display: 'inline-block',
      height: 24,
      width: 74,
      paddingTop: 8,
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    boxShadow: '0px 1px rgba(0, 0, 0, 0.12)',
  },
  sideListTitle: {
    display: 'flex',
    paddingLeft: 24,
    paddingTop: 8,
  },
  grow: {
    flexGrow: 1,
  },
  trans: {
    marginLeft: 8,
    fontFamily: 'Arial, sans-serif',
    color: '#777',
    fontSize: 22,
    fontWeight: '400',
  },
  menuBtn: {
    marginLeft: -12,
    marginRight: 20,
  },
  avatar: {
    height: 32,
    width: 32,
  },
  avatarBtn: {
    marginRight: -16,
    marginLeft: -4,
  },
  list: {
    width: 280,
  },
  listText: {
    fontSize: 13,
    paddingLeft: 32,
  },
});

class HeaderBar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = left => () => {
    this.setState({
      left,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <div className={classes.sideListTitle}>
          <a href="localhost:3000">
            <span className={classes.googleTitle} />
          </a>
          <a className={classes.grow} href="localhost:3000">
            <Typography variant="h6" className={classes.trans}>
              Dịch
            </Typography>
          </a>
        </div>
        <List>
          {['Giới thiệu về Google Dịch', 'Cộng đồng'].map(text => (
            <ListItem button key={text}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            'Bảo mật và điều khoản',
            'Trợ giúp',
            'Gửi phản hồi',
            'Giới thiệu về Google',
            ,
          ].map(text => (
            <ListItem button key={text}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <AppBar position="static" classes={{ root: classes.root }}>
          <Toolbar>
            <IconButton
              className={classes.menuBtn}
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
              <div
                role="button"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
              >
                {sideList}
              </div>
            </Drawer>
            <a href="localhost:3000">
              <span className={classes.googleTitle} />
            </a>
            <a className={classes.grow}>
              <Typography variant="h6" className={classes.trans}>
                Dịch
              </Typography>
            </a>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton className={classes.avatarBtn}>
              <Avatar
                alt="Dat Luong Duc Tuan"
                src={DatAvarta}
                className={classes.avatar}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);
