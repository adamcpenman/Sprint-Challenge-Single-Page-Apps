import React from "react";
import styled from "styled-components";

const Head = styled.header`
margin: 5px;
`

export default function Header() {
  return (
    <Head className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </Head>
  );
}
