import { useState } from 'react';
import { emotions, type Emotion } from './data/emotions';
import ParticleBackground from './components/ParticleBackground';
import PixelGirl from './components/PixelGirl';
import EmotionSelector from './components/EmotionSelector';
import PoemDisplay from './components/PoemDisplay';

function App() {
  const [currentEmotion, setCurrentEmotion] = useState<Emotion>(emotions[0]);

  const handleEmotionSelect = (emotion: Emotion) => {
    setCurrentEmotion(emotion);
  };

  return (
    <div className="relative min-h-screen pixel-grid overflow-hidden">
      {/* 粒子背景 */}
      <ParticleBackground emotion={currentEmotion} />

      {/* 星星装饰 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      {/* 主内容 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* 标题 */}
        <h1
          className="font-pixel text-2xl md:text-4xl mb-12 neon-glow emotion-transition"
          style={{ color: currentEmotion.color }}
        >
          Blue Emotion
        </h1>

        {/* 像素少女 */}
        <div className="mb-12">
          <PixelGirl emotion={currentEmotion} />
        </div>

        {/* 诗句展示 */}
        <div className="mb-12">
          <PoemDisplay emotion={currentEmotion} />
        </div>

        {/* 情绪选择器 */}
        <div className="mt-8">
          <EmotionSelector
            emotions={emotions}
            currentEmotion={currentEmotion}
            onSelect={handleEmotionSelect}
          />
        </div>

        {/* 底部装饰 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div
            className="font-pixel text-xs opacity-40"
            style={{ color: currentEmotion.color }}
          >
            ▼ 点击上方情绪切换 ▼
          </div>
        </div>
      </div>

      {/* 渐变边框 */}
      <div
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          background: `linear-gradient(180deg, ${currentEmotion.color}20 0%, transparent 10%, transparent 90%, ${currentEmotion.color}20 100%)`,
          transition: 'background 0.5s ease',
        }}
      />
    </div>
  );
}

export default App;
