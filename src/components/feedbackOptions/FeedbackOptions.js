import React from 'react';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup size="large" color="inherit">
        <Button
          type="button"
          name={options[0]}
          onClick={() => onLeaveFeedback(`${options[0]}`)}
        >
          Good
        </Button>
        <Button
          type="button"
          name={options[1]}
          onClick={() => onLeaveFeedback(`${options[1]}`)}
        >
          Neutral
        </Button>
        <Button
          type="button"
          name={options[2]}
          onClick={() => onLeaveFeedback(`${options[2]}`)}
        >
          Bad
        </Button>
      </ButtonGroup>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
