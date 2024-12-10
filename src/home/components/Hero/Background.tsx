export default function Background() {
  return (
    <>
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* 动态图形 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-primary/20 blur-3xl animate-blob animation-delay-2000" />
      </div>
    </>
  );
} 