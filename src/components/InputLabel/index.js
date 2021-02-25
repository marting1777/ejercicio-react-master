import { InputLabelContainer, StyledLabel, StyledInput } from './styles';

function InputLabel({ onBlur, min, max, value, type, name, label, onChange }) {
  return (
    <InputLabelContainer>
      <StyledLabel htmlfor={name}>{label}</StyledLabel>
      <StyledInput
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        min={min ? min : null}
        max={max ? max : null}
        onBlur={onBlur}
      />
    </InputLabelContainer>
  );
}

export default InputLabel;
