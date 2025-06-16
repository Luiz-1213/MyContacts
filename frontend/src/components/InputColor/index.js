/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { ColorInput, ColorPreview, Container, StyledInput } from './styles';

function InputColor({ color, onColorChange, disabled }) {
  const [focus, setFocus] = useState(false);
  const colorInputRef = useRef(null);

  function handleClickColor() {
    if (!disabled) {
      colorInputRef.current.click();
    }
  }

  return (
    <Container>
      <StyledInput
        $focus={focus}
        $disabled={disabled}
        tabIndex={0}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onClick={handleClickColor}
      >
        <span>{color}</span>
      </StyledInput>
      <ColorPreview
        color={color}
        onClick={handleClickColor}
        title="Escolher cor"
      />
      <ColorInput
        type="color"
        value={color}
        onChange={onColorChange}
        ref={colorInputRef}
      />
    </Container>
  );
}

InputColor.propTypes = {
  color: PropTypes.string,
  onColorChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default InputColor;
