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
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';


import ISSUES from '../_mocks_/issues';

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


export default function PollPage()
{

    const classes = useStyles();

    return(
      <div>
      <Page title="Polls|Co-Exist">
      <Container>
        <Card className={classes.marTop} style={{ boxShadow: "none" }}>
            <Scrollbar>
              <Stack direction="column" alignItems="left" spacing={5}>
              <Card className={classes.borderDesign}>
                <Container>
                <Stack direction="column" alignItems="left" spacing={1}>
                <Typography m={0} variant="h6"> Option2 </Typography>
                <Stack direction="column" alignItems="left">
                <Stack direction="row" alignItems="center">
                  <Radio size="small"/>
                  <Typography m={0} variant="body2"> Option1 </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Radio size="small"/>
                  <Typography m={0} variant="body2"> Option2 </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Radio size="small"/>
                  <Typography m={0} variant="body2"> Option2 </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                <Button variant="outlined" className={classes.marBottom}> Submit </Button>
                <Box sx={{ flexGrow: 1 }} />
                </Stack>
                </Stack>
                </Stack>
                </Container>
              </Card>
              <Card className={classes.borderDesign}>
                <Container>
                <Stack direction="column" alignItems="left" spacing={1}>
                <Typography m={0} variant="h6"> Option2 </Typography>
                <Stack direction="column" alignItems="left">
                <Stack direction="row" alignItems="center">
                  <Radio size="small"/>
                  <Typography m={0} variant="body2"> Option1 </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Radio size="small"/>
                  <Typography m={0} variant="body2"> Option2 </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Radio size="small"/>
                  <Typography m={0} variant="body2"> Option2 </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                <Button variant="outlined" className={classes.marBottom}> Submit </Button>
                <Box sx={{ flexGrow: 1 }} />
                </Stack>
                </Stack>
                </Stack>
                </Container>
              </Card>
              </Stack>
            </Scrollbar>    
        </Card>
      </Container>
      </Page>
      </div>
    );
}