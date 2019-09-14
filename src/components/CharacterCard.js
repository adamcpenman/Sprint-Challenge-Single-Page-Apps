import React from "react";

function CharacterCard(props) {
  const { name }=props.character;
  return <span>Character:{name}</span>;
}

export default CharacterCard;

