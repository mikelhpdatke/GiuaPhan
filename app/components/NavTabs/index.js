import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: -90,
    marginLeft: 10,
    marginRight: 10,
  },
  appbar: {
    border: '1px solid #dadce0',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    background: 'white',
    boxShadow: 'none',
    height: 46,
  },
  flex: {
    display: 'flex',
  },
  tabs: {
    flexBasis: '48vw',
  },
  tabsIndicator: {
    backgroundColor: 'rgb(66, 133, 244)',
    height: 3,
  },
  tab: {
    fontSize: 14,
    fontWeight: 500,
    minWidth: 54,
    minHeight: 46,
  },
  tabSelected: {
    color: 'rgb(66, 133, 244)',
  },
  bt: {
    flexBasis: '3vw',
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value1: 0,
    value2: 0,
  };

  handleChange1 = (event, value1) => {
    this.setState({ value1 });
  };

  handleChange2 = (event, value2) => {
    this.setState({ value2 });
  };

  render() {
    const { classes } = this.props;
    const { value1, value2 } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appbar}>
          <div className={classes.flex}>
            <Tabs
              value={value1}
              onChange={this.handleChange1}
              scrollButtons="auto"
              classes={{ root: classes.tabs, indicator: classes.tabsIndicator }}
            >
              <Tab
                label="PHÁT HIỆN NGÔN NGỮ"
                styles="marginLeft: -30px"
                classes={{ root: classes.tab, selected: classes.tabSelected }}
              />
              <Tab
                label="TIẾNG ANH"
                classes={{ root: classes.tab, selected: classes.tabSelected }}
              />
              <Tab
                label="TIẾNG VIỆT"
                classes={{ root: classes.tab, selected: classes.tabSelected }}
              />
              <Tab
                label="TIẾNG PHÁP"
                classes={{ root: classes.tab, selected: classes.tabSelected }}
              />
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Tabs>
            <IconButton className={classes.bt}>
              <CompareArrowsIcon />
            </IconButton>
            <Tabs
              value={value2}
              onChange={this.handleChange2}
              scrollButtons="auto"
              classes={{ root: classes.tabs, indicator: classes.tabsIndicator }}
            >
              <Tab
                label="TIẾNG VIỆT"
                classes={{ root: classes.tab, selected: classes.tabSelected }}
              />
              <Tab
                label="TIẾNG ANH"
                classes={{ root: classes.tab, selected: classes.tabSelected }}
              />
              <Tab
                label="TIẾNG TRUNG (GIẢN THỂ)"
                classes={{ root: classes.tab, selected: classes.tabSelected }}
              />
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Tabs>
          </div>
        </AppBar>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
