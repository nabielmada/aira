import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type ISignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignInPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'SignIn' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignInPage(props: ISignInPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background - Clean gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Subtle geometric shapes */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-16 w-24 h-24 bg-indigo-100/40 rounded-2xl rotate-45 blur-lg"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-100/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-32 w-28 h-28 bg-emerald-100/30 rounded-2xl rotate-12 blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-100/40 rounded-full blur-lg"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-rose-100/30 rounded-2xl rotate-45 blur-xl"></div>
        </div>

        {/* Floating dots for visual interest */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-300/60 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-indigo-300/60 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-300/60 rounded-full animate-bounce delay-3000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20">
          
          {/* Left Side - Welcome Section */}
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 lg:p-12 flex flex-col justify-center items-center text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-2xl rotate-12"></div>
              <div className="absolute top-16 left-16 w-16 h-16 border border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-white rounded-2xl rotate-45"></div>
              <div className="absolute bottom-16 right-16 w-20 h-20 border border-white rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center max-w-md">
              {/* Business Logo/Icon */}
              <div className="mb-8">
                <div className="w-28 h-28 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              
              {/* Welcome Text */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Welcome to Aira
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Your trusted business partner. Sign in to access your personalized dashboard and grow your business with confidence.
              </p>
              
              {/* Business features */}
              <div className="space-y-4 text-left max-w-xs mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm text-blue-100 font-medium">Lightning Fast Performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-blue-100 font-medium">Secure & Reliable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-blue-100 font-medium">24/7 Expert Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign In Form */}
          <div className="p-6 lg:p-12 flex flex-col justify-center bg-white/60 backdrop-blur-sm">
            <div className="w-full max-w-md mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Sign In
                </h2>
                <p className="text-gray-600">Welcome back! Please sign in to your account</p>
              </div>

              {/* Clerk Sign In Component */}
              <div className="w-full">
                <SignIn
                  path={getI18nPath('/sign-in', locale)}
                  appearance={{
                    elements: {
                      // Main card styling
                      card: 'shadow-none border-none bg-transparent w-full',
                      
                      // Header styling
                      headerTitle: 'hidden',
                      headerSubtitle: 'hidden',
                      
                      // Form container
                      formContainer: 'space-y-6',
                      
                      // Input fields
                      formField: 'space-y-2',
                      formFieldLabel: 'text-sm font-semibold text-gray-700 block mb-2',
                      formFieldInput: 'w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white text-gray-800 placeholder-gray-400 hover:border-gray-300',
                      
                      // Primary button
                      formButtonPrimary: 'w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 focus:ring-4 focus:ring-blue-300/50 focus:outline-none',
                      
                      // Secondary elements
                      formFieldAction: 'text-sm',
                      formFieldActionLink: 'text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200',
                      
                      // Divider
                      dividerLine: 'bg-gradient-to-r from-transparent via-gray-300 to-transparent',
                      dividerText: 'text-gray-500 text-sm bg-white px-4',
                      
                      // Social buttons
                      socialButtonsBlockButton: 'w-full border-2 border-gray-200 hover:border-gray-300 font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:bg-gray-50 bg-white/80 backdrop-blur-sm flex items-center justify-center space-x-2 text-gray-700',
                      socialButtonsBlockButtonText: 'font-medium',
                      
                      // Footer
                      footerActionLink: 'text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200',
                      
                      // Error messages
                      formFieldError: 'text-red-500 text-sm mt-1',
                      formFieldErrorText: 'text-sm',
                      
                      // Loading state
                      formButtonPrimaryLoading: 'opacity-50 cursor-not-allowed',
                    },
                    variables: {
                      colorPrimary: '#3b82f6',
                      colorBackground: 'transparent',
                      colorInputBackground: 'rgba(255, 255, 255, 0.8)',
                      colorInputText: '#1f2937',
                      colorText: '#374151',
                      colorTextSecondary: '#6b7280',
                      colorShimmer: '#6366f1',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      borderRadius: '0.75rem',
                    },
                  }}
                />
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Your data is protected with enterprise-grade security</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}