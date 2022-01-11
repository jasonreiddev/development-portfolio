import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --color-primary: rgb(249 138 225);
  --border-radius: 25px;
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


`;
