import Link from 'next/link'
import styled, { css } from 'styled-components'
import React from 'react'

const BadgeBase = css`
  display: ${props => props.display === 'block' ? 'block' : 'inline-block'};
  width: ${props => props.display === 'block' ? '100%' : 'auto'};
  padding: ${props => props.size === 'lg' ? '16px 24px' : '8px 16px'};
  font-size: ${props => props.size === 'lg' ? '21px' : ({ theme }) => theme.fontSizes[0]};
  border: 0;
  border-radius: 999px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: ${props => props.color ? props.color : 'var(--white)'};
  background: ${props => props.bg ? props.bg : 'var(--primary)'};
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};
  margin-right: ${props => props.marginRight ? props.marginRight : '0'};
  transition: all 120ms ease-out 0s;
`
const BadgeGhostBase = css`
  ${BadgeBase}
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

export const Badge = styled.span`
  ${BadgeBase}
`

export const BadgeGhost = styled.span`
  ${BadgeGhostBase}
`