import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const variations = {
  small: {
    '--radius': '4px',
    '--padding': '0px',
    '--height': '8px',
  },
  medium: {
    '--radius': '4px',
    '--padding': '0px',
    '--height': '12px',
  },
  large: {
    '--radius': '8px',
    '--padding': '4px',
    '--height': '24px',
  },
};

const ProgressBar = ({ label, value, size }) => {

  const style = variations[size];

  if (style === undefined) {
    throw new Error(`ProgressBar: unknown size value ${size}`);
  }

  return <Wrapper
    role="progressbar"
    {...value !== undefined ? { 'aria-valuenow': value } : {}}
    aria-label={label}
    style={variations[size]}
  >
    <Mask>
      <Bar value={value} />
    </Mask>
    <VisuallyHidden>{value}%</VisuallyHidden>
  </Wrapper>;
};

const Wrapper = styled.div`
  border-radius: var(--radius);
  padding: var(--padding);
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  /** The bar end should look rounded when getting close to 100% */
  overflow: hidden;
`

const Bar = styled.div`
  width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
  height: 100%;
  transition: width 0.5s ease-out;
`

export default ProgressBar;
