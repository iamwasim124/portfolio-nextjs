import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Container,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../../theme";

const HeaderComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure header height
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle drawer
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Contact Us", href: "#contact" },
  ];

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton component="a" href={link.href}>
              <Typography
                variant="h6"
                fontWeight={700}
                color={theme.palette.custom.orange}
              >
                {link.title}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scrolling down → hide
      } else {
        setShowHeader(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header */}
      <AppBar
        ref={headerRef}
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          minHeight: "80px",
          justifyContent: "center",
          backgroundColor: theme.palette.custom.grey,
          top: showHeader ? 0 : `-${headerHeight}px`, // dynamic height
          transition: "top 0.3s ease-in-out",
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between", px: 0 }}>
            {/* Brand / Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.custom.orange,
                  cursor: "pointer",
                }}
              >
                MagicWeb{" "}
                <span style={{ color: theme.palette.custom.white }}>
                  Designs
                </span>
              </Typography>
            </Link>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  href={link.href}
                  variant="text"
                  sx={{
                    position: "relative",
                    color: theme.palette.custom.white,
                    p: "0",
                    minWidth: "0",
                    py: "10px",
                    textTransform: "none",
                    typography: "h6",
                    fontWeight: "700",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: 0,
                      height: "3px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: theme.palette.custom.orange,
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      color: theme.palette.custom.orange,
                    },
                    "&:hover::before": {
                      width: "100%",
                    },
                  }}
                >
                  {link.title}
                </Button>
              ))}
            </Box>

            {/* Mobile Hamburger */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: theme.palette.custom.white }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Empty spacer div */}
      <Box className="empty-div" sx={{ height: `${headerHeight}px` }} />

      {/* Off-canvas Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </>
  );
};

export default HeaderComponent;
