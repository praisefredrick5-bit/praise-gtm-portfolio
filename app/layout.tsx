import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Praise Fredrick — GTM Engineer & RevOps Specialist",
  description:
    "CRM infrastructure, intelligent automation, and connected revenue systems. Explore the work and expertise of Praise Fredrick, GTM Engineer and HubSpot/RevOps automation specialist.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
