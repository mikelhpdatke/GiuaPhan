import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import MicIcon from '@material-ui/icons/Mic';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ShareIcon from '@material-ui/icons/Share';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
const styles = theme => ({
  root: {
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
  },

  left: {
    border: '1px solid #dadce0',
    borderTopStyle: 'hidden',
    borderRightStyle: 'hidden',
    borderBottomLeftRadius: '8px',
    flexBasis: '49.5vw',
    overflow: 'auto',
  },

  right: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #dadce0',
    borderTopStyle: 'hidden',
    borderLeftStyle: 'hidden',
    borderBottomRightRadius: '8px',
    flexBasis: '49.5vw',
    overflow: 'auto',
  },

  flex: {
    display: 'flex',
  },

  flex1: {
    flexGrow: '1',
  },

  p: {
    color: '#777',
    fontSize: '12px',
    fontFamily: 'Roboto',
    lineHeight: '220%',
  },
});

function ActionTextArea(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <span className={classNames(classes.left, classes.flex1)}>
        <div className={classNames(classes.flex, classes.flex1)}>
          <IconButton>
            <MicIcon />
          </IconButton>
          <IconButton>
            <VolumeUpIcon />
          </IconButton>
          <Typography className={classes.flex1} />
          <p className={classes.p}>
            {props.count}
            /5000
          </p>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
        </div>
      </span>
      <span className={classNames(classes.right, classes.flex1)}>
        <div className={classNames(classes.flex, classes.flex1)}>
          <IconButton>
            <MicIcon />
          </IconButton>
          <Typography className={classes.flex1} />
          <IconButton>
            <FilterNoneIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </div>
      </span>
    </div>
  );
}

export default withStyles(styles)(ActionTextArea);
