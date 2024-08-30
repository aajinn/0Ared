import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajin Varghese Chandy",
  description: "Ajin Varghese Chandy's Portfolio Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Ajin Varghese Chandy" />
        <meta
          name="description"
          content="Hi, I'm Ajin Varghese Chandy. I'm a passionate developer with expertise in web technologies and a keen interest in AI and machine learning."
        />
        <meta
          name="keywords"
          content="programming , web developer,what does a web developer do,web developer,web developer jobs,web developer salary,web developer internship,web developer certification,web developer jobs near me,web developer job description,web developer jobs remote,web developer portfolio,web developer salary entry level,web developer average salary,web developer apprenticeship"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Ajin Varghese Chandy" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
