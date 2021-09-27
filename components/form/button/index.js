import React from 'react';
import styled from 'styled-components';

import { buttonMixin } from '../../button';

const ImgButton = styled.button`
  ${buttonMixin};
`;

const TextButton = styled.a`
  color: var(--c-action);
  cursor: pointer;
`;

const Button = React.forwardRef(function ForwaredButton(
  { children, kind = 'default', ...rest },
  ref
) {
  if (kind === 'text') {
    return (
      <TextButton ref={ref} {...rest}>
        {children}
      </TextButton>
    );
  }

  return (
    <ImgButton ref={ref} {...rest}>
      {children}
    </ImgButton>
  );
});

export default Button;
