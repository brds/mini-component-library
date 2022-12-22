import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const iconSize = 24;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange} aria-label={label}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <InlineIcon id="chevron-down" size={iconSize} strokeWidth={1} />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  inset: 0;
  /** Remove Safari restriction on styling the height of select */
  appearance: none;
`;

const iconRightSpace = 10;
const iconLeftSpace = 10;

const PresentationalBit = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: ${16 / 16}rem;
  line-height: ${19 / 16}rem;
  color: ${COLORS.gray700};
  padding: 12px calc(${iconLeftSpace}px + ${iconSize}px + ${iconRightSpace}px) 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px solid black;
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

const InlineIcon = styled(Icon)`
  width: ${iconSize}px;
  height: ${iconSize}px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${iconRightSpace}px;
  margin-block: auto;
  pointer-events: none;
`

export default Select;
