import type { Emotion } from '../data/emotions';

interface EmotionSelectorProps {
  emotions: Emotion[];
  currentEmotion: Emotion;
  onSelect: (emotion: Emotion) => void;
}

const emotionIcons: Record<string, string> = {
  calm: '💙',
  joy: '✨',
  sadness: '💜',
  anger: '💗',
  anticipation: '🌸',
};

export default function EmotionSelector({
  emotions,
  currentEmotion,
  onSelect,
}: EmotionSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {emotions.map((emotion) => (
        <button
          key={emotion.id}
          onClick={() => onSelect(emotion)}
          className={`
            relative px-6 py-3 rounded-lg font-pixel text-xs
            transition-all duration-300 ease-out
            pixel-border
            ${
              currentEmotion.id === emotion.id
                ? 'scale-110 z-10'
                : 'hover:scale-105 opacity-70 hover:opacity-100'
            }
          `}
          style={{
            backgroundColor:
              currentEmotion.id === emotion.id
                ? `${emotion.color}30`
                : 'rgba(26, 26, 78, 0.8)',
            borderColor: emotion.color,
            color: emotion.color,
            boxShadow:
              currentEmotion.id === emotion.id
                ? `0 0 20px ${emotion.color}60, inset 0 0 10px ${emotion.color}30`
                : 'none',
          }}
        >
          <span className="mr-2">{emotionIcons[emotion.id]}</span>
          {emotion.name}
        </button>
      ))}
    </div>
  );
}
