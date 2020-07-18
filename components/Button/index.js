import Link from 'next/link'
import styled, { css } from 'styled-components'
import React from 'react'

const ButtonBase = css`
  display: inline-block;
  padding: ${props => props.size === 'lg' ? '16px 24px' : '8px 16px'};
  font-size: ${props => props.size === 'lg' ? '21px' : 'inherit'};
  border: 0;
  border-radius: 999px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: ${props => props.color ? props.color : 'var(--white)'};
  background: ${props => props.bg ? props.bg : 'var(--primary)'};
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};
  margin-right: ${props => props.marginRight ? props.marginRight : '0'};
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

export const ButtonLink = ({href,bg,color,children, marginLeft, marginRight, size}) => (
  <Link href={href}>
    <ButtonLinkContainer size={size} marginLeft={marginLeft} marginRight={marginRight} bg={bg} color={color}>{children}</ButtonLinkContainer>
  </Link>
)