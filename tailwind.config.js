module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "avatar-user-squareamlie-laurent-color-background":
          "var(--avatar-user-squareamlie-laurent-color-background)",
        "avatar-user-squarejaya-willis-color-background":
          "var(--avatar-user-squarejaya-willis-color-background)",
        "avatar-user-squaremarco-kelly-color-background":
          "var(--avatar-user-squaremarco-kelly-color-background)",
        baseblack: "var(--baseblack)",
        basewhite: "var(--basewhite)",
        "black-900": "var(--black-900)",
        "blue-dark-600": "var(--blue-dark-600)",
        "brand-100": "var(--brand-100)",
        "brand-200": "var(--brand-200)",
        "brand-50": "var(--brand-50)",
        "brand-600": "var(--brand-600)",
        "brand-700": "var(--brand-700)",
        colorsgreen: "var(--colorsgreen)",
        "error-600": "var(--error-600)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-50": "var(--gray-50)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-900": "var(--gray-900)",
        "gray-950": "var(--gray-950)",
        "success-100": "var(--success-100)",
        "success-500": "var(--success-500)",
        "warning-300": "var(--warning-300)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "display-sm-semibold": "var(--display-sm-semibold-font-family)",
        "display-xl-semibold": "var(--display-xl-semibold-font-family)",
        "text-lg-semibold": "var(--text-lg-semibold-font-family)",
        "text-md-medium": "var(--text-md-medium-font-family)",
        "text-md-regular": "var(--text-md-regular-font-family)",
        "text-md-semibold": "var(--text-md-semibold-font-family)",
        "text-sm-medium": "var(--text-sm-medium-font-family)",
        "text-sm-regular": "var(--text-sm-regular-font-family)",
        "text-xl-regular": "var(--text-xl-regular-font-family)",
        "text-xs-medium": "var(--text-xs-medium-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "backdrop-blurs-backdrop-blur-lg":
          "var(--backdrop-blurs-backdrop-blur-lg)",
        "backdrop-blurs-backdrop-blur-md":
          "var(--backdrop-blurs-backdrop-blur-md)",
        "shadows-shadow-lg": "var(--shadows-shadow-lg)",
        "shadows-shadow-xs": "var(--shadows-shadow-xs)",
        "shadows-shadow-xs-skeuomorphic":
          "var(--shadows-shadow-xs-skeuomorphic)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
