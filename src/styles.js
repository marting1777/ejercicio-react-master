import styled from 'styled-components';

const CreditSimulatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreditSimulator = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: #044678;
  height: 95vh;
  justify-content: center;
`;

const Simulator = styled.div`
  background-color: #003b67;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
`;

const RowContainer = styled.div`
  padding-bottom: 30px;
`;

const FeeRow = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`;

const ButtonsContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export {
  CreditSimulatorContainer,
  CreditSimulator,
  Simulator,
  RowContainer,
  FeeRow,
  ButtonsContainer,
};
