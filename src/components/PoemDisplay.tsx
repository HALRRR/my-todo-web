import { useState, useEffect } from 'react';
import type { Emotion } from '../data/emotions';

interface PoemDisplayProps {
  emotion: Emotion;
}

export default function PoemDisplay({ emotion }: PoemDisplayProps) {
  const [displayedPoem, setDisplayedPoem] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    setDisplayedPoem('');

    let index = 0;
    const poem = emotion.poem;
    const interval = setInterval(() => {
      if (index < poem.length) {
        setDisplayedPoem(poem.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [emotion.poem]);

  return (
    <div className="text-center">
      <p
        className="font-sans text-2xl md:text-3xl mb-2 tracking-wider emotion-transition"
        style={{
          color: emotion.color,
          textShadow: `0 0 10px ${emotion.color}80`,
          minHeight: '3rem',
        }}
      >
        {displayedPoem}
        {isTyping && (
          <span
            className="inline-block w-2 h-6 ml-1 animate-blink"
            style={{ backgroundColor: emotion.color }}
          />
        )}
      </p>
      <p
        className="font-sans text-sm opacity-60"
        style={{ color: emotion.color }}
      >
        {emotion.poemAuthor}
      </p>
    </div>
  );
}
