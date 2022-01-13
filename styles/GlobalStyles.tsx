import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --border-radius: 15px;
  --color-primary: rgb(249, 188, 225);
  --color-secondary: rgb(91, 140, 90);
  --color-tertiary: rgb(129, 176, 194);
  --color-black: rgb(70, 73, 76);
  --color-white: rgb(247, 245, 236);
  --box-shadow: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028), 0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061), 0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073),
    0 -15px 40px -20px rgba(0, 0, 0, 0.2);
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

* {
 
}
html, body {
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
  color: var(--color-black);
}

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
    transition: all 0.15s ease;
    padding: 10px;
    color: var(--color-black);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);  
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

`;
