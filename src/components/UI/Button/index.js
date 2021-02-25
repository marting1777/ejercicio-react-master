import { StyledButton } from './styles';

function Button({
  width,
  fontSize,
  backgroundColor,
  btnLabel,
  btnType,
  onClick,
}) {
  return (
    <StyledButton
      type={btnType}
      width={width}
      onClick={onClick}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
    >
      {btnLabel}
    </StyledButton>
  );
}

export default Button;
