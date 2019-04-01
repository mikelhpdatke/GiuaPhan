import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    marginTop: 10,
    width: '48.5vw',
    boxShadow: 'none',
    border: '1px solid #dadce0',
    borderRadius: 8,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    paddingBottom: 20,
    color: '#777',
  },
  flex: {
    display: 'flex',
  },
  type: {
    fontSize: 14,
    fontWeight: 500,
    color: '#4285f4',
  },
  sym: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 14,
    marginTop: 14,
    marginBottom: 26,
  },
  syms: {
    border: '1px solid rgb(218, 220, 224)',
    borderRadius: 32,
    lineHeight: '24px',
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 4,
    marginBottom: 4,
    display: 'inline-block',
  },
  count: {
    fontSize: 16,
    marginLeft: 20,
  },
  hr: {
    marginLeft: -16,
    marginRight: -16,
    marginBottom: 14,
    border: '0.5px solid #dadce0',
  },
  a: {
    textDecoration: 'none',
    textTransform: 'none',
    color: 'rgba(0,0,0,0.87)',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  last: {
    marginBottom: -12,
  },
  iconbt: {
    padding: 0,
  },
};

class SymsCard extends React.Component {
  state = {
    click: false,
    data: this.props.smallsyms,
  };

  handleClick() {
    this.setState({
      click: false,
      data: this.props.smallsyms,
    });
  }

  handleClickOpen() {
    this.setState({
      click: true,
      data: this.props.syms,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Từ đồng nghĩa của
            <Typography className={classes.black} inline>
              &nbsp;
              {this.props.input}
            </Typography>
          </Typography>
          <div>
            {this.state.data.map((obj, i) => (
              <div>
                <Typography className={classes.type}>{obj.type}</Typography>
                <Typography className={classes.sym}>
                  {obj.sym.map((u, i) => (
                    <span keys={i} className={classes.syms}>
                      {u}
                    </span>
                  ))}
                </Typography>
              </div>
            ))}
          </div>
          <hr className={classes.hr} />
          <div className={classes.flex}>
            {this.state.click ? (
              <Button
                className={classes.btn}
                onClick={this.handleClick.bind(this)}
              >
                <KeyboardArrowUpIcon />
                <Typography className={classes.count}>
                  <a href="localhost:3000" className={classes.a}>
                    Ít từ đồng nghĩa hơn
                  </a>
                </Typography>
              </Button>
            ) : (
              <Button
                className={classes.btn}
                onClick={this.handleClickOpen.bind(this)}
              >
                <KeyboardArrowDownIcon />
                <Typography className={classes.count}>
                  <a href="localhost:3000" className={classes.a}>
                    &nbsp; từ đồng nghĩa khác
                  </a>
                </Typography>
              </Button>
            )}
          </div>
          <div className={classes.last} />
        </CardContent>
      </Card>
    );
  }
}

SymsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SymsCard);
