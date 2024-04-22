"use client";
import { FC } from "react";
import styled from "styled-components";

const Navbar: FC = ({}) => {
    return (
        <Container>
            <ul>
                <li>Page 1</li>
                <li>Page 2</li>
                <li>Page 3</li>
                <li>Page 4</li>
                <li>Page 5</li>
            </ul>
        </Container>
    );
};

export default Navbar;

const Container = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            display: flex;
            flex-basis: 100%;
            min-height: 50px;
            align-items: center;
            border: 1px solid #400;
            padding: 5px;
            margin: 0;
            width: auto;
        }
    }
`;
