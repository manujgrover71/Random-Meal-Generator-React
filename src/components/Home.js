import React, { useState } from 'react'
import styled from "styled-components";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function Home({ changeStatus, changeData }) {
    
    const [cardHeight, setCardHeight] = useState(80);
    
    const changeHeight = () => {
        setCardHeight(10);
        changeStatus(true);
        getData();
    }
        
    const getData = () => {
        fetch(API_URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                changeData(data.meals[0]);
            }) 
    }
    
    return (
        <Wrap height={cardHeight}>
            <h2>Felling hungry?</h2>
            <p>Get a random meal by clicking below</p>
            <Button onClick={changeHeight}>
                Get Meal 🍔
            </Button>
        </Wrap>
    )
}

export default Home

const Wrap = styled.div`
    font-family: 'Mulish', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    min-height: ${props => props.height ? props.height : 10}vh;
    transition: all 1s ease-in-out;
    
    h2 {
        font-size: 50px;
        margin-bottom: 0px;
    }
`;

const Button = styled.div`
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #33C3F0;
    border-color: #33C3F0;
    padding: 13px 30px;
    border-radius: 4px;
    font-size: 10px;
    letter-spacing: 1.2px;
    
    &:hover {
        background-color: #1EAEDB;
    }
`;