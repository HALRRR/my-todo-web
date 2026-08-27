import type { Emotion } from '../data/emotions';

interface PixelGirlProps {
  emotion: Emotion;
}

export default function PixelGirl({ emotion }: PixelGirlProps) {
  const getExpressionClass = () => {
    switch (emotion.girlExpression) {
      case 'happy':
        return 'animate-bounce-slow';
      case 'sad':
        return 'opacity-80';
      case 'angry':
        return 'animate-pulse';
      case 'expect':
        return 'animate-float';
      default:
        return 'animate-breathe';
    }
  };

  return (
    <div className={`relative ${getExpressionClass()}`}>
      {/* 像素少女主体 */}
      <div className="relative w-32 h-48 mx-auto">
        {/* 头发 */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-16 rounded-t-full"
          style={{
            backgroundColor: '#1a1a4e',
            boxShadow: `0 0 20px ${emotion.color}`,
          }}
        />

        {/* 头部 */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-14 rounded-lg"
          style={{
            backgroundColor: '#fef3c7',
            boxShadow: `0 0 15px ${emotion.color}40`,
          }}
        >
          {/* 眼睛 */}
          <div className="absolute top-4 left-2 w-3 h-3 bg-gray-800 rounded-sm" />
          <div className="absolute top-4 right-2 w-3 h-3 bg-gray-800 rounded-sm" />

          {/* 眼睛高光 */}
          <div className="absolute top-3 left-2 w-1 h-1 bg-white rounded-sm" />
          <div className="absolute top-3 right-2 w-1 h-1 bg-white rounded-sm" />

          {/* 腮红 */}
          <div
            className="absolute top-6 left-0 w-2 h-1 rounded-full opacity-60"
            style={{ backgroundColor: emotion.color }}
          />
          <div
            className="absolute top-6 right-0 w-2 h-1 rounded-full opacity-60"
            style={{ backgroundColor: emotion.color }}
          />
        </div>

        {/* 身体 */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-14 h-16 rounded-b-lg"
          style={{
            backgroundColor: emotion.color,
            boxShadow: `0 0 20px ${emotion.color}60`,
          }}
        >
          {/* 像素细节 - 衣服装饰 */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white opacity-30 rounded-sm" />
        </div>

        {/* 裙子 */}
        <div
          className="absolute top-34 left-1/2 -translate-x-1/2 w-20 h-12 rounded-b-lg"
          style={{
            backgroundColor: emotion.color,
            opacity: 0.8,
            boxShadow: `0 0 15px ${emotion.color}40`,
          }}
        >
          {/* 裙摆像素装饰 */}
          <div className="absolute bottom-0 left-0 w-2 h-2" style={{ backgroundColor: '#1a1a4e' }} />
          <div className="absolute bottom-0 left-4 w-2 h-2" style={{ backgroundColor: '#1a1a4e' }} />
          <div className="absolute bottom-0 left-8 w-2 h-2" style={{ backgroundColor: '#1a1a4e' }} />
          <div className="absolute bottom-0 left-12 w-2 h-2" style={{ backgroundColor: '#1a1a4e' }} />
          <div className="absolute bottom-0 left-16 w-2 h-2" style={{ backgroundColor: '#1a1a4e' }} />
        </div>

        {/* 腿 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
          <div
            className="w-3 h-8 rounded-b-sm"
            style={{ backgroundColor: '#fef3c7' }}
          />
          <div
            className="w-3 h-8 rounded-b-sm"
            style={{ backgroundColor: '#fef3c7' }}
          />
        </div>

        {/* 手臂 - 根据情绪变化 */}
        <div
          className="absolute top-22 -left-2 w-3 h-10 rounded-sm"
          style={{
            backgroundColor: '#fef3c7',
            transform: emotion.girlExpression === 'happy' ? 'rotate(-30deg)' : 'rotate(0deg)',
            transformOrigin: 'top center',
            transition: 'transform 0.3s ease',
          }}
        />
        <div
          className="absolute top-22 -right-2 w-3 h-10 rounded-sm"
          style={{
            backgroundColor: '#fef3c7',
            transform: emotion.girlExpression === 'happy' ? 'rotate(30deg)' : 'rotate(0deg)',
            transformOrigin: 'top center',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>

      {/* 底部光晕 */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 rounded-full blur-xl opacity-50"
        style={{ backgroundColor: emotion.color }}
      />
    </div>
  );
}
