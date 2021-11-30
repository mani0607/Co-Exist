import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
// material
import { Box, Container } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

const useStyles = makeStyles((theme) => ({
  marRight: {
    marginRight: theme.spacing(15),
  },
}));

export default function Logo({ sx }) {
  const classes = useStyles();
  return <Container><Box component="img" src="/coexist.png" sx={{ width: 160, height: 55, ...sx }} className={classes.marRight}/> </Container>;
}
