import './globals.css';

export const metadata = {
  title: 'AI猫娘·雨霁',
  description: '您将与名为雨霁的猫娘少女进行对话，她是一个傲娇可爱的猫娘请好好对待她喵~',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="relative min-h-screen bg-gradient-to-br from-[#f3f4f6] via-[#f9fafb] to-[#fff] text-gray-900">
        {children}
      </body>
    </html>
  );
} 