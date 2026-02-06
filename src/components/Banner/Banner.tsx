// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";

// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MailIcon from "@mui/icons-material/Mail";
// import CallIcon from "@mui/icons-material/Call";
// import profile from "../../assets/img-videos/wasim.webp";

// const Banner = () => {
//   const theme = useTheme();
//   const [headerHeight, setHeaderHeight] = useState(0);

//   useEffect(() => {
//     const headerElement = document.querySelector("header");
//     if (headerElement) {
//       setHeaderHeight(headerElement.clientHeight);
//     }

//     const handleResize = () => {
//       if (headerElement) {
//         setHeaderHeight(headerElement.clientHeight);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: { xs: "unset", md: `calc(100vh - ${headerHeight}px)` },
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Container>
//         <Grid
//           container
//           spacing={4}
//           alignItems="center"
//           sx={{
//             flexDirection: { xs: "column-reverse", md: "row" },
//             py: "24px",
//           }}
//         >
//           {/* Left Content */}
//           <Grid size={{ md: 7 }}>
//             <Typography
//               variant="h5"
//               sx={{ pb: 2, color: theme.palette.custom.black }}
//             >
//               Hello, It's Me
//             </Typography>

//             <Typography
//               variant="h1"
//               fontWeight={500}
//               sx={{ color: theme.palette.custom.orange, pb: 2 }}
//             >
//               Mohammed Wasim
//             </Typography>

//             <Typography
//               variant="h5"
//               sx={{ pb: 2, color: theme.palette.custom.black }}
//             >
//               And I'm a Frontend Developer
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{ pb: 2, color: theme.palette.custom.black }}
//             >
//               Front-End Developer with 4.5 years of experience, including 3.5
//               years in React, Nextjs, HTML, CSS, JavaScript, and jQuery, and 1
//               year in a non-IT role. Skilled in building responsive web
//               applications and theme-based solutions. Eager to apply diverse
//               skills to create user-focused digital experiences.
//             </Typography>

//             {/* Social Links */}
//             <Box
//               component="ul"
//               sx={{
//                 display: "flex",
//                 gap: 3,
//                 listStyle: "none",
//                 p: 0,
//                 m: 0,
//               }}
//             >
//               {[
//                 {
//                   href: "https://www.linkedin.com/in/iamwasim124/",
//                   icon: <LinkedInIcon />,
//                 },
//                 {
//                   href: "mailto:connect@iamwasim.in",
//                   icon: <MailIcon />,
//                 },
//                 {
//                   href: "tel:+918123833968",
//                   icon: <CallIcon />,
//                 },
//               ].map((item, index) => (
//                 <Box
//                   key={index}
//                   component="li"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     width: 40,
//                     height: 40,
//                     cursor: "pointer",
//                     borderRadius: "50%",
//                     transition: "all 0.3s ease",
//                     "& a": {
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: theme.palette.custom.orange,
//                       transition: "color 0.3s ease",
//                     },
//                     "&:hover": {
//                       background: theme.palette.custom.grey,
//                       "& a": {
//                         color: theme.palette.custom.cream,
//                       },
//                     },
//                   }}
//                 >
//                   <Link href={item.href} target="_blank">
//                     {item.icon}
//                   </Link>
//                 </Box>
//               ))}
//             </Box>

//             {/* Download CV Button */}
//             <Box textAlign={{ xs: "center", md: "left" }} sx={{ pt: 2 }}>
//               <Button
//                 variant="orange"
//                 href="/Resume.pdf"
//                 target="_blank"
//                 sx={{
//                   fontWeight: 700,
//                   px: 4,
//                   py: 1.5,
//                 }}
//               >
//                 Download CV
//               </Button>
//             </Box>
//           </Grid>

//           {/* Right Image */}
//           <Grid size={{ md: 5 }} textAlign="center">
//             <Box
//               sx={{
//                 m: 0,
//                 width: 300,
//                 height: 400,
//                 overflow: "hidden",
//                 borderRadius: "70% 70% 70% 70% / 70% 70% 70% 70%",
//                 boxShadow: "0px 8px 25px #3a3a3a",
//                 mx: "auto",
//               }}
//             >
//               <Image
//                 src={profile}
//                 alt="my_image"
//                 width={300}
//                 height={400}
//                 style={{ objectFit: "cover" }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Banner;
