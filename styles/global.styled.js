import { createGlobalStyle } from "styled-components";

export const globalStyles = createGlobalStyle`
  :root {
    --bg-main: purple;
    --w-container: 1000px;
    --w-content: 800px;
    --z-rear: 100;
    --z-background: 200;
    --z-forefront: 400;
    --z-foreground: 300;

    /* // https://coolors.co/606c38-283618-fefae0-dda15e-bc6c25 */
    --color-primary: #fefae0;
    --color-secondary: #606c38;
    --color-tertiary: #283618;
    --color-quaternary: #dda15e;
    --color-quinary: #bc6c25;
    --color-senary: #4361ee;
    --color-septenary: #d00000;
    --color-black: #021526;
    --color-white: #fff;
    --color-gradrient-primary: radial-gradient(
      203.27% 102.9% at 50% -2.9%,
      #441ab8 0%,
      #2d0995 100%
    );
    --c-success: var(--color-secondary);
    --c-danger: var(--color-septenary);
    --c-action: var(--color-senary);
    --c-action--hover: #3655df;
    --c-info: var(--color-quaternary);
    --c-muted: #bdbdbd;
    --c-accent: var(--color-quinary);
    --c-text: var(--color-black);
    --c-text--inverse: var(--color-primary);
    --c-bg: var(--color-white);
    --c-bg--inverse: var(--color-gradrient-primary);

    --color-intent-bg: linear-gradient(
        180deg,
        rgba(129, 134, 140, 0.52) 0%,
        rgba(57, 58, 63, 0.59) 25%,
        #393a3f 100%
      ),
      #393a3f;
    --color-intent-text: #fff;
    --size-global-horizontal-bleed: 20px;
    --content-container-width: 670px;
    --radius-s: 2px;
    --radius: 4px;
    --radius-m: 5px;
    --radius-l: 8px;
    --size-base: 14px;
    --size-xxs: 0.296rem;
    --size-xs: 0.444rem;
    --size-s: 0.667rem;
    --size: 1rem;
    --size-m: 1.5rem;
    --size-l: 2.25rem;
    --size-xl: 3.375rem;
    --size-xxl: 5.063rem;
    --size-huge: 7.594rem;
    /* // NOTE: https://type-scale.com/?size=14&scale=1.333&text=A%20Visual%20Type%20Scale&font=Roboto&fontweight=400&bodyfont=body_font_default&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false */
    --f-size-base: 14px;
    --f-size-xxs: 0.563rem;
    --f-size-xs: 0.75rem;
    --f-size: 1rem;
    --f-size-m: 1.333rem;
    --f-size-l: 1.777rem;
    --f-size-xl: 2.369rem;
    --f-size-xxl: 3.157rem;
    --f-size-huge: 4.209rem;
  }

  
  html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    height: 100%;
  }

  body > div:first-child,
  #__next,
  #__next > div {
    height: 100%;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    margin: 0 !important;
    padding: 0 !important;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export default globalStyles;
