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

    // Regex to match @username (alphanumeric and underscore)
    const mentionRegex = /@(\w+)/g;

    // Split text by mentions while keeping the separators (the matches)
    const parts = text.split(mentionRegex);

    // Find matches to identify which parts are mentions
    const matches = text.match(mentionRegex) || [];

    let matchIndex = 0;

    return (
        <>
            {parts.map((part, index) => {
                // Every second part (odd indexes) is a username if we captured it correctly
                // But simpler logic: if the part matches a captured group from the regex
                // we check if the original text had @ + part at this position.

                // Let's use a more robust way to reconstruct:
                // When using split with a capturing group, the array will contain:
                // [textBefore, match1, textBetween, match2, ..., textAfter]

                if (index % 2 === 1) {
                    const username = part;
                    const fullMention = `@${username}`;
                    matchIndex++;

                    return (
                        <Link
                            key={index}
                            to={`/user/${encodeURIComponent(username)}`}
                            className="text-primary font-bold hover:underline"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {fullMention}
                        </Link>
                    );
                }

                return <span key={index}>{part}</span>;
            })}
        </>
    );
};

export default MentionText;
