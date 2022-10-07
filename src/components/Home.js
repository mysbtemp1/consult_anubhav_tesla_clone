import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S" 
            backgroundImg="model-s.jpg"
            description="Order online for touchless delivery"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section 
            title="Model X" 
            backgroundImg="model-x.jpg"
            description="Order online for touchless delivery"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section 
            title="Model Y" 
            backgroundImg="model-y.jpg"
            description="Order online for touchless delivery"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            itemTextColor="black"
        />
        <Section 
            title="Model 3" 
            backgroundImg="model-3.jpg"
            description="Order online for touchless delivery"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            itemTextColor="black"
        />
        <Section 
            title="Solar Panel" 
            backgroundImg="solar-panel.jpg"
            description="Buy excellent sollar panels from us."
            RightBtnText="Buy"
            itemTextColor="black"
        />
        <Section 
            title="Solar Roof" 
            backgroundImg="solar-roof.jpg"
            description="Buy solar roofs for your car."
            LeftBtnText="Order Now"
            itemTextColor="black"
        />
        <Section 
            title="Interior Designer" 
            backgroundImg="new-interior.jpg"
            description="Call us for your interior and renovation."
            RightBtnText="Contact Us"
            itemTextColor="white"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`