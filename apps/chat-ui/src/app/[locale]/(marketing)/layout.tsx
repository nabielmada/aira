// import { getTranslations, setRequestLocale } from 'next-intl/server';
// import Link from 'next/link';
// import { DemoBanner } from '@/components/DemoBanner';
// import { LocaleSwitcher } from '@/components/LocaleSwitcher';
// import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'RootLayout',
  // });

  return (
    <>
      {props.children}
    </>
  );
}
