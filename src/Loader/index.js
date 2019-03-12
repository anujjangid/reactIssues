import React from 'react';
import { Loading } from '../Components/styleComponent';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Loader() {
  return (
    <Loading>
      <LinearProgress />
    </Loading>
  );
}

export default withStyles(styles)(Loader);
