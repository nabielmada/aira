import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { MessageSquare, User, BarChart3 } from 'lucide-react';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

export default function Dashboard() {
  return (
    <div className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Dashboard
          </h1>
          <p className="text-gray-600">
            Choose an option below to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Chat Card */}
          <Link href="/dashboard/chat" className="group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow group-hover:border-blue-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-sm text-gray-500">
                  New
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI Chat
              </h3>
              <p className="text-gray-600 text-sm">
                Start a conversation with our AI assistant. Get help with questions, tasks, and more.
              </p>
            </div>
          </Link>

          {/* User Profile Card */}
          <Link href="/dashboard/user-profile" className="group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow group-hover:border-green-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                User Profile
              </h3>
              <p className="text-gray-600 text-sm">
                Manage your account settings, preferences, and personal information.
              </p>
            </div>
          </Link>

          {/* Analytics Card (Placeholder) */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 opacity-50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-sm text-gray-500">
                Coming Soon
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Analytics
            </h3>
            <p className="text-gray-600 text-sm">
              View your usage statistics and insights from your conversations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}