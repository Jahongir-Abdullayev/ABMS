import { IconButton } from "@material-ui/core";
import { Menu } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
// import logo from "../../../../public/images/logo.svg";
import cls from "./Burger.module.scss";
import WeekendIcon from '@mui/icons-material/Weekend';
import BackburgerIcon from "@icons/material/BackburgerIcon";
import MenuIcon from "@icons/material/MenuIcon";
import logo from '../../../../public/images/black-logo1.png'


export default function BurgerMenu({ data, className }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List sx={{ padding: "4px 8px" }}>
        <ListItem className={cls.menuItems}>
          <Link href={"/"} className={cls.menuButtons} passHref>
            <Image alt="soliq logo" src={logo} style={{ cursor: "pointer" }} />
          
          </Link>
        </ListItem>

        {data?.map((text, index) => (
          <ListItem key={text} className={cls.menuItems}>
            <ListItemButton className={cls.menuButtons}>
              <Link href={text.href} passHref>
                <ListItemText primary={text?.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={cls.burgerMenu}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            onClick={toggleDrawer(anchor, true)}
            className={className}>
            <Menu />
          </MenuIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
