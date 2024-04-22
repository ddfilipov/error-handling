"use client";
import Link from "next/link";
import { FC } from "react";

const Header: FC = ({}) => {
    return (
        <div>
            <Link href={"/"}>
                <h1 style={{ textAlign: "center" }}>Error handling 101</h1>
            </Link>
        </div>
    );
};

export default Header;
