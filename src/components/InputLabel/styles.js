import styled from 'styled-components';

const InputLabelContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 0;
`;

const StyledLabel = styled.label`
  color: #ffffff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
`;

const StyledInput = styled.input`
  background: transparent;
  color: #ffffff;
  font-weight: bold;
  border: 1px solid #ffffff;
  font-size: 18px;
  padding: 10px 20px;
  width: 30%;
  text-align: center;
  &:focus {
    outline: 0;
  }
`;

export { InputLabelContainer, StyledLabel, StyledInput };
