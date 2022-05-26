import MediaScroller from '../../../Interactibles/ItemScroller/MediaScroller'
import homeShowcaseData from '../../../../staticFiles/HomeShowcase/home-showcase.json'
import HomeShowcase from './HomeShowcase'
import ProductPreviewCard from '../../../Modules/Cards/ProductPreviewCard'

const Home = () => {
  let cards: JSX.Element[] = []
  
  homeShowcaseData.data.forEach(data => {
    cards.push(<ProductPreviewCard { ...data } />)
  });

  return (
    <div className="[ home ]">
        <HomeShowcase />
        
        <MediaScroller items={cards} />
    </div>
  )
}

export default Home