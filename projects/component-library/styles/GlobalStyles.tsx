// Hover interaction - Increase Contrast
// Inactive: Base | Active: Contrast

// Dark-mode:   Base: Black | Contrast: White | Interact: Lighten
// Light-mode:  Base: White | Contrast: Black | Interact: Darken

// li#num:  Lightness Increase Contrast
// di#num:  Lightness Decrease Contrast
// o#num:   Opacity

import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProps {
  dark: boolean;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

:root {
  --font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --border-radius: 15px;
  --spacing-fixed: 60px;
  --spacing: min(5vw, 60px);
 

  --color-primary: hsl(320, 35%, 55%);
  --color-primary-o66: hsl(320, 35%, 55%, 0.66);
  --color-primary-ld: hsl(320, 35%, 65%);
  --color-primary-li: hsl(320, 35%, 45%);
  --color-primary-li-o66: hsla(320, 35%, 45%, 0.66);

  --color-secondary: hsl(120, 20%, 40%);
  --color-secondary-o66: hsl(120, 20%, 40%, 0.66);
  --color-secondary-ld: hsl(120, 20%, 50%);
  --color-secondary-li: hsl(120, 20%, 30%);
  --color-secondary-li-o66: hsla(120, 20%, 30%, 0.66);
  --color-secondary-ld-max:  hsl(120, 20%, 85%);

  --color-tertiary: hsl(200, 35%, 35%);
  --color-tertiary-o66: hsla(200, 35%, 35%, 0.66);
  --color-tertiary-ld: hsl(200, 35%, 45%);
  --color-tertiary-li: hsl(200, 35%, 25%);
  --color-tertiary-li-o66: hsla(200, 35%, 25%, 0.66);

  --color-white: hsl(320, 0%, 90%);
  --color-white-o66: hsla(320, 0%, 90%, 0.66);
  --color-white-ld: hsla(320, 0%, 80%, 0.953);
  --color-white-li: hsl(320, 0%, 100%);
  --color-white-li-o66: hsl(320, 0%, 100%, 0.66);

  --color-black: hsl(320, 0%, 20%);
  --color-black-o66: hsla(320, 0%, 20%, 0.66);
  --color-black-ld: hsl(320, 0%, 10%);
  --color-black-li: hsl(320, 0%, 30%);
  --color-black-li-o66: hsl(320, 0%, 30%, 0.66);

  --color-base: var(--color-white);
  --color-base-o66: var(--color-white-o66);
  --color-base-ld:var(--color-white-ld);
  --color-base-li: var(--color-white-li);
  --color-base-li-o66: var(--color-white-li-o66);

  --color-contrast: var(--color-black);
  --color-contrast-o66: var(--color-black-o66);
  --color-contrast-ld:var(--color-black-ld);
  --color-contrast-li: var(--color-black-li);
  --color-contrast-li-o66: var(--color-black-li-o66);

  --box-shadow: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028), 0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061), 0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073),
    0 -15px 40px -20px rgba(0, 0, 0, 0.2);
  --box-shadow-no-top: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028), 0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061), 0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073);

    ${(p) =>
      p.dark
        ? `
    --color-primary-ld: hsl(320, 35%, 45%);
    --color-primary-li: hsl(320, 35%, 45%);
    --color-primary-li-o66: hsl(320, 35%, 65%, 0.66);

    --color-tertiary: hsl(200, 35%, 55%);
    --color-tertiary-ld: hsl(200, 35%, 45%);
    --color-tertiary-li: hsl(200, 35%, 65%);
    --color-tertiary-li-o66: hsla(200, 35%, 65%, 0.66);

    --color-secondary-ld-max: hsl(120, 20%, 15%);

    --color-base: var(--color-black);
    --color-base-o66: var(--color-black-o66);
    --color-base-ld:var(--color-black-ld);
    --color-base-li: var(--color-black-li);
    --color-base-li-o66: var(--color-black-li-o66);

    --color-contrast: var(--color-white);
    --color-contrast-o66: var(--color-white-o66);
    --color-contrast-ld:var(--color-white-ld);
    --color-contrast-li: var(--color-white-li);
    --color-contrast-li-o66: var(--color-white-li-o66);
      `
        : null}
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

html, body, #__next {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100%;
}

html {
  background-color: var(--color-base);
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth; 
  }
}

input {
  background-color: var(--color-base-bright);
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
  white-space: pre-wrap;
}

input[type='text'],textarea {font-size:1em;}

a {
  color: var(--color-tertiary-contrast);
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

hr {
  border-color: var(--color-primary);
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
  background-color: var(--color-tertiary-o66);
  border-radius: 0.75rem;

  &:hover{
    background-color: var(--color-tertiary-li-o66);
  }
}

&::-webkit-scrollbar:horizontal {
  display: none;
}

::selection {
    background-color: var(--color-tertiary);
  }

`;
