import React from "react";
import styled from "styled-components";
const Div = styled.div`
width: 100%;
max-width: 450px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
padding: 25px 15px;
margin: 0 auto;
margin-top: 40px;
border-radius: 5px;
text-align: center;
`

const H2 = styled.h2`
`
const Img = styled.img`
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

const Body = styled.p`
background-color: #E5E5E5;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

function CharacterCard({ character }) {
  return (
    <Div>
      <H2>{character.name}</H2>
      <Img src={character.image} alt={character.name} />
    
        <p>  {character.species} </p>
        <p>  {character.status} </p>
        <p> {character.location.name} </p>
      
    </Div>
  )
}

export default CharacterCard;

