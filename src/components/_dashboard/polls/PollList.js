import React from 'react';
// material
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Radio,
  Typography
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import Scrollbar from '../components/Scrollbar';

import POLLS from '../../../_mocks_/polls';

// ----------------------------------------------

const useStyles = makeStyles((theme) => ({
  marTop: {
    marginTop: theme.spacing(9),
  },
  marLeft: {
    marginLeft: theme.spacing(3),
  },
  marBottom: {
    marginBottom: theme.spacing(1),
  },
  borderDesign: {
    borderStyle: 'solid', 
    borderColor: theme.palette.primary.lighter,
    borderWidth: '1px'
  }
}));

function Option()
{
  return(

    <Stack direction="row" alignItems="center">
      <Radio size="small"/>
      <Typography m={0} variant="body2"> Option1 </Typography>
    </Stack>

  );
}

function Poll(props) {
  const { obj, ...other } = props;
  const classes = useStyles();

  return(
   
    <Card className={classes.borderDesign}>
    <Container>
    <Stack direction="column" alignItems="left" spacing={1}>

    <Typography m={0} variant="h6"> Option2 </Typography>

    <Stack direction="column" alignItems="left">

      

    </Stack>

    <Stack direction="row" alignItems="center">
    <Button variant="outlined" className={classes.marBottom}> Submit </Button>
    <Box sx={{ flexGrow: 1 }} />
    </Stack>

    </Stack>
    </Container>
    </Card>

  );
}

export default function PollList()
{

    return(
            <Scrollbar>
              <Stack direction="column" alignItems="left" spacing={5}>
              {POLLS.map((pollentity) => {
                  <Poll obj={pollentity}/>
              })}
              </Stack>
            </Scrollbar>    
    );
}