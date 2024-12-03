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
        <section className="mb-8 text-center relative">
            <div className="markdown">
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
