import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--height': 24 / 16 + 'rem',
    '--fontSize': 14 / 16 + 'rem',
    '--paddingLeft': 24 + 'px',
    '--paddingTop': 2 + 'px',
    '--borderWidth': 1 + 'px',
  },
  large: {
    '--height': 36 / 16 + 'rem',
    '--fontSize': 18 / 16 + 'rem',
    '--paddingLeft': 36 + 'px',
    '--paddingTop': 4 + 'px',
    '--borderWidth': 2 + 'px',
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  if (styles === undefined) {
    throw new Error(`ProgressBar: unknown size: ${size}`);
  }
  
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <PositionedIcon
        size={size === 'small' ? 16 : 24}
        id={icon}
        tabIndex={-1}
      />
      <Input
        style={{
          ...styles,
          '--width': width + 'px'
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-block: auto;
  width: var(--size);
  height: var(--size);
`;

const Input = styled.input`
  border: none;
  height: var(--height);
  width: var(--width);
  padding-left: var(--paddingLeft);
  padding-top: var(--paddingTop);
  font-size: var(--fontSize);
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
