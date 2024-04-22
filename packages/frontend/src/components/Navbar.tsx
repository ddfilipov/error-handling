"use client";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Navbar: FC = () => {
    return (
        <Container>
            <ul>
                <Link href="/controlled-server-side-error">
                    <li>Error Controlado - Servidor</li>
                </Link>
                <Link href="/uncontrolled-server-side-error">
                    <li>Error No-Controlado - Servidor</li>
                </Link>
                <Link href="/controlled-client-side-error">
                    <li>Error Controlado - Cliente</li>
                </Link>
                <Link href="/uncontrolled-client-side-error">
                    <li>Error No-Controlado - Cliente</li>
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

        li {
            display: flex;
            flex-basis: 100%;
            min-height: 50px;
            align-items: center;
            border: 1px solid #c0c0c0;
            padding: 5px;
            margin: 0;
            width: auto;
        }
    }
`;
