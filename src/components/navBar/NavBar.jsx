// import AdbIcon from "@mui/icons-material/Adb";
// import MenuIcon from "@mui/icons-material/Menu";
// import AppBar from "@mui/material/AppBar";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Toolbar from "@mui/material/Toolbar";
// import Tooltip from "@mui/material/Tooltip";
// import Typography from "@mui/material/Typography";
// import * as React from "react";

// const pages = ["Home", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container className="navbar_container" maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           ></Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//               className="mobile_menu_btn"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {/* {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))} */}

//               <ul className="permalinks">
//                 <li>
//                   <a href="#">Home</a>
//                 </li>
//                 <li>
//                   <a href="#about">About</a>
//                 </li>
//                 <li>
//                   <a href="#experience">Experience</a>
//                 </li>
//                 {/* <li><a href="#services">Services</a></li> */}
//                 <li>
//                   <a href="#portfolio">Portfolio</a>
//                 </li>
//                 <li>
//                   <a href="#testimonials">Testimonials</a>
//                 </li>
//                 <li>
//                   <a href="#contact">Contact</a>
//                 </li>
//               </ul>
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;

// import React from "react";
// import "./navbar.css";

// const NavBar = () => {
//   return (
//     <div className="container">
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <a class="navbar-brand" href="#">Hidden brand</a>
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">Link</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//               </li>
//             </ul>
//             <form class="d-flex">
//               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//               <button class="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;
