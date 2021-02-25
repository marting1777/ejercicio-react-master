import React, { useState } from 'react';
import {
  CreditSimulatorContainer,
  CreditSimulator,
  Simulator,
  RowContainer,
  ButtonsContainer,
  FeeRow,
} from './styles';
import Title from './components/UI/Title';
import Button from './components/UI/Button';
import InputLabel from './components/InputLabel';
import SimulatorSlider from './components/SimulatorSlider';
import Fee from './components/Fee';
import { currencyFormatter } from './shared/utility';

function App() {
  const [totalAmount, setTotalAmount] = useState(5000);
  const [term, setTerm] = useState(3);

  const handleSliderCurrencyChange = (event) => setTotalAmount(event);
  const handleInputCurrencyChange = (event) => {
    const val = event.target.value.replace(/\D/g, '');
    setTotalAmount(val);
  };
  const onFocusOutCurrency = (event) => {
    if (event.target.value <= 5000) return setTotalAmount(5000);
    else if (event.target.value >= 50000) return setTotalAmount(50000);
    let val = parseInt(event.target.value);
    currencyFormatter(val);
    setTotalAmount(val);
  };

  const handleSliderTermChange = (event) => setTerm(event);
  const handleInputTermChange = (event) => setTerm(event.target.value);
  const onFocusOutTerm = (event) => {
    if (typeof parseInt(event.target.value) !== 'number') return setTerm(3);
    if (event.target.value < 3) setTerm(3);
    else if (event.target.value > 24) setTerm(24);
  };

  return (
    <div>
      <CreditSimulatorContainer>
        <CreditSimulator>
          <Simulator>
            <Title text={'Simulá tu crédito'} />
            <RowContainer>
              <InputLabel
                name={'totalAmount'}
                label={'Monto Total'}
                type={'currency'}
                min={5000}
                max={50000}
                value={currencyFormatter(totalAmount)}
                onChange={handleInputCurrencyChange}
                onBlur={onFocusOutCurrency}
              />
              <SimulatorSlider
                value={totalAmount}
                min={5000}
                max={50000}
                onChange={handleSliderCurrencyChange}
                marks={{
                  5000: {
                    style: { color: 'white', fontSize: '18px' },
                    label: currencyFormatter(5000),
                  },
                  50000: {
                    style: { color: 'white', fontSize: '18px' },
                    label: currencyFormatter(50000),
                  },
                }}
              />
            </RowContainer>
            <RowContainer>
              <InputLabel
                name={'term'}
                label={'Plazo'}
                type={'number'}
                min={3}
                max={24}
                value={term}
                onChange={handleInputTermChange}
                onBlur={onFocusOutTerm}
              />
              <SimulatorSlider
                value={term}
                min={3}
                max={24}
                onChange={handleSliderTermChange}
                marks={{
                  3: {
                    style: { color: 'white', fontSize: '18px' },
                    label: 3,
                  },
                  24: {
                    style: { color: 'white', fontSize: '18px' },
                    label: 24,
                  },
                }}
              />
            </RowContainer>
            <FeeRow>
              <Fee
                description={'cuota fija por mes'}
                feeAmount={currencyFormatter(totalAmount / term)}
              />
            </FeeRow>
            <ButtonsContainer>
              <Button
                btnLabel={'obtené crédito'}
                backgroundColor={'#17aa8d'}
                fontSize={'26px'}
                width={'60%'}
              />
              <Button
                btnLabel={'ver detalle de cuotas'}
                backgroundColor={'#0b548b'}
                fontSize={'18px'}
                width={'38%'}
              />
            </ButtonsContainer>
          </Simulator>
        </CreditSimulator>
      </CreditSimulatorContainer>
    </div>
  );
}

export default App;
