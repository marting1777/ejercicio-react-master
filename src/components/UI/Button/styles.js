import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  width: ${(props) => (props.width ? props.width : 'unset')};
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
  padding: 15px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'initial'};
  &:focus {
    outline: none;
  }
`;

export { StyledButton };
