import { ReactChild, ReactFragment, ReactPortal } from 'react'
import Header from '@/components/header/Header'
import Footer from '../footer/Footer'

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
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
