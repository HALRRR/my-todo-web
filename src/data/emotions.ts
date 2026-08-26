export interface Emotion {
  id: string;
  name: string;
  color: string;
  poem: string;
  poemAuthor: string;
  particleColor: string;
  girlExpression: 'happy' | 'sad' | 'angry' | 'calm' | 'expect';
}

export const emotions: Emotion[] = [
  {
    id: 'calm',
    name: '平静',
    color: '#00d4ff',
    poem: '海面如镜，心若止水',
    poemAuthor: '— 深海微光',
    particleColor: '#00d4ff',
    girlExpression: 'calm',
  },
  {
    id: 'joy',
    name: '喜悦',
    color: '#7dd3fc',
    poem: '星光点点，喜悦如风',
    poemAuthor: '— 闪烁银河',
    particleColor: '#7dd3fc',
    girlExpression: 'happy',
  },
  {
    id: 'sadness',
    name: '忧伤',
    color: '#a855f7',
    poem: '月光如水，洒落心间',
    poemAuthor: '— 月下涟漪',
    particleColor: '#a855f7',
    girlExpression: 'sad',
  },
  {
    id: 'anger',
    name: '愤怒',
    color: '#ff69b4',
    poem: '风暴来袭，心潮澎湃',
    poemAuthor: '— 雷霆万钧',
    particleColor: '#ff69b4',
    girlExpression: 'angry',
  },
  {
    id: 'anticipation',
    name: '期待',
    color: '#ffffff',
    poem: '初绽的花蕾，悄然等待',
    poemAuthor: '— 绽放之前',
    particleColor: '#ffffff',
    girlExpression: 'expect',
  },
];
