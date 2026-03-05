import { withMarketingLayout } from './components/withMarketingLayout'

const MarketingPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

const MarketingPageWithLayout = withMarketingLayout(MarketingPage)

export default MarketingPageWithLayout
