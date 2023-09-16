import NewsItem from '../NewsItem'
import withSkeleton from '../../helpers/hocs/withSkeleton'
import './styles.scss'

const NewsList = ({ news }) => {
  return (
    <ul className="list">
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />
      })}
    </ul>
  )
}
const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton
