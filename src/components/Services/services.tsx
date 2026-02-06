// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   List,
//   ListItem,
//   Button,
// } from "@mui/material";
// import theme from "../../../theme";

// const servicesList = [
//   {
//     title: "Custom Web Pages",
//     description:
//       "We create interactive, responsive, and visually engaging websites that provide seamless user experiences. Whether it’s a small college project or a business website, we as a team offer solutions that meet the specific needs of the project, built with HTML, CSS, JavaScript, React, and Next.js.",
//   },
//   {
//     title: "Business Email Templates",
//     description:
//       "Our email templates are designed to effectively communicate your brand message, increasing engagement and helping your business reach new heights. We create responsive and professional templates tailored to suit your business objectives.",
//   },
//   {
//     title: "WordPress Solutions",
//     description:
//       "WordPress is a powerful tool, and we use it to develop user-friendly and easy-to-manage websites. We help you set up and customize WordPress websites, providing a cost-effective way for businesses to manage their online presence. Big companies trust WordPress for its ease of use and scalability.",
//   },
// ];

// const whyChooseUs = [
//   "Expertise in creating interactive, mobile-first websites",
//   "Cost-effective solutions for businesses of all sizes",
//   "Fast turnaround with a focus on quality",
//   "Fully responsive web design for seamless browsing across devices",
//   "Support for both front-end (HTML, CSS, JS, Reactjs, Nextjs) and back-end (WordPress) development",
// ];

// const Services = () => {
//   return (
//     <Box
//       id="services"
//       sx={{
//         py: { xs: "24px", md: "48px" },
//         background: theme.palette.custom.white,
//       }}
//     >
//       <Container>
//         <Typography
//           variant="h3"
//           fontWeight={600}
//           sx={{
//             color: theme.palette.custom.black,
//             pb: "24px",
//           }}
//         >
//           Our{" "}
//           <span style={{ color: theme.palette.custom.orange }}>Services</span>
//         </Typography>

//         <Typography
//           variant="h4"
//           fontWeight={600}
//           sx={{ color: theme.palette.custom.black, pb: "24px" }}
//         >
//           Freelance{" "}
//           <span style={{ color: theme.palette.custom.orange }}>
//             Web Development & Email Template
//           </span>{" "}
//           Services
//         </Typography>

//         <Typography
//           variant="h5"
//           sx={{ color: theme.palette.custom.black, pb: "24px" }}
//         >
//           As a skilled freelancer with expertise in frontend web development and
//           business-oriented solutions, we specialize in delivering:
//         </Typography>

//         {/* Services List */}
//         <List
//           sx={{
//             color: theme.palette.custom.black,
//             typography: "h6",
//             p: "0",
//           }}
//         >
//           {servicesList.map((service, index) => (
//             <ListItem
//               key={index}
//               sx={{ pb: "24px", pt: "0", display: "list-item", px: 0 }}
//             >
//               <b style={{ color: theme.palette.custom.orange }}>
//                 {service.title}:
//               </b>{" "}
//               {service.description}
//             </ListItem>
//           ))}
//         </List>

//         <Typography
//           variant="h5"
//           fontWeight={600}
//           sx={{ color: theme.palette.custom.black, pb: "24px" }}
//         >
//           Why Choose{" "}
//           <span style={{ color: theme.palette.custom.orange }}>Us</span> ?
//         </Typography>

//         {/* Why Choose Us List */}
//         <List
//           sx={{
//             color: theme.palette.custom.black,
//             typography: "h6",
//             mb: "24px",
//             listStyleType: "number",
//             p: "0",
//             pl: "40px",
//           }}
//         >
//           {whyChooseUs.map((item, index) => (
//             <ListItem
//               key={index}
//               sx={{ py: "12px", display: "list-item", px: 0 }}
//             >
//               {item}
//             </ListItem>
//           ))}
//         </List>

//         <Typography
//           variant="h5"
//           fontWeight="600"
//           sx={{ color: theme.palette.custom.black, pb: "24px" }}
//         >
//           Get Started with Us{" "}
//           <span style={{ color: theme.palette.custom.orange }}>Today!</span>
//         </Typography>

//         <Typography
//           variant="h5"
//           fontWeight="500"
//           sx={{ color: theme.palette.custom.black, pb: 4 }}
//         >
//           If you're looking for affordable and professional web development or
//           custom email templates for your business, look no further. Reach out
//           to us and start your project with us today.
//         </Typography>

//         <Box sx={{ textAlign: "center" }}>
//           <Button
//             href="#contact"
//             variant="black"
//             sx={{
//               fontWeight: 700,
//               px: 4,
//               py: 1.5,
//             }}
//           >
//             Contact Us
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Services;
