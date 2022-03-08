import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --border-radius: 15px;
  --color-primary: rgb(249, 188, 225);
  --color-secondary: rgb(127, 170, 127);
  --color-tertiary: rgb(129, 176, 194);
  --global-white: rgb(253, 242, 248);
  --color-base: var(--global-white);
  --global-white-semi-bold: rgb(248, 232, 242);
  --color-base-semi-bold: var(--global-white-semi-bold);
  --global-white-semi-bold-80: rgba(248, 232, 242, 0.8);
  --color-base-semi-bold-80: var(--global-white-semi-bold-80);
  --global-white-bold: rgb(255, 255, 255);
  --color-base-bold: var(--global-white-bold);
  --global-black: rgb(70, 73, 76);
  --color-contrast: var(--global-black);
  --global-black-semi-bold: rgb(35, 38, 42);
  --color-contrast-semi-bold: var(--global-black-bold);
  --global-black-semi-bold-80: rgba(35, 38, 42, 0.8);
  --color-contrast-semi-bold-80: var(--global-black-semi-bold-80);
  --global-black-bold: rgb(0, 3, 6);
  --color-contrast-bold: var(--global-black-semi-bold);

  --color-base-bold: rgb(255, 255, 255);
  --box-shadow: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028), 0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061), 0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073),
    0 -15px 40px -20px rgba(0, 0, 0, 0.2);
    --box-shadow-no-top: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028), 0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061), 0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073);

  @media (prefers-color-scheme: dark) {
    --color-primary: rgb(179, 94, 145);
    --color-secondary: rgb(52, 94, 51);
    --color-tertiary: rgb(70, 115, 133);
    --color-base: var(--global-black);
    --color-base-semi-bold: var(--global-black-semi-bold);
    --color-base-semi-bold-80: var(--global-black-semi-bold-80);
    --color-base-bold: var(--global-black-bold);
    --color-contrast: var(--global-white);
    --color-contrast-semi-bold: var(--global-white-semi-bold);
    --color-contrast-semi-bold-80: var(--global-white-semi-bold-80);
    --color-contrast-bold: var(--global-white-bold);
  }
}

html {
  background-color: var(--color-base);
}

input {
  background-color: var(--color-base-bright);
}

/* CSS Reset */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: var(--font-family);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Global Styles */
*, *::before, *::after {
  box-sizing: border-box; // more-intuitive box-sizing model.
}

html, body {
  overflow: hidden;
  height: 100%; // Allow percentage-based heights in the application
}

*, *::before, *::after {
  margin: 0; // Remove default margin
  box-sizing: border-box; // more-intuitive box-sizing model.
  line-height: 1.5; // Add accessible line-height
  font-smoothing: optimizeLegibility; // Improve text rendering
  -webkit-font-smoothing: antialiased;
}

#root, #__next {
  isolation: isolate; //  Create a root stacking context
}

body, input, button, textarea, select, option {
  font: inherit; // Remove built-in form typography styles
  font-family: var(--font-family);
  font-weight: var(--font-weight-light);
  color: var(--color-contrast);
}

input[type='text'],textarea {font-size:1em;}

a {
  color: var(--color-tertiary);
  text-decoration: none;
}

b {
    font-weight: var(--font-weight-medium);
}

h1, h2, h3, h4, h5, h6, b {
    font-weight: var(--font-weight-bold);
}

h1, h2, h3, h4, h5, h6, p {
  overflow-wrap: break-word; // Avoid text overflows
  hyphens: auto;
  margin-bottom: 1.5em;
}

em {
    font-style: italic;
}


img, picture, video, canvas, svg {
  display: block; // Improve media defaults
  max-width: 100%;
}

[data-tooltip]{
  &:before {
    content: attr(data-tooltip);
    position: absolute;
    opacity: 0;
    padding: 10px;
    color: var(--color-contrast);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    @media (prefers-reduced-motion: no-preference) {
      transition: all 0.15s ease;
    }
  }

  &:hover:before {
    opacity: 1;
    background: var(--color-tertiary);
    margin-top: -40px;
    margin-left: 20px;    
  }

  &[data-tooltip--close]:hover:before {
    opacity: 1;
    margin-top: -30px;
    margin-left: 15px;    
  }

  &:not([data-tooltip--persistent]):before {
    pointer-events: none;
  }  
}

::-webkit-scrollbar {
  width: 0.75rem;
  z-index: 999;
}
   
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.35rem rgba(0, 0, 0, 0.3);
}
   
::-webkit-scrollbar-thumb {
  border: 0.1rem solid var(--color-contrast);
  background-color: var(--color-tertiary);
  border-radius: 0.75rem;
}

`;
