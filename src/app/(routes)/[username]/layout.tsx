import type { Metadata } from "next";
import Main from './Header'
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="absolute inset-0">
            {children}
        </div>
    );
}
