import React from 'react'
import styled from 'styled-components'
import Calculator from '../../components/Calculator';

const PageContainer =  styled.div`
    width:100%;
    height:100%;
    min-height:100%;
    display:flex;
    flex-direction:column;
    background:#f6fcfd;

`

function HomePage() {
  return (
    <PageContainer>
        {/* Navbar */}
        {/* Calculator */}
        <Calculator />
    </PageContainer>
  )
}

export default HomePage;
