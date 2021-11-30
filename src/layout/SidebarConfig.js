import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import creditFill from '@iconify/icons-eva/credit-card-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import pieFill from '@iconify/icons-eva/pie-chart-2-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'residents',
    path: '/dashboard/residents',
    icon: getIcon(peopleFill)
  },
  {
    title: 'pay',
    path: '/dashboard/pay',
    icon: getIcon(creditFill)
  },
  {
    title: 'issue tracker',
    path: '/dashboard/complaints',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'schedule',
    path: '/dashboard/schedule',
    icon: getIcon(lockFill)
  },
  {
    title: 'polls',
    path: '/dashboard/polls',
    icon: getIcon(pieFill)
  },
  {
    title: 'notice',
    path: '/dashboard/notice',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
