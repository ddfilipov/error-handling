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
    display: flex;
    padding: 16px;
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            padding: 0;
            margin: 0;
        }
    }
`;
