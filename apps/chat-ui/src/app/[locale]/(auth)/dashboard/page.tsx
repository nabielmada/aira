import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { MessageSquare, User, BarChart3, Sparkles, TrendingUp, Zap, Star, Cpu, Wifi, Shield } from 'lucide-react';

export async function generateMetadata(props: { params: Promise<{ locale: string }>; }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Dashboard', });
  
  return {
    title: t('meta_title'),
  };
}

export default function Dashboard() {
  // Simulasi data user - dalam implementasi nyata, ambil dari session/auth
  const userName = "Nabiel Mada";
  const userAvatar = "NM";
  
  return (
    <div className="w-screen  min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-auto">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header with Futuristic Elements */}
        <div className="flex-shrink-0 px-8 py-6 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                  {userAvatar}
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                  Hai, {userName}!
                </h1>
                <p className="text-blue-200/70 text-lg">
                  PT. Kiara Inovasi Teknologi
                </p>
              </div>
            </div>
            
            {/* Status Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Wifi className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Online</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Secure</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-medium">AI Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-8 py-8">
          {/* Real-time Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
              <div className="relative bg-white/2 backdrop-blur-xl rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200/70 text-sm">Total Sessions</p>
                    <p className="text-white text-2xl font-bold">2,847</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-green-400 text-sm">
                  <span>+23.5%</span>
                  <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-200/70 text-sm">AI Responses</p>
                    <p className="text-white text-2xl font-bold">18,642</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-blue-400 text-sm">
                  <span>+142%</span>
                  <div className="ml-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-200/70 text-sm">Performance</p>
                    <p className="text-white text-2xl font-bold">98.7%</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-green-400 text-sm">
                  <span>Optimal</span>
                  <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-yellow-200/70 text-sm">Rating</p>
                    <p className="text-white text-2xl font-bold">4.9</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-yellow-400 text-sm">
                  <span>★★★★★</span>
                  <div className="ml-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* AI Chat Card - Enhanced */}
            <Link href="/dashboard/chat" className="group">
              <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-600/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-600/5 rounded-3xl"></div>
                </div>
            
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-2xl">
                        <MessageSquare className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-400 text-sm font-medium">Neural Engine</div>
                      <div className="text-white text-2xl font-bold">GPT-4</div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      AI Chat Assistant
                    </h3>
                    <p className="text-blue-200/70 text-lg leading-relaxed mb-6">
                      Engage with our advanced AI powered by quantum neural networks. Experience unprecedented conversational intelligence.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-blue-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm">Real-time responses</span>
                      </div>
                      <div className="flex items-center gap-3 text-purple-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm">Context awareness</span>
                      </div>
                      <div className="flex items-center gap-3 text-blue-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm">Multi-language support</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-400 text-lg font-semibold">
                      <span>Launch Assistant</span>
                      <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                        <span className="text-sm">→</span>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm">Available 24/7</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* User Profile Card - Enhanced */}
            <Link href="/dashboard/user-profile" className="group">
              <div className="relative bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-600/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-600/5 rounded-3xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-2xl">
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-400 text-sm font-medium">Security Level</div>
                      <div className="text-white text-2xl font-bold">MAX</div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                      User Profile
                    </h3>
                    <p className="text-purple-200/70 text-lg leading-relaxed mb-6">
                      Manage your digital identity with advanced security protocols and personalized AI preferences.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-purple-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm">Biometric security</span>
                      </div>
                      <div className="flex items-center gap-3 text-pink-300">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-sm">Privacy controls</span>
                      </div>
                      <div className="flex items-center gap-3 text-purple-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm">AI personalization</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-purple-400 text-lg font-semibold">
                      <span>Manage Profile</span>
                      <div className="w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center group-hover:bg-purple-400/30 transition-colors">
                        <span className="text-sm">→</span>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm">Verified</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Analytics Card - Enhanced */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-indigo-600/5 backdrop-blur-xl rounded-3xl p-8 border border-white/5 overflow-hidden">
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/2 to-blue-500/2 rounded-3xl"></div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/50 via-blue-500/50 to-indigo-600/50 rounded-2xl flex items-center justify-center shadow-2xl">
                        <BarChart3 className="w-10 h-10 text-white/70" />
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full border border-indigo-500/30">
                      <span className="text-indigo-300 text-sm font-medium">Coming Soon</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-4">
                      Analytics Hub
                    </h3>
                    <p className="text-indigo-200/70 text-lg leading-relaxed mb-6">
                      Unlock deep insights with quantum-powered analytics. Advanced visualizations and predictive models.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-indigo-300">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Real-time metrics</span>
                      </div>
                      <div className="flex items-center gap-3 text-blue-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                        <span className="text-sm">Predictive analysis</span>
                      </div>
                      <div className="flex items-center gap-3 text-indigo-300">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-400"></div>
                        <span className="text-sm">Custom dashboards</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-indigo-400 text-lg font-semibold">
                      <span>In Development</span>
                      <div className="w-8 h-8 bg-indigo-400/20 rounded-full flex items-center justify-center">
                        <span className="text-sm animate-pulse">⚡</span>
                      </div>
                    </div>
                    <div className="text-yellow-400 text-sm">Q2 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Section */}
          <div className="mt-12 text-center pb-8">
            <p className="text-slate-500 text-sm mb-4">
              Butuh bantuan? Jelajahi fitur-fitur canggih kami
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-white text-sm hover:bg-white/10 transition-all duration-300">
                📚 Panduan Pengguna
              </button>
              <button className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-white text-sm hover:bg-white/10 transition-all duration-300">
                🚀 Fitur Terbaru
              </button>
              <button className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-white text-sm hover:bg-white/10 transition-all duration-300">
                💬 Dukungan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}