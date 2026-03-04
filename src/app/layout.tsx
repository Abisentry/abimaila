import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'AbiMail Secure | Security Diagnostic Tool',
    description: 'Evaluate your domain and gateway resilience instantly.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen flex flex-col selection:bg-accent-blue selection:text-black">
                <main className="flex-1 flex flex-col">
                    {children}
                </main>
            </body>
        </html>
    );
}
