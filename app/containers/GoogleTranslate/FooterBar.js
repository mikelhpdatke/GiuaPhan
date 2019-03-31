import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import HistoryIcon from '@material-ui/icons/History';
import PeopleIcon from '@material-ui/icons/People';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    boxShadow: 'none',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  flex1: {
    flexGrow: 1,
  },
  iconBt: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: 18,
    marginLeft: 30,
    marginRight: 30,
  },
  p: {
    textAlign: 'center',
    paddingLeft: 10,
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: '50%',
    color: '#777',
  },
});

function FooterBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" classes={{ root: classes.root }}>
        <Toolbar>
          <span>
            <IconButton className={classes.iconBt}>
              <HistoryIcon fontSize="large" />
            </IconButton>
            <p className={classes.p}>Lịch sử</p>
          </span>
          <span>
            <IconButton className={classes.iconBt}>
              <StarIcon fontSize="large" />
            </IconButton>
            <p className={classes.p}>Đã lưu</p>
          </span>
          <span>
            <IconButton className={classes.iconBt}>
              <PeopleIcon fontSize="large" />
            </IconButton>
            <p className={classes.p}>Cộng đồng</p>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterBar);
