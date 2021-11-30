import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layout';
import ResidentsPage from './pages/ResidentsPage';
import PaymentPage from './pages/PaymentPage';
import SchedulerPage from './pages/SchedulerPage'
import IssuePage from './pages/IssuePage';
import PollPage from './pages/PollPage';

// ----------------------------------------------------------------------

export default function RouteTeller() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="/dashboard/residents" replace /> },
        { path: 'residents', element: <ResidentsPage /> },
        { path: 'pay', element: <PaymentPage /> },
        { path: 'complaints', element: <IssuePage /> },
        { path: 'schedule', element: <SchedulerPage /> },
        { path: 'polls', element: <PollPage /> },
        { path: 'notice', element: <ResidentsPage /> },
      ]
    },
    { path: '/404', element: <Navigate to="/404" replace /> },
    { path: '*', element: <Navigate to="/dashboard/residents" replace /> }
  ]);
}
