import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fs16: React.CSSProperties;
    fs14: React.CSSProperties;
    fs12: React.CSSProperties;
    fs10: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    fs16?: React.CSSProperties;
    fs14?: React.CSSProperties;
    fs12?: React.CSSProperties;
    fs10?: React.CSSProperties;
  }

  interface Palette {
    custom: {
      orange: string;
      black: string;
      white: string;
      cream: string;
      grey: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      orange?: string;
      black?: string;
      white?: string;
      cream?: string;
      grey?: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fs16: true;
    fs14: true;
    fs12: true;
    fs10: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    orange: true;
    black: true;
    white: true;
    cream: true;
  }
}

const theme = createTheme({
  palette: {
    custom: {
      orange: "#ff4500",
      black: "#000000",
      white: "#ffffff",
      cream: "#f3f3f3",
      grey: "#3a3a3a",
    },
  },

  typography: {
    fontFamily: '"Manrope", sans-serif',

    h1: {
      fontSize:
        "clamp(32px, calc(32px + (64 - 32) * ((100vw - 320px)/(1366 - 320))), 64px)",
      lineHeight:
        "clamp(40px, calc(40px + (80 - 40) * ((100vw - 320px)/(1366 - 320))), 80px)",
    },
    h2: {
      fontSize:
        "clamp(26px, calc(26px + (48 - 26) * ((100vw - 320px)/(1366 - 320))), 48px)",
      lineHeight:
        "clamp(32px, calc(32px + (60 - 32) * ((100vw - 320px)/(1366 - 320))), 60px)",
    },
    h3: {
      fontSize:
        "clamp(22px, calc(22px + (36 - 22) * ((100vw - 320px)/(1366 - 320))), 36px)",
      lineHeight:
        "clamp(28px, calc(28px + (48 - 28) * ((100vw - 320px)/(1366 - 320))), 48px)",
    },
    h4: {
      fontSize:
        "clamp(20px, calc(20px + (28 - 20) * ((100vw - 320px)/(1366 - 320))), 28px)",
      lineHeight:
        "clamp(24px, calc(24px + (36 - 24) * ((100vw - 320px)/(1366 - 320))), 36px)",
    },
    h5: {
      fontSize:
        "clamp(18px, calc(18px + (22 - 18) * ((100vw - 320px)/(1366 - 320))), 22px)",
      lineHeight:
        "clamp(22px, calc(22px + (28 - 22) * ((100vw - 320px)/(1366 - 320))), 28px)",
    },
    h6: {
      fontSize:
        "clamp(16px, calc(16px + (18 - 16) * ((100vw - 320px)/(1366 - 320))), 18px)",
      lineHeight:
        "clamp(20px, calc(20px + (24 - 20) * ((100vw - 320px)/(1366 - 320))), 24px)",
    },

    fs16: {
      fontSize:
        "clamp(14px, calc(14px + (16 - 14) * ((100vw - 320px)/(1366 - 320))), 16px)",
      lineHeight:
        "clamp(20px, calc(20px + (24 - 20) * ((100vw - 320px)/(1366 - 320))), 24px)",
    },
    fs14: {
      fontSize:
        "clamp(12px, calc(12px + (14 - 12) * ((100vw - 320px)/(1366 - 320))), 14px)",
      lineHeight:
        "clamp(18px, calc(18px + (20 - 18) * ((100vw - 320px)/(1366 - 320))), 20px)",
    },
    fs12: {
      fontSize:
        "clamp(10px, calc(10px + (12 - 10) * ((100vw - 320px)/(1366 - 320))), 12px)",
      lineHeight:
        "clamp(14px, calc(14px + (18 - 14) * ((100vw - 320px)/(1366 - 320))), 18px)",
    },
    fs10: {
      fontSize:
        "clamp(8px, calc(8px + (10 - 8) * ((100vw - 320px)/(1366 - 320))), 10px)",
      lineHeight:
        "clamp(12px, calc(12px + (14 - 12) * ((100vw - 320px)/(1366 - 320))), 14px)",
    },
  },

  components: {
    MuiContainer: {
      defaultProps: { maxWidth: "xl" },
      styleOverrides: {
        maxWidthXl: { maxWidth: "1200px" },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "orange" },
          style: {
            backgroundColor: "#ff4500",
            color: "#ffffff",
            borderRadius: "12px",
            "&:hover": {
              backgroundColor: "#3a3a3a",
              color: "#f3f3f3",
            },
            textTransform: "none",
          },
        },
        {
          props: { variant: "black" },
          style: {
            backgroundColor: "#000000",
            color: "#ffffff",
            borderRadius: "12px",
            "&:hover": { backgroundColor: "#ff4500", color: "#f3f3f3" },
            textTransform: "none",
          },
        },
        {
          props: { variant: "white" },
          style: {
            backgroundColor: "#ffffff",
            color: "#ff4500",
            border: "1px solid #000000",
            borderRadius: "12px",
            "&:hover": { backgroundColor: "#ff4500", color: "#f3f3f3" },
            textTransform: "none",
          },
        },
        {
          props: { variant: "cream" },
          style: {
            backgroundColor: "#f3f3f3",
            color: "#000000",
            borderRadius: "12px",
            "&:hover": { backgroundColor: "#ff4500", color: "#f3f3f3" },
            textTransform: "none",
          },
        },
      ],
    },
  },
});

export default theme;
