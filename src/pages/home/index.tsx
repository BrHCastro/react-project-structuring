import { Helmet } from 'react-helmet-async'

import { EmptyState } from './_components/empty-state'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <EmptyState />
    </>
  )
}
