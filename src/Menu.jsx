import {Card} from './components/card'
import {data} from './data'

export  function Menu() {
  return (
    <div className='menu'>
      {
        data.map(data => (
          <Card
            key={data.id}
            title={data.title}
            description={data.description}
            price={data.price}
            image={data.image}
          />
        ))
      }
    </div>
  )
}
