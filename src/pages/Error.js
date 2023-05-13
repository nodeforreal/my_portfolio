import React from 'react'
import styled from 'styled-components'

const Error = () => {

  return (
    <Wrapper className='grid-center'>
      <h1>Page not found!!!</h1>
      <div className='grid-center'>
        <a href="/#home" className='secondary-btn btn'>Back</a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - 96px);
`

export default Error