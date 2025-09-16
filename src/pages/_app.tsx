import React from "react";
import { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import WithSeo from "@/components/layout/with-seo";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/global.css";
import theme from "../../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
        rel="stylesheet"
      />
      <CssBaseline />
      <WithSeo
        title="Mohammed Wasim"
        description="Journey - Mohammed Wasim"
        ogImageTag=""
      >
        <Layout>
          <div className="page-border"></div>
          <div className="page-content">
            <Component {...pageProps} />
          </div>
        </Layout>
      </WithSeo>
    </ThemeProvider>
  );
}

export default MyApp;
