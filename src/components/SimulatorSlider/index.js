import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function SimulatorSlider({ value, onChange, marks, min, max }) {
  return (
    <>
      <Slider
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        marks={marks}
      />
    </>
  );
}

export default SimulatorSlider;
