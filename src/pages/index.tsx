import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import TopLayout from '@/components/TopLayout/TopLayout'

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <TopLayout />
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default Home
