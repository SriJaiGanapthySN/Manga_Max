
import { useParams } from 'react-router-dom'
import AnimeDetailsContainer from '../components/AnimeDetailsContainer';

const AnimeDetails = () => {
  
  const {id} = useParams<{id:string}>();
  if(!id) return(<p>loading</p>)
  
  return (
    <div>
      <AnimeDetailsContainer id={id}/>
    </div>
  )
}

export default AnimeDetails