import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Home = async () => {
    // Read the markdown file
    const filePath = path.join(
        process.cwd(),
        'content',
        'myblog.md',
    );
    const markdownContent =
        fs.readFileSync(
            filePath,
            'utf-8',
        );

    return (
        <main className="container flex justify-center mx-auto px-4 py-8">
            <section className="mb-8 text-left lg:w-1/2 font-medium break-words relative">
                <div className="markdown text-pretty prose prose-lg max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[
                            remarkGfm,
                        ]}>
                        {
                            markdownContent
                        }
                    </ReactMarkdown>
                </div>
            </section>
        </main>
    );
};

export default Home;
