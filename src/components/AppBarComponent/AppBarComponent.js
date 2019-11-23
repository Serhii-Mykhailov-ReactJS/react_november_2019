// Core
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import cx from 'classnames';
import { Link, NavLink } from 'react-router-dom';
// UI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
// Icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
// Engine
import { routing } from '../../engine/config/routes/routing';
// Styles
import { useStyles } from './AppBarComponentStyles';

function AppBarComponent(props) {
  const { children, title } = props;
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  function handleDrawerOpen() {
    setIsOpen(true);
  }

  function handleDrawerClose() {
    setIsOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={cx(classes.appBar, { [classes.appBarShift]: isOpen })}>
        <Toolbar>
          <IconButton onClick={handleDrawerOpen} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: cx(classes.drawerPaper, { [classes.drawerPaperClose]: !isOpen }),
        }}
        open={isOpen}
        variant="permanent"
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <Link to={routing.home}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
            </Link>
            <NavLink to={routing.home}>
              <ListItemText primary="Home" />
            </NavLink>
          </ListItem>
          <ListItem button>
            <Link to={routing.about}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
            </Link>
            <NavLink to={routing.about}>
              <ListItemText primary="About" />
            </NavLink>
          </ListItem>
          <ListItem button>
            <Link to={routing.todos}>
              <ListItemIcon>
                <CheckBoxIcon />
              </ListItemIcon>
            </Link>
            <NavLink to={routing.todos}>
              <ListItemText primary="Todo" />
            </NavLink>
          </ListItem>
        </List>
        <Divider />
        <List>
          <div>
            <ListSubheader inset>Saved reports</ListSubheader>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Current month" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Last quarter" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Year-end sale" />
            </ListItem>
          </div>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
      </main>
    </div>
  );
}

AppBarComponent.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

AppBarComponent.defaultProps = {
  title: '',
};

export default AppBarComponent;
