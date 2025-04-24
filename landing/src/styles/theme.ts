export const theme = {
  colors: {
    primary: {
      main: '#DD442E',
      hover: '#E55A46',
      light: '#FFD7D7',
      dark: '#B83227',
    },
    secondary: {
      main: '#512373',
      light: '#7B4D99',
      dark: '#3A1059',
    },
    accent: {
      green: '#4B9C5B',
      yellow: '#FACE31',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#777777',
      light: '#FFFFFF',
      muted: 'rgba(255, 255, 255, 0.7)',
    },
    background: {
      dark: '#512373',
      light: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #DD442E 0%, #E55A46 100%)',
      secondary: 'linear-gradient(135deg, #512373 0%, #7B4D99 100%)',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
  },
  transitions: {
    default: '200ms ease-in-out',
    fast: '150ms ease-in-out',
    slow: '300ms ease-in-out',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    card: '0 1px 4px rgba(0, 0, 0, 0.1)',
    hover: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  typography: {
    fontFamily: {
      primary: 'Verdana, sans-serif',
    },
    heading: {
      fontFamily: 'Verdana, sans-serif',
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      sizes: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.25rem',
        h4: '1.125rem',
        h5: '0.875rem',
        h6: '0.875rem',
      },
    },
    body: {
      fontFamily: 'Verdana, sans-serif',
      sizes: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
    },
  },
  components: {
    button: {
      primary: {
        backgroundColor: '#DD442E',
        color: '#FFFFFF',
        hover: {
          backgroundColor: '#E55A46',
        },
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
      },
      secondary: {
        backgroundColor: '#FFFFFF',
        borderColor: '#DD442E',
        color: '#DD442E',
        hover: {
          backgroundColor: '#FFD7D7',
        },
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
      },
    },
    card: {
      backgroundColor: '#FFFFFF',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '6px',
      hover: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      },
    },
    input: {
      borderColor: '#CCCCCC',
      focus: {
        borderColor: '#DD442E',
        boxShadow: '0 0 0 2px rgba(221, 68, 46, 0.1)',
      },
      error: {
        borderColor: '#DD442E',
        color: '#DD442E',
      },
    },
  },
} as const;
