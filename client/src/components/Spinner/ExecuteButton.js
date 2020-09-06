import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

class ExecuteButton extends Component { 
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div>
          <Button
            variant="contained"
            color="primary"
            endIcon={<PlayArrowIcon/>}
          >
            Execute
          </Button>
            
        </div>
    )
  }
}

export default ExecuteButton;