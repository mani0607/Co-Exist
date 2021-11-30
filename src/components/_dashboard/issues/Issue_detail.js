
import { Button, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { Box, Container, Typography, Card, TextField } from '@mui/material';
import Stack from '@mui/material/Stack'
import CommentSection from '../../comment'
import StatusHistorySection from '../../status_history'
import Page from '../../Page';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';



IssueDetail.propTypes = {
    open : PropTypes.bool,
    onModalClose: PropTypes.func
  };

export default function IssueDetail({open, onModalClose})
{
    return (
      <Modal
      dimmer="blurring"
      open={open}
      >

      <Modal.Header>Issue Detail</Modal.Header>
      <Modal.Content scrolling>

        <Modal.Description>
            <Stack direction="row" spacing={1}>
            <Stack direction="column" spacing={5}>
                <Stack direction="column" spacing={1}>
                    <Stack direction="row" alignItems="left" spacing={1}>
                        <Typography variant="subtitle1"> IssueID: </Typography>
                        <Typography variant="body3"> 12345 </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="left" spacing={1}>
                        <Typography variant="subtitle1"> Reporter: </Typography>
                        <Typography variant="body3"> Manikandan </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="left" spacing={1}>
                        <Typography variant="subtitle1"> Created: </Typography>
                        <Typography variant="body3"> 05-Jan-2021 </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="left" spacing={1}>
                        <Typography variant="subtitle1"> Title: </Typography>
                        <Typography variant="body3"> Boar Issue </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="left" spacing={1}>
                        <Typography variant="subtitle1"> Description: </Typography>
                        <Typography variant="body3"> Boar near second gate is not working. The maximum size limit for file upload is 2 megabytes. All files bigger than 500k will be formatted to a new window for performance reason and to prevent your browser from being unresponsive </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="left" spacing={1}>
                        <Typography variant="subtitle1"> Status: </Typography>
                        <Typography variant="body3"> Pending </Typography>
                    </Stack>
                </Stack>
                <Box />
                <StatusHistorySection />
                
            </Stack>

                <Box sx={{ flexGrow: 1 }} />
                <Container>
                <CommentSection />
                </Container>
                
            </Stack>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onModalClose} primary>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
    );

}


