export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-gradient-to-br from-rose-100 via-slate-100 to-purple-200 overflow-hidden">
      {/* 头部区域 */}
      <header className="w-full py-4 px-4 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">AI Love Predictor</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-foreground hover:text-primary transition-colors">关于</a></li>
              <li><a href="#contact" className="text-foreground hover:text-primary transition-colors">联系我们</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 主要内容区域 - 使用 flex-1 自动占据剩余空间 */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-transparent via-white/40 to-white/20 overflow-auto">
        {/* 英雄区域 */}
        <section className="flex-1 flex items-center justify-center px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                探索你的
                <span className="text-primary"> 爱情密码</span>
              </h2>
              <p className="text-muted text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                通过先进的AI技术，分析你们的匹配程度，预测你们的爱情未来。
              </p>
              <button className="bg-primary text-white px-10 py-3 rounded-lg text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                开始预测
              </button>
            </div>
          </div>
        </section>

        {/* 特点展示区域 */}
        <section className="py-8 px-4" id="about">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🤖</span>
                  <h3 className="text-lg font-semibold text-foreground">AI智能分析</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">使用最新的AI技术，提供准确的匹配分析。</p>
              </div>
              <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🔍</span>
                  <h3 className="text-lg font-semibold text-foreground">深度洞察</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">深入分析性格特征，提供详细的匹配报告。</p>
              </div>
              <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">📊</span>
                  <h3 className="text-lg font-semibold text-foreground">科学预测</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">基于大数据分析，科学预测感情发展。</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 页脚 */}
      <footer className="bg-primary text-white py-4" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">关于我们</h4>
              <p className="text-sm opacity-90">AI Love Predictor 致力于帮助人们找到真爱。</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">联系方式</h4>
              <p className="text-sm opacity-90">邮箱：contact@aipredictor.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">关注我们</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-sm opacity-90 hover:opacity-100">微信</a>
                <a href="#" className="text-sm opacity-90 hover:opacity-100">微博</a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm opacity-90 border-t border-white border-opacity-20 pt-4">
            © 2024 AI Love Predictor. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
} 