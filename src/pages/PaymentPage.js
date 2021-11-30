
import React from 'react';
import { makeStyles } from '@mui/styles';
import Page from '../components/Page';
import PropTypes from 'prop-types';
import {Container,Card,AppBar,Tabs,Tab,Box,Typography} from '@mui/material'
import THistory from '../components/_dashboard/payments/THistory'
import PayM from '../components/_dashboard/payments/PayM'

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
    marTop: {
      marginTop: theme.spacing(9),
    },
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };  

export default function PaymentPage() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Page title="Pay|Co-Exist">
      <Container>
      <Card className={classes.marTop}>
        <AppBar position="static" color='plain'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Pay Maintenance" />
            <Tab label="Transaction History" />
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PayM />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <THistory />
        </TabPanel>
      </Card>
      </Container>
    </Page>
  );
}
