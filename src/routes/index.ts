import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';
import DumbbellIcon from '@mui/icons-material/FitnessCenter'
import FoodIcon from '@mui/icons-material/Restaurant'
import StoryIcon from '@mui/icons-material/AutoStories'

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Workout Plan',
    icon: DumbbellIcon,
  },
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/pages/Page1')),
    path: '/page-1',
    title: 'Diet Plan',
    icon: FoodIcon,
  },
  [Pages.Page2]: {
    component: asyncComponentLoader(() => import('@/pages/Page2')),
    path: '/page-2',
    title: 'Lifting Journey',
    icon: StoryIcon,
  },
  // [Pages.Page3]: {
  //   component: asyncComponentLoader(() => import('@/pages/Page3')),
  //   path: '/page-3',
  //   title: 'Page 3',
  //   icon: TerrainIcon,
  // },
  // [Pages.Page4]: {
  //   component: asyncComponentLoader(() => import('@/pages/Page4')),
  //   path: '/page-4',
  //   title: 'Page 4',
  //   icon: BugReportIcon,
  // },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
