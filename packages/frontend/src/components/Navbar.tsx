"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styled from "styled-components";

const Navbar: FC = () => {
    const pathname = usePathname();

    return (
        <Container>
            <ul>
                <StyledLink href="/client-onclick-errors" isActive={pathname === "/client-onclick-errors"}>
                    <li>Client onClick Errors</li>
                </StyledLink>
                <StyledLink href="/client-render-error" isActive={pathname === "/client-render-error"}>
                    <li>Client Render Error (Error Boundary)</li>
                </StyledLink>
                <StyledLink href="/client-async-error" isActive={pathname === "/client-async-error"}>
                    <li>Client async Error</li>
                </StyledLink>
                <StyledLink
                    href="/server-side-error-controlled"
                    isActive={pathname === "/server-side-error-controlled"}
                >
                    <li>Server error (controlled)</li>
                </StyledLink>
                <StyledLink
                    href="/server-side-error-uncontrolled"
                    isActive={pathname === "/server-side-error-uncontrolled"}
                >
                    <li>Server error uncontrolled</li>
                </StyledLink>
                <StyledLink href="/prueba" isActive={pathname === "/prueba"}>
                    <li>prueba</li>
                </StyledLink>
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
const StyledLink = styled(Link)<{ isActive: boolean }>`
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? "#00ff00" : "inherit")};

    li {
        color: ${({ isActive }) => (isActive ? "#00ff00" : "inherit")};
    }
`;
