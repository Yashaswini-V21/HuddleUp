import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MentionText component
 * Wraps @username mentions with clickable Link components.
 * 
 * @param {Object} props
 * @param {string} props.text - The text to process for mentions.
 */
const MentionText = ({ text }) => {
    if (!text) return null;

    // Regex to match @username or #hashtag
    // Capturing groups: 1 for @username, 2 for #hashtag
    const regex = /(@(\w+))|(#(\w+))/g;

    // Use split with capturing groups to get all parts
    // [textBefore, fullMention, username, fullHashtag, hashtag, textBetween, ...]
    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, index) => {
                // The way split works with 4 capturing groups:
                // index % 5 === 0: plain text
                // index % 5 === 1: @username (full)
                // index % 5 === 2: username (name only)
                // index % 5 === 3: #hashtag (full)
                // index % 5 === 4: hashtag (tag only)

                const mod = index % 5;

                if (mod === 0) {
                    return <span key={index}>{part}</span>;
                }

                if (mod === 1 && part) {
                    const username = parts[index + 1];
                    return (
                        <Link
                            key={index}
                            to={`/user/${encodeURIComponent(username)}`}
                            className="text-primary font-bold hover:underline"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {part}
                        </Link>
                    );
                }

                if (mod === 3 && part) {
                    const tag = parts[index + 1];
                    return (
                        <Link
                            key={index}
                            to={`/explore?search=${encodeURIComponent(tag)}`}
                            className="text-emerald-400 font-bold hover:underline"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {part}
                        </Link>
                    );
                }

                // Skip the inner capturing groups (username/hashtag name only)
                return null;
            })}
        </>
    );
};

export default MentionText;
