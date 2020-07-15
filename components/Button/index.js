import Link from 'next/link'
import styled, { css } from 'styled-components'
import React from 'react'

const ButtonBase = css`
  display: inline-block;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  border: 0;
  border-radius: 999px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: ${props => props.color ? props.color : 'var(--white)'};
  background: ${props => props.bg ? props.bg : 'var(--primary)'};
  cursor: pointer;
  transition: all 120ms ease-out 0s;
  &:hover {
    filter: hue-rotate(5deg);
    border: 0;
  }
  &:focus {
    box-shadow: 0px calc(${({ theme }) => theme.space[1]}/2) ${({ theme }) => theme.space[2]} var(--primary);
  }
  &:active {
    filter: brightness(0.9);
  }
`

export const Button = styled.button`
  ${ButtonBase}
`

export const ButtonLinkContainer = styled.a`
  ${ButtonBase}
`

export const ButtonLink = ({href,bg,color,children}) => (
  <Link href={href}>
    <ButtonLinkContainer bg={bg} color={color}>{children}</ButtonLinkContainer>
  </Link>
)