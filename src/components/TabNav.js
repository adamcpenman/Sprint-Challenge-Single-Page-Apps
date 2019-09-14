import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const Nav = styled.nav`
display: flex;
justify-content: center;

 a {
     padding: 10px;
     text-decoration: none;
 }
`

export default function TabNav() {
    return (

    <Nav>
     <NavLink exact to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/locations">Location</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
    </Nav>

    )
};
