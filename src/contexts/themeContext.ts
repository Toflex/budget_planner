export const light_theme = {
  dark: false,
  colors: {
    primary: '#ecdcc3',
    background: '#ecdcc3',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(163,160,160)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const dark_theme = {
  dark: false,
  colors: {
    primary: 'rgb(91,88,88)',
    background: 'rgb(91,88,88)',
    card: 'rgb(152,145,145)',
    text: 'rgb(255,255,255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const lightCustomColor = {
  success_outline: 'rgba(108, 189, 143, 1)',
  danger_outline: 'rgba(220, 71, 71, 1)',
};

const darkCustomColor = {
  success_outline: 'rgba(108, 189, 143, 1)',
  danger_outline: 'rgba(220, 71, 71, 1)',
};

export const custom_color = (dark: boolean): object => {
  return dark ? darkCustomColor : lightCustomColor;
};
