import styled from 'styled-components'
import React, {useState} from 'react'

const AccordionContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--baseLight);
  &.isOpen {
    background: var(--baseLightest);
  }
`

const AccordionTitle = styled.button`
  text-align: left;
  width: 100%;
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[7]} ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]};
  border: 0;
  background: transparent;
  color: inherit;
  font-family: inherit;
  transition: all .1s ease-out 0s;
  &:hover, &:focus {
    background: var(--baseAlt);
  }
`

const AccordionBody = styled.div`
  padding: ${({ theme }) => theme.space[3]};
`

const AccordionIcon = styled.div`
  width: ${({ theme }) => theme.space[4]};
  height: ${({ theme }) => theme.space[4]};
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.space[3]};
  transform: translateY(-50%);
`

export default function Accordion({title, content}) {

  const [toggle, setToggle] = useState(false)

  return (
    <AccordionContainer className={toggle ? 'isOpen' : null}>
      <AccordionTitle onClick={() => setToggle(toggle => !toggle)}>
        <strong>{title}</strong>
        <AccordionIcon>
          {
            toggle ?
            (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <line x1='368' y1='368' x2='144' y2='144' fill="none" stroke="currentColor" strokeLineCap="round" strokeLinejoin="round" strokeWidth="32px"/><line x1='368' y1='144' x2='144' y2='368' fill="none" stroke="currentColor" strokeLineCap="round" strokeLinejoin="round" strokeWidth="32px"/>
              </svg>
            )
            :
            (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <line x1='256' y1='112' x2='256' y2='400' fill="none" stroke="currentColor" strokeLineCap="round" strokeLinejoin="round" strokeWidth="32px"/>
                <line x1='400' y1='256' x2='112' y2='256' fill="none" stroke="currentColor" strokeLineCap="round" strokeLinejoin="round" strokeWidth="32px"/>
              </svg>
            )
          }
        </AccordionIcon>
      </AccordionTitle>
      {
        toggle ?
        (
          <AccordionBody>
            <p
              style={{
                marginBottom: 0
              }}
            >
              {content}
            </p>
          </AccordionBody>
        )
        :
        null
      }
    </AccordionContainer>
  )
}