import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Button from "@material-ui/core/Button";

const styles = {
  card: {
    marginTop: 10,
    width: "48.5vw",
    boxShadow: "none",
    border: "1px solid #dadce0",
    borderRadius: 8,
    marginLeft: 10
  },
  title: {
    fontSize: 16,
    paddingBottom: 20,
    color: "#777"
  },
  flex: {
    display: "flex"
  },
  text: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 10
  },
  count: {
    fontSize: 16,
    marginLeft: 20
  },
  hr: {
    marginLeft: -16,
    marginRight: -16,
    marginBottom: 14,
    border: "0.5px solid #dadce0"
  },
  a: {
    textDecoration: "none",
    textTransform: "none",
    color: "rgba(0,0,0,0.87)",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  last: {
    marginBottom: -12
  },
  btn: {
    padding: 0
  }
};

class ExCard extends React.Component {
  state = {
    data: [this.props.example[0]],
    click: false
  };

  handleClick() {
    this.setState({
      data: [this.props.example[0]],
      click: false
    });
  }

  handleClickOpen() {
    this.setState({
      data: this.props.example,
      click: true
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Ví dụ cho
            <Typography className={classes.black} inline>
              &nbsp;{this.props.input}
            </Typography>
          </Typography>
          <div>
            {this.state.data.map((arr, i) => (
              <div keys={i}>
                <div className={classes.flex}>
                  <FormatQuoteIcon />
                  <Typography className={classes.text}>{arr}</Typography>
                </div>
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
                    {" "}
                    Ít ví dụ hơn
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
                    {this.props.example.length - 1}&nbsp; ví dụ khác
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

ExCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExCard);
