import Link from 'next/link'
import styled, { css } from 'styled-components'
import React from 'react'

const ButtonBase = css`
  display: ${props => props.display === 'block' ? 'block' : 'inline-block'};
  width: ${props => props.display === 'block' ? '100%' : 'auto'};
  padding: ${props => props.size === 'lg' ? '16px 24px' : '8px 16px'};
  font-size: ${props => props.size === 'lg' ? '21px' : 'inherit'};
  border: 0;
  border-radius: 999px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: ${props => props.color ? props.color : 'var(--white)'};
  background: ${props => props.bg ? props.bg : 'var(--primary)'};
  margin-top: ${props => props.marginTop ? props.marginTop : '0'};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
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
const ButtonGhostBase = css`
  ${ButtonBase}
  background: transparent;
  &:before {
    content: "";
    border-radius: 999px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: currentColor;
    opacity: .12;
  }
`

export const Button = styled.button`
  ${ButtonBase}
`

export const ButtonGhost = styled.button`
  ${ButtonGhostBase}
`

export const ButtonLinkContainer = styled.a`
  ${ButtonBase}
`

export const ButtonGhostLinkContainer = styled.a`
  ${ButtonGhostBase}
`

export const ButtonLink = ({href,bg,color,children, marginLeft, marginRight, size, display}) => (
  <Link href={href}>
    <ButtonLinkContainer display={display} size={size} marginLeft={marginLeft} marginRight={marginRight} bg={bg} color={color}>{children}</ButtonLinkContainer>
  </Link>
)

export const ButtonGhostLink = ({href,bg,color,children, marginLeft, marginRight, size, display}) => (
  <Link href={href}>
    <ButtonGhostLinkContainer display={display} size={size} marginLeft={marginLeft} marginRight={marginRight} bg={bg} color={color}>{children}</ButtonGhostLinkContainer>
  </Link>
)