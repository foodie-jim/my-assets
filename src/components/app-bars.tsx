import React, { ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LockIcon from '@material-ui/icons/Lock';
import MenuIcon from '@material-ui/icons/Menu';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const drawerWidth = 240;

const menuItems = [
  {
    key: uuidv4(),
    text: 'Exchange Rates',
    icon: <MonetizationOnIcon color="secondary" fontSize="large" />,
    path: '/exchange-rates',
  },
  {
    key: uuidv4(),
    text: 'Encrypted Currency',
    icon: <LockIcon color="secondary" fontSize="large" />,
    path: '/encrypted-currency',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      background: '#f9f9f9',
    },
    pageOpen: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    pageClose: {
      width: `calc(100% - ${theme.spacing(7) + 1}px)`,
      marginLeft: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${theme.spacing(9) + 1}px)`,
        marginLeft: theme.spacing(9) + 1,
      },
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    active: {
      background: '#f4f4f4',
    },
    appBar: {
      width: '100%',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
  })
);

interface AppLayoutProps {
  children: ReactNode;
}

// TODO next.js redux 사용해서 Layout menu button open 값을 state 관리해보기
// https://www.youtube.com/watch?v=MR43-gYVQbI

const AppBars = ({ children }: AppLayoutProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography>my-assets</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
          {menuItems.map((item) => (
            <Link key={item.key} href={item.path}>
              <ListItem button key={item.text} className={router.pathname === item.path ? classes.active : undefined}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <div
        className={clsx(classes.page, {
          [classes.pageOpen]: open,
          [classes.pageClose]: !open,
        })}
      >
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default AppBars;
