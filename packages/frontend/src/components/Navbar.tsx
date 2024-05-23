"use client";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Navbar: FC = () => {
    return (
        <Container>
            <ul>
                <Link href="/client-onclick-errors">
                    <li>Client onClick Errors</li>
                </Link>
                <Link href="/client-render-error">
                    <li>Client Render Error (Error Boundary)</li>
                </Link>
                <Link href="/client-async-error">
                    <li>Client async Error</li>
                </Link>
                <Link href="/server-side-error">
                    <li>Server error (error.tsx)</li>
                </Link>
            </ul>
        </Container>
    );
};

export default Navbar;

const Container = styled.div`
    border: 1px solid #c0c0c0;
    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding: 0;
        margin: 0;

        :hover {
            color: #00ff00;
        }
        li {
            display: flex;
            flex-basis: 100%;
            min-height: 50px;
            align-items: center;
            border: 1px solid #c0c0c0;
            padding: 10px;
            margin: 0;
            width: auto;
        }
    }
`;
