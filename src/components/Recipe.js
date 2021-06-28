import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

function Recipe({ data }) {

    return (
        <Wrap>
            {
                data ? <Part1Wrapper>
                    <Part1>
                        {console.log(data)}

                        <img src={data.strMealThumb} />
                        <br />
                        <p><b>Category:</b> {data.strCategory}</p>
                        <p><b>Area:</b> {data.strArea}</p>
                        <p><b>Tags:</b> {data.strTags}</p>

                        <h3>Ingredients:</h3>
                        <ul>
                            <li>{data.strIngredient1 ? data.strIngredient1 : ""} - {data.strMeasure1 ? data.strMeasure1 : ""}</li>
                            <li>{data.strIngredient2 ? data.strIngredient2 : ""} - {data.strMeasure2 ? data.strMeasure2 : ""}</li>
                            <li>{data.strIngredient3 ? data.strIngredient3 : ""} - {data.strMeasure3 ? data.strMeasure3 : ""}</li>
                            <li>{data.strIngredient4 ? data.strIngredient4 : ""} - {data.strMeasure4 ? data.strMeasure4 : ""}</li>
                            <li>{data.strIngredient5 ? data.strIngredient5 : ""} - {data.strMeasure5 ? data.strMeasure5 : ""}</li>
                        </ul>
                    </Part1>
                </Part1Wrapper> : ""}
            {
                data ? <Part2Wrapper>
                    <Part2>
                        <h2>{data ? data.strMeal : ""}</h2>
                        <p>{data ? data.strInstructions : ""}</p>
                        <br />
                        <h2>{data.strYoutube ? "Video Recipe" : ""} </h2>
                        { data.strYoutube ? <ReactPlayer url={data.strYoutube} /> : ""}
                    </Part2>
                </Part2Wrapper> : ""
            }
        </Wrap>
    )
}

export default Recipe

const Wrap = styled.div`
    font-family: 'Mulish', sans-serif;
    display:flex;
    margin-bottom: 50px;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

const Part1Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex: 4;
`

const Part1 = styled.div`
    height: 100%;
    display:flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    img {
        height: 400px;
        weight: 100px;
    }
    
    p {
        margin: 0px;
    } 
    
    ul {
        list-style-type: circle;
        margin: 0px;
        text-align: left;
    }
`

const Part2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    padding: 0px 30px;
    
    p {
        margin: 0px;
    }
`

const Part2Wrapper = styled.div`
    // background-color: green;
    display: flex;
    flex: 7;
`