import MainNavigation from '@/components/layout/MainNavigation'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

function Layout(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout