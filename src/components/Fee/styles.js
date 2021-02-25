import styled from 'styled-components';

const FeeContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  background-color: #00355d;
`;

const FeeDescription = styled.p`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
`;

const FeeAmount = styled.p`
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
`;

export { FeeContainer, FeeDescription, FeeAmount };
