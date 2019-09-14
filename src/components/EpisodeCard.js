import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

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
background-color: #D1D1D1;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
margin-bottom: 4px;
`

const Body = styled.p`
background-color: #E5E5E5;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

function EpisodeCard ({ episode }) {
   return (
    <Div>
      <H2>{episode.name}</H2>
      <Body>
        <p>{episode.air_date}</p>
        <p>{episode.episode}</p>
      </Body>
    </Div>
  )
}

export default EpisodeCard;