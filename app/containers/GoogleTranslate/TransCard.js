import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const styles = {
  card: {
    marginTop: 10,
    width: '48.5vw',
    boxShadow: 'none',
    border: '1px solid #dadce0',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    paddingBottom: 20,
    color: '#777',
  },
  black: {
    fontSize: 16,
    color: 'black',
  },
  type: {
    fontSize: 14,
    fontWeight: 500,
    color: '#4285f4',
    display: 'flex',
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
  },
  freq: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#777',
  },
  smallIcon: {
    height: 16,
    width: 16,
    paddingLeft: 4,
    marginBottom: -3,
  },
  name: {
    fontSize: 16,
    color: 'black',
    lineHeight: '200%',
  },
  table: {
    width: '100%',
  },
  mean: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.54)',
    paddingLeft: 30,
  },
  freqI: {
    backgroundColor: '#4285f4',
    borderRadius: 1,
    display: 'inline-block',
    height: 6,
    margin: '8px 1px 1px',
    width: 10,
  },
  empty: {
    backgroundColor: ' #dadce0',
    borderRadius: 1,
    display: 'inline-block',
    height: 6,
    margin: '8px 1px 1px',
    width: 10,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Bản dịch của
          <Typography className={classes.black} inline>
            &nbsp;
            {props.input}
          </Typography>
        </Typography>
        <div>
          {props.trans.map((obj, i) => (
            <div keys={i} style={{ marginBottom: 15 }}>
              <Typography className={classes.flex}>
                <Typography className={classes.type}>{obj.type}</Typography>
                <Typography className={classes.freq} inline>
                  Tần suất
                  <HelpOutlineIcon className={classes.smallIcon} />
                </Typography>
              </Typography>
              <Typography>
                <table className={classes.table}>
                  {obj.translate.map((u, i) => (
                    <tr>
                      <td className={classes.name}>{u.name}</td>
                      <td className={classes.meaning}>
                        {u.meaning.join(', ')}
                      </td>
                      <td>
                        <div className={classes.freqI} />
                        <div className={classes.empty} />
                        <div className={classes.empty} />
                      </td>
                    </tr>
                  ))}
                </table>
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
