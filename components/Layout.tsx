import React, { ReactNode } from "react";

export default function Layout({ children }: {children: ReactNode}) {
    return (
        <>
            <div>
                <nav>
                    <li>Home</li>
                </nav>
                {children}
            </div>
        </>
    )
}