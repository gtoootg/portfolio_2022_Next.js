import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import TopLayout from '@/components/TopLayout/TopLayout'

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div>
        <h5>
          {t<string>('test.test')}
        </h5>
      </div>
      <Link href="" locale="ja">
        <a>to Japanese</a>
      </Link>
      <br />
      <Link href="" locale="en">
        <a>to English</a>
      </Link>
      <TopLayout/>
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
