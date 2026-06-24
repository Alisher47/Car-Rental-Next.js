"use client";

import React from "react";
import Sidebar from "../common/sidebar";
import { Header } from "../common/header";

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-[#F6F7F9] dark:bg-neutral-900">
            {/* Full width Header on top */}
            <Header />

            {/* Content area: Sidebar + Main content */}
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />

                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
