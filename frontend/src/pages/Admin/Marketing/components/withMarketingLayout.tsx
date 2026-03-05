import React from 'react'
import { MarketingLayout } from './MarketingLayout'
import { AdminLayout } from '../../components/AdminLayout'

export function withMarketingLayout<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithLayout = (props: P) => {
    return (
      <MarketingLayout>
        <WrappedComponent {...props} />
      </MarketingLayout>
    )
  }

  ComponentWithLayout.layout = (page: React.ReactNode) => (
    <AdminLayout>{page}</AdminLayout>
  )

  return ComponentWithLayout
}
