import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S" 
            backgroundImg="model-s.jpg"
        />
        <Section 
            title="Model X" 
            backgroundImg="model-x.jpg"
        />
        <Section 
            title="Model Y" 
            backgroundImg="model-y.jpg"
        />
        <Section 
            title="Model 3" 
            backgroundImg="model-3.jpg"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`