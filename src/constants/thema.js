export const theme = {
  colors: {
    autumnOrange: {
      pumpkin: '#D55448',
      melon: '#FFA577',
      cotton: '#F9F9FF',
      hotChoko: '#896E69',
    },
    white: '#ffffff',
    black: '#000000',
    green: 'green',
    red: 'red',
    blue: '#55BAD2',
    orange: 'orange',
    online: 'green',
    ofline: 'red',
    buttonGrey: '#8b939f',
    secondWhite: '#f6ffff',
    fistFontColor: '#2a2a2a',
    greyFontColor: '#969191',
    profileShadow: '#dbe1ea',
    secondColor: '#8b96a2',
    profileBg: '#f4f6f9',
    profileBorder: '#e7ebf1',
    lightgrey: 'lightgrey',
    tableBorder: '#E2E2E2',
    tableRow: '#EDF1F3',
    tableHead: '#55BAD2',
    tableFont: '#888C8E',
    lightYellow: 'rgb(247, 243, 161)',
    darkRed: 'rgb(187, 53, 53)',
    violet: 'palevioletred',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    xm: '20px',
    ms: '24px',
    l: '32px',
    ls: '48px',
    xl: '64px',
    custom: '26px',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },

  sizes: {
    container: '1030px',
    section: '550px',
    full: '100%',
  },

  shadows: {
    greyShadow: `3px 3px 1px #dbe1ea,
    -3px 3px 1px #dbe1ea`,
    friendsShadow: `3px 3px 1px #dbe1ea,
    -3px -2px 1px #dbe1ea`,
    buttonActive: `2px 2px 2px #2a2a2a`,
    normal: `1px 1px 1px grey`,
  },

  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};
