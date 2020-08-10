module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue"],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ]
    }
  },
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      body: ["Nunito", "sans-serif"]
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
      "6": "6px"
    },
    extend: {
      rotate: {
        "2": "2deg",
        "4": "4deg",
        "6": "6deg",
        "8": "8deg",
        "10": "10deg",
        "12": "12deg"
      },
      fontSize: {
        xxs: "0.625rem"
      },
      colors: {
        primary: "#FF00A8",
        secondary: "#00FFC2",
        accent: "#00FF66",
        tertiary: "#210026",
        table: "#1A001F"
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
        "80": "20rem"
      }
    }
  },
  variants: {},
  plugins: []
};
