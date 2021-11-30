import React, {useState} from 'react';
import {Container,Card} from '@mui/material';
import Page from '../components/Page';
import { makeStyles } from '@mui/styles';
import { EditingState, ViewState, IntegratedEditing } from '@devexpress/dx-react-scheduler'; 
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  Toolbar,
  DateNavigator,
  TodayButton
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = new Date().toISOString().slice(0, 10);
const schedulerData = [
  { id: 1, startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: "In November this year, it'll be a decade since Umesh Yadav made his Test debut. R Ashwin and Ishant Sharma were part of that attack, so there's a bit of familiarity and continuity there. But in the milieu in which Yadav operates, of Indian fast bowling, it's two different worlds." },
  { id: 2, startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

const useStyles = makeStyles((theme) => ({
  marTop: {
    marginTop: theme.spacing(9),
  },
}));

export default function SchedulerPage() 
{
    const classes = useStyles();
    const [data,setData] = useState(schedulerData);
    const commitChanges = ({ added, changed, deleted }) => {
        let newData = [];
        if (added) {
          const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
          newData = [...data, { id: startingAddedId, ...added }];
        }
        if (changed) {
          newData = data.map(appointment => (
            changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        }
        if (deleted !== undefined) {
          newData = data.filter(appointment => appointment.id !== deleted);
        }
        setData(newData);
      }

    return(
      <Page title="Facility Booking">
      <Container>
      <Card className={classes.marTop}>
          <Scheduler
            data={data}
          >
            <ViewState
              defaultCurrentDate={currentDate}
            />

            <EditingState
                onCommitChanges={commitChanges}
              />
            <IntegratedEditing />

            <WeekView
              startDayHour={6}
              endDayHour={22}
            />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
            <AppointmentTooltip 
            showOpenButton
            showDeleteButton
            />
            <AppointmentForm />

          </Scheduler>
        </Card>
        </Container>
        </Page>
  );
}