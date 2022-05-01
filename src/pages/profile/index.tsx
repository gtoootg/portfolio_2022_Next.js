
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import dynamic from "next/dynamic";
import ProfileMain from '@/components/Profile/ProfileMain'

let ProfileMainDynamic = dynamic(() => import( '@/components/Profile/ProfileMain'), {
  ssr: false,
});

function Profile() {
  const { t } = useTranslation()

  return (
    <>
     <ProfileMainDynamic/>
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

export default Profile
