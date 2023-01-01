import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const CalcContainer = styled.div`
    width:100%;
    height:100%;
    min-height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`
const SurroundingBox = styled.div`
    width:350px;
    height:600px;
    border:1px #0000003c solid;
    background: #000000;
    border-radius:10px;
    box-shadow: 2px 3px 4px rgba(0,0,0,0.5);
    padding:20px 25px;
`

const OutputBox = styled.div`
    height:120px;
    color:white;
    padding:3px;
    border: 1px rgba(0,0,0,0.4) solid;
    border-radius:10px;
    display:flex;
    justify-content:end;
    align-items:end;
    font-size:3rem;
    padding:10px 20px;
`

const ButtonsContainer = styled.div`
    margin-top:30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-gap:1px;
`

const Button = styled.div`
    width:70px;
    height:70px;
    margin:3px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    border: 1px rgba(0,0,0,0.1) solid;
    border-radius:50%;
    line-height:50%;
    background-color:#303130;
    color:white;
    font-family: "Arial";
    ${props => css`
    background-color: ${props.color};
    color: ${props.text};
  `}

`

function Calculator() {
  const expression = useState("");
  return (
    <CalcContainer>
        <SurroundingBox>
            <OutputBox>0</OutputBox>
            <ButtonsContainer>
                <Button text="black" color="#9e9e9e">AC</Button>
                <Button text="black" color="#9e9e9e">√x</Button>
                <Button text="black" color="#9e9e9e">%</Button>
                <Button text="black" color="#f59805">/</Button>

                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button text="black" color="#f59805">x</Button>

                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button text="black" color="#f59805">+</Button>

                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button text="black" color="#f59805">-</Button>

                <Button>0</Button>
                <Button>+/-</Button>
                <Button>.</Button>
                <Button text="black" color="#f59805">=</Button>



            </ButtonsContainer>
        </SurroundingBox>
    </CalcContainer>
  )
}



export default Calculator
