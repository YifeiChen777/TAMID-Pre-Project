import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';


class ExecuteButton extends Component { 
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  render() {
    let button; 
    if (this.props.loading) {
      button = <CircularProgress/>
    }
    else {
      button  = 
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.handleClick}
            endIcon={<PlayArrowIcon/>}
          >
            Execute
          </Button>

    }
    return (
      
        <div>
          {button}
        </div>
    )
  }
}

export default ExecuteButton;
