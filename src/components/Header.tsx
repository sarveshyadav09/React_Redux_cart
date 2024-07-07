import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Fade } from "@mui/material";
import {  useSelector } from "react-redux";
import { RootState } from "../redux/reducers/main";
  


const Header = () => {

  // const getData = useSelector((state: RootState) => state.cart.cart);
  // console.log(getData);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="fixed-top"
        style={{ height: "50px" }}
      >
        <Container>
          <NavLink to={"/"} className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light ">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={4}
            color="primary"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
        <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem",padding:10,position:"relative"}}>
          <i onClick={handleClose} className="fas fa-close smallclose" style={{position:"absolute",top:2,right:15,fontSize:23,cursor:"pointer"}}></i>
          <p style={{fontSize:22}}>Your Card is Empty</p>
          <img src="./cart.gif" alt="" className="emptycart_img" style={{width:"5rem", padding:10}}></img>
        </div>
        </Menu>
      </Navbar>
    </>
  );
};
export default Header;
