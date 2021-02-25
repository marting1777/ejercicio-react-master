import { FeeContainer, FeeDescription, FeeAmount } from './styles';

function Fee({ description, feeAmount }) {
  return (
    <FeeContainer>
      <FeeDescription>{description}</FeeDescription>
      <FeeAmount>{feeAmount}</FeeAmount>
    </FeeContainer>
  );
}

export default Fee;
