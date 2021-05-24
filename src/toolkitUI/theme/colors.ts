import { Colors } from "./types";

export const baseColors = {
  failure: "#C62073",
  primary: "#2B7EFF",
  primaryBright: "#94BEFF",
  primaryDark: "#024ABB",
  secondary: "#20DFDA",
  success: "#20DFDA",
  warning: "#FFB237",
  white: "#ffffff"
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F0F6FF",
  backgroundDisabled: "#E9EAEB", // not yet created
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#EFE9F4",
  inputSecondary: "rgba(43,126,255,.15)",
  tertiary: "#EFF4F5",
  text: "#314F81",
  textDisabled: "#B5BABC",
  textSubtle: "#314F81",
  borderColor: "#94BEFF",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(119.91deg, #3480F6 36.36%, #0DD8D0 84.22%)",
    buttongum: "linear-gradient(124.91deg, #3480F6 74.22%, #0DD8D0 90.22%)",
    bubbleYum: "linear-gradient(230.91deg, #3480F6 74.22%, #0DD8D0 90.22%)",
  },

  bubblegum: "linear-gradient(140.91deg, #3480F6 68.36%, #0DD8D0 84.22%)",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  // secondary: "#138AF2",
  background: "#1c2025",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#264773",
  inputSecondary: "#88A5C2",
  primaryDark: "#138AF2",
  tertiary: "#3F688C",
  text: "#e6e5e8",
  textDisabled: "#d0d0e1",
  textSubtle: "#adb0bb",
  borderColor: "#024ABB",
  card: "#282c34",
  gradients: {
    bubblegum: "linear-gradient(119.91deg, #3480F6 36.36%, #0DD8D0 84.22%)",
    buttongum: "linear-gradient(124.91deg, #3480F6 74.22%, #0DD8D0 90.22%)",
    bubbleYum: "linear-gradient(214.91deg, #3480F6 74.22%, #0DD8D0 90.22%)",
  },

  bubblegum: "linear-gradient(140.91deg, #3480F6 68.36%, #0DD8D0 84.22%)",
};