import React, { ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const menuItems = [
  {
    text: 'Exchange Rates',
    icon: <MonetizationOnIcon color="secondary" />,
    path: '/exchange-rates',
  },
  {
    text: 'Encrypted Currency',
    icon: <LockIcon color="secondary" />,
    path: '/encrypted-currency',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      background: '#f9f9f9',
      width: `calc(100% - ${drawerWidth}px)`,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
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
    toolbar: theme.mixins.toolbar,
  })
);

interface AppLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: AppLayoutProps) => {
  const classes = useStyles();
  const router = useRouter();
  const open = true;

  return (
    <div>
      <AppBar className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
        <Toolbar>
          <Typography>my-assets</Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper }}>
        <List>
          {menuItems.map((item) => (
            <Link href={item.path}>
              <ListItem button key={item.text} className={router.pathname === item.path ? classes.active : undefined}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
