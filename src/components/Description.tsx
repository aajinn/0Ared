import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DescriptionProps {
    markdownContent: string;
}

const Description: React.FC<
    DescriptionProps
> = ({ markdownContent }) => {
    return (
        <section className="mb-6 sm:mb-8 relative">
            <div className="markdown text-base sm:text-lg leading-relaxed sm:leading-loose">
                <ReactMarkdown
                    remarkPlugins={[
                        remarkGfm,
                    ]}>
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default Description;
