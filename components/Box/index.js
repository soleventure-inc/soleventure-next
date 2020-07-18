import styled from 'styled-components'

export const Box = styled.div`
  margin-top: ${props => props.marginTop ? props.marginTop : '0'};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};
  margin-right: ${props => props.marginRight ? props.marginRight : '0'};
  padding-top: ${props => props.paddingTop ? props.paddingTop : '24px'};
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '24px'};
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : '24px'};
  padding-right: ${props => props.paddingRight ? props.paddingRight : '24px'};
  border-radius: ${({ theme }) => theme.space[4]};
  background: ${props => props.bg ? props.bg : 'var(--primary)'};
  color: ${props => props.color ? props.color : 'var(--white)'};
`