export const changeIcon = (toggleRightIcon, hidePassword, setHidePassword) => {
  toggleRightIcon((prevIcon) => {
    return prevIcon === 'eye-slash' ? 'eye' : 'eye-slash';
  });
  setHidePassword(!hidePassword);
};
