import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    marginTop: 10,
    width: "48.5vw",
    boxShadow: "none",
    border: "1px solid #dadce0",
    borderRadius: 8
  },
  title: {
    fontSize: 16,
    paddingBottom: 20,
    color: "#777"
  },
  black: {
    fontSize: 16,
    color: "black"
  },
  type: {
    fontSize: 14,
    fontWeight: 500,
    color: "#4285f4"
  },
  num1: {
    marginTop: 10,
    marginRight: 25,
    border: "1px solid rgb(218, 220, 224)",
    borderRadius: 50,
    padding: 5,
    color: "#777",
    lineHeight: "50%",
    width: 8,
    height: 8
  },
  meaning: {
    marginTop: 8,
    fontSize: 16,
    color: "black",
    lineHeight: "120%"
  },
  exam: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
    color: "rgba(0,0,0,0.54)"
  },
  flex: {
    display: "flex"
  },
  sym: {
    color: "rgba(0,0,0,0.54)",
    fontSize: 14
  },
  syms: {
    border: "1px solid rgb(218, 220, 224)",
    borderRadius: 32,
    lineHeight: "24px",
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 4,
    marginBottom: 4,
    display: "inline-block"
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Nghĩa của
          <Typography className={classes.black} inline>
            &nbsp;{props.input}
          </Typography>
        </Typography>
        <div>
          {props.meaning.map((obj, i) => (
            <div keys={i} style={{ marginBottom: 15 }}>
              <Typography className={classes.type}>{obj.type}</Typography>
              <div className={classes.flex}>
                <div className={classes.num1}>{i + 1}</div>
                <div>
                  <Typography className={classes.meaning}>
                    {obj.meaning}
                  </Typography>
                  <Typography className={classes.exam}>
                    {obj.example}
                  </Typography>
                  <Typography className={classes.exam}>
                    Từ Đồng Nghĩa:
                  </Typography>
                  <Typography className={classes.sym}>
                    {obj.syms.map((u, i) => (
                      <span keys={i} className={classes.syms}>
                        {u}
                      </span>
                    ))}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
