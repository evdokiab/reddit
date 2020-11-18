import { css } from 'styled-components';

const sizes = {
  bigDesktop: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// iterate through the sizes and create a media template
const media: unknown = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media as unknown;
