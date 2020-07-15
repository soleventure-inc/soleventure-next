import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layoutWidth};
  margin: 0 auto;
  position: relative;
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
`

export const Grid = styled.div`
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    flex-wrap: wrap;
  }
`

export const Col = styled.div`
  flex: ${( props ) => props.size ? props.size : 1};
  min-height: 1px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    flex: ${( props ) => props.md ? props.md : 'auto'};
  }
`

export const Section = styled.section`

`