import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

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
                    ]}
                    components={{
                        // @ts-ignore
                        img: ({ node, ...props }) => (
                            <div className="relative my-6 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    // @ts-ignore
                                    src={`/${props.src}`}
                                    alt={props.alt || ''}
                                    width={700}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ),
                    }}
                >
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default Description;
