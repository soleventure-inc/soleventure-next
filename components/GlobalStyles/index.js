import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --baseDark: ${({ theme }) => theme.colors.baseDark};
    --baseMedium: ${({ theme }) => theme.colors.baseMedium};
    --baseAlt: ${({ theme }) => theme.colors.baseAlt};
    --baseLight: ${({ theme }) => theme.colors.baseLight};
    --baseLightest: ${({ theme }) => theme.colors.baseLightest};
    --white: ${({ theme }) => theme.colors.white};
    --primary: ${({ theme }) => theme.colors.primary};
    --primaryDark: ${({ theme }) => theme.colors.primaryDark};
    --beige: ${({ theme }) => theme.colors.beige};
    --beigeDark: ${({ theme }) => theme.colors.beigeDark};
    --red: ${({ theme }) => theme.colors.red};
    --orange: ${({ theme }) => theme.colors.orange};
    --pink: ${({ theme }) => theme.colors.pink};
    --green: ${({ theme }) => theme.colors.green};
    --teal: ${({ theme }) => theme.colors.teal};
  }

  html {
    box-sizing: border-box;
  }

  *,*:before,*:after {
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: var(--baseDark);
    font-family: ${({ theme }) => theme.fonts.body};
    padding-top: ${({ theme }) => theme.space[7]};
  }

  button, input, select, textarea {
    color: inherit;
    font-family: inherit;
    &:focus, &:after {
      outline: 0;
    }
  }

  button {
    cursor: pointer;
  }

  hr {
    height: 1px;
    background: var(--baseLight);
    border: 0;
  }

  .img-full {
    width: 100%;
    display: block;
  }
  details {
    summary {
      padding: ${({ theme }) => theme.space[2]} 0;
      outline: none;
      cursor: pointer;
      &:focus, &:active {
        outline: none;
      }
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: all 120ms ease-out;
    &:hover, &:focus {
      opacity: 0.8;
    }
  }
  
  p {
    a {
      color: $primary;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      &:hover, &:focus {
        text-decoration: underline;
      }
      &:visited {
        color: var(--red);
      }
    }
  }
  
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: ${({ theme }) => theme.space[4]};
    margin-top: ${({ theme }) => theme.space[4]};
    word-wrap: break-word;
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
  }
  
  h1,h2,h3 {
    font-weight: ${({ theme }) => theme.fontWeights.black};
  }
  
  h4,h5,h6 {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  h1 {
    line-height: ${({ theme }) => theme.lineHeights.largeHeading};
    font-size: ${({ theme }) => theme.fontSizes[6]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[7]};
    }
  }
  
  h2 {
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${({ theme }) => theme.fontSizes[5]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[6]};
    }
  }

  h3 {
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[5]};
    }
  }

  h4 {
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${({ theme }) => theme.fontSizes[3]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[4]};
    }
  }

  h5 {
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[3]};
    }
  }

  h6 {
    line-height: ${({ theme }) => theme.lineHeights.smallHeading};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[1]};
    }
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights.body};
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  small {
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
  
  .lead {
    @media screen and (min-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: 21px;
    }
  }
  
  .c-list {
    padding: 0 0 0 ${({ theme }) => theme.space[3]};
    margin: 0 0 ${({ theme }) => theme.space[3]};
    li {
      line-height: 1.5;
      &:not(:last-of-type) {
        margin-bottom: ${({ theme }) => theme.space[2]};
      }
    }
  }

  .grid {
    list-style: none
  }

  .grid__col--2-of-2,.grid__col--3-of-3,.grid__col--4-of-4,.grid__col--5-of-5,.grid__col--6-of-6,.grid__col--8-of-8,.grid__col--12-of-12 {
    width: 100%
  }

  .grid__col--1-of-2,.grid__col--2-of-4,.grid__col--3-of-6,.grid__col--4-of-8,.grid__col--6-of-12 {
    width: 50%
  }

  .grid__col--1-of-3,.grid__col--2-of-6,.grid__col--4-of-12 {
    width: 33.33333%
  }

  .grid__col--2-of-3,.grid__col--4-of-6,.grid__col--8-of-12 {
    width: 66.66667%
  }

  .grid__col--1-of-4,.grid__col--2-of-8,.grid__col--3-of-12 {
    width: 25%
  }

  .grid__col--3-of-4,.grid__col--6-of-8,.grid__col--9-of-12 {
    width: 75%
  }

  .grid__col--push-2-of-2,.grid__col--push-3-of-3,.grid__col--push-4-of-4,.grid__col--push-5-of-5,.grid__col--push-6-of-6,.grid__col--push-8-of-8,.grid__col--push-12-of-12 {
    margin-left: 100%
  }

  .grid__col--push-1-of-2,.grid__col--push-2-of-4,.grid__col--push-3-of-6,.grid__col--push-4-of-8,.grid__col--push-6-of-12 {
    margin-left: 50%
  }

  .grid__col--push-1-of-3,.grid__col--push-2-of-6,.grid__col--push-4-of-12 {
    margin-left: 33.33333%
  }

  .grid__col--push-2-of-3,.grid__col--push-4-of-6,.grid__col--push-8-of-12 {
    margin-left: 66.66667%
  }

  .grid__col--push-1-of-4,.grid__col--push-2-of-8,.grid__col--push-3-of-12 {
    margin-left: 25%
  }

  .grid__col--push-3-of-4,.grid__col--push-6-of-8,.grid__col--push-9-of-12 {
    margin-left: 75%
  }

  .grid__col--pull-2-of-2,.grid__col--pull-3-of-3,.grid__col--pull-4-of-4,.grid__col--pull-5-of-5,.grid__col--pull-6-of-6,.grid__col--pull-8-of-8,.grid__col--pull-12-of-12 {
    margin-left: -100%
  }

  .grid__col--pull-1-of-2,.grid__col--pull-2-of-4,.grid__col--pull-3-of-6,.grid__col--pull-4-of-8,.grid__col--pull-6-of-12 {
    margin-left: -50%
  }

  .grid__col--pull-1-of-3,.grid__col--pull-2-of-6,.grid__col--pull-4-of-12 {
    margin-left: -33.33333%
  }

  .grid__col--pull-2-of-3,.grid__col--pull-4-of-6,.grid__col--pull-8-of-12 {
    margin-left: -66.66667%
  }

  .grid__col--pull-1-of-4,.grid__col--pull-2-of-8,.grid__col--pull-3-of-12 {
    margin-left: -25%
  }

  .grid__col--pull-3-of-4,.grid__col--pull-6-of-8,.grid__col--pull-9-of-12 {
    margin-left: -75%
  }

  .grid {
    margin-left: -2.4rem
  }

  .grid__col--1-of-5 {
    width: 20%
  }

  .grid__col--push-1-of-5 {
    margin-left: 20%
  }

  .grid__col--pull-1-of-5 {
    margin-left: -20%
  }

  .grid__col--2-of-5 {
    width: 40%
  }

  .grid__col--push-2-of-5 {
    margin-left: 40%
  }

  .grid__col--pull-2-of-5 {
    margin-left: -40%
  }

  .grid__col--3-of-5 {
    width: 60%
  }

  .grid__col--push-3-of-5 {
    margin-left: 60%
  }

  .grid__col--pull-3-of-5 {
    margin-left: -60%
  }

  .grid__col--4-of-5 {
    width: 80%
  }

  .grid__col--push-4-of-5 {
    margin-left: 80%
  }

  .grid__col--pull-4-of-5 {
    margin-left: -80%
  }

  .grid__col--1-of-6 {
    width: 16.66667%
  }

  .grid__col--push-1-of-6 {
    margin-left: 16.66667%
  }

  .grid__col--pull-1-of-6 {
    margin-left: -16.66667%
  }

  .grid__col--5-of-6 {
    width: 83.33333%
  }

  .grid__col--push-5-of-6 {
    margin-left: 83.33333%
  }

  .grid__col--pull-5-of-6 {
    margin-left: -83.33333%
  }

  .grid__col--1-of-8 {
    width: 12.5%
  }

  .grid__col--push-1-of-8 {
    margin-left: 12.5%
  }

  .grid__col--pull-1-of-8 {
    margin-left: -12.5%
  }

  .grid__col--3-of-8 {
    width: 37.5%
  }

  .grid__col--push-3-of-8 {
    margin-left: 37.5%
  }

  .grid__col--pull-3-of-8 {
    margin-left: -37.5%
  }

  .grid__col--5-of-8 {
    width: 62.5%
  }

  .grid__col--push-5-of-8 {
    margin-left: 62.5%
  }

  .grid__col--pull-5-of-8 {
    margin-left: -62.5%
  }

  .grid__col--7-of-8 {
    width: 87.5%
  }

  .grid__col--push-7-of-8 {
    margin-left: 87.5%
  }

  .grid__col--pull-7-of-8 {
    margin-left: -87.5%
  }

  .grid__col--1-of-12 {
    width: 8.33333%
  }

  .grid__col--push-1-of-12 {
    margin-left: 8.33333%
  }

  .grid__col--pull-1-of-12 {
    margin-left: -8.33333%
  }

  .grid__col--2-of-12 {
    width: 16.66667%
  }

  .grid__col--push-2-of-12 {
    margin-left: 16.66667%
  }

  .grid__col--pull-2-of-12 {
    margin-left: -16.66667%
  }

  .grid__col--5-of-12 {
    width: 41.66667%
  }

  .grid__col--push-5-of-12 {
    margin-left: 41.66667%
  }

  .grid__col--pull-5-of-12 {
    margin-left: -41.66667%
  }

  .grid__col--7-of-12 {
    width: 58.33333%
  }

  .grid__col--push-7-of-12 {
    margin-left: 58.33333%
  }

  .grid__col--pull-7-of-12 {
    margin-left: -58.33333%
  }

  .grid__col--10-of-12 {
    width: 83.33333%
  }

  .grid__col--push-10-of-12 {
    margin-left: 83.33333%
  }

  .grid__col--pull-10-of-12 {
    margin-left: -83.33333%
  }

  .grid__col--11-of-12 {
    width: 91.66667%
  }

  .grid__col--push-11-of-12 {
    margin-left: 91.66667%
  }

  .grid__col--pull-11-of-12 {
    margin-left: -91.66667%
  }

  .grid__col {
    box-sizing: border-box;
    display: inline-block;
    margin-right: -.25em;
    min-height: 1px;
    padding-left: 2.4rem;
    vertical-align: top
  }

  @media (max-width: 700px) {
    .grid__col {
        display:block;
        margin-left: 0;
        margin-right: 0;
        width: auto
    }
  }

  @media (max-width: 700px) and (min-width:480px) {
    .grid__col[class*=grid__col--m-] {
        display:inline-block;
        margin-right: -.24em
    }

    .grid__col.grid__col--m-1-of-2,.grid__col.grid__col--m-2-of-4 {
        width: 50%
    }

    .grid__col.grid__col--m-1-of-3 {
        width: 33.33333%
    }

    .grid__col.grid__col--m-2-of-3 {
        width: 66.66667%
    }

    .grid__col.grid__col--m-1-of-4 {
        width: 25%
    }

    .grid__col.grid__col--m-3-of-4 {
        width: 75%
    }
  }

  @media (max-width: 480px) {
    .grid__col[class*=grid__col--s-] {
        display:inline-block;
        margin-right: -.24em
    }

    .grid__col.grid__col--s-1-of-2,.grid__col.grid__col--s-2-of-4 {
        width: 50%
    }

    .grid__col.grid__col--s-1-of-3 {
        width: 33.33333%
    }

    .grid__col.grid__col--s-2-of-3 {
        width: 66.66667%
    }

    .grid__col.grid__col--s-1-of-4 {
        width: 25%
    }

    .grid__col.grid__col--s-3-of-4 {
        width: 75%
    }
  }
  .grid__col--centered {
    display: block;
    margin-left: auto;
    margin-right: auto
}

.grid__col--d-first {
    float: left
}

.grid__col--d-last {
    float: right
}

.grid--no-gutter {
    margin-left: 0;
    width: 100%
}

.grid--no-gutter .grid__col {
    padding-left: 0
}

.grid--no-gutter .grid__col--span-all {
    margin-left: 0;
    width: 100%
}

.grid__col--ab {
    vertical-align: bottom
}

.grid__col--am {
    vertical-align: middle
}

.u-animate--float {  
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.hs-form-field {
  margin-bottom: ${({ theme }) => theme.space[3]};
}

.hs-input[type="text"], .hs-input[type="tel"], .hs-input[type="email"], .hs-select, .hs-input {
	display: block;
	width: 100%;
	padding: ${({ theme }) => theme.space[3]};
	border-radius: ${({ theme }) => theme.space[1]};
	background: var(--baseLightest);
	border: 0;
	border: 1px solid transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	transition: all 180ms ease-out 0s;
	&:focus, &:active {
		border-color: var(--primary);
	}
}

.hs-form-field label {
	display: inline-block;
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: var(--baseMedium);
}

.hs-form-field legend {
	font-size: 14px;
	color: var(--baseMedium);
}

.hs-form-field .actions {
	text-align: center;
}

.hs-button.primary.large {
	width: 100%;
  display: block;
  background: var(--primary);
  border: 0;
  font-family: inherit;
  color: var(--white);
  padding: 16px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 21px;
}

select.c-control__input, .hbspt-form select {
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
	cursor: pointer;
}

.hs-error-msg {
	color: var(--red);
	font-size: 14px;
}

.hs-main-font-element {
	font-size: 14px;
}

::placeholder {
	color: inherit;
	opacity: 0.5;
}

:-ms-input-placeholder {
	color: inherit;
	opacity: 0.5;
}

::-ms-input-placeholder {
	color: inherit;
	opacity: 0.5;
}

.c-checkbox {
	display: inline-flex;
	align-items: center;
	user-select: none;
	margin-bottom: ${({ theme }) => theme.space[3]};
	&__input {
		margin-right: ${({ theme }) => theme.space[2]};
	}
}

.inputs-list.multi-container {
	padding: 0;
	margin: ${({ theme }) => theme.space[3]} 0;
	list-style-type: none;
}

.hs-form-radio, .hs-form-checkbox {
	label {
		position: relative;
		input {
			position: absolute;
			left: 0;
			width: 1px;
			height: 1px;
			opacity:0;
		}
		span {
			display: inline-flex;
			padding: 8px 16px;
			background: var(--baseLightest);
			border: 1px solid var(--baseLighter);
			border-radius: 999px;
			cursor: pointer;
			font-size: 14px;
		}
		input:checked + span {
			background: var(--baseMedium);
			border-color: var(--baseMedium);
			color: var(--white);
			&:before {
				content: '✓';
				padding-right: 8px;
			}
		}
	}
}

progress {
	-webkit-appearance: none;
	 appearance: none;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 999px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
  background: var(--primary);
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  position: relative;
}

progress.active[value]::-webkit-progress-value {
  background: var(--teal);
}

@keyframes floating {
  from { transform: translate(0,  0px); }
  65%  { transform: translate(0, 16px); }
  to   { transform: translate(0, -0px); }    
}

`