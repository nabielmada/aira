import { getTranslations, setRequestLocale } from 'next-intl/server';
import ChatInterface from '@/components/ChatInterface';

type IChatPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IChatPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Chat',
  });

  return {
    title: t('meta_title'),
  };
}

export default async function ChatPage(props: IChatPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="h-[calc(100vh-120px)]">
      <ChatInterface />
    </div>
  );
}