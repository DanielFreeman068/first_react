import { MdAccessibleForward } from "react-icons/md";
import Question from './Question'

function Test(){
    const sports = "futbol"
    const src = 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg'
    const w = '250', h = '250', alt = 'Dog'
    let info = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et reprehenderit numquam culpa saepe repellat. Consequatur adipisci sunt recusandae fuga.'
    return (
    <>
        <h1>Daniel Freeman</h1>
        <p>Hello, my name is Daniel Freeman</p>
        <h3>{sports}</h3>
        <img src={src} width={w} height={h} alt={alt} />
        <button><MdAccessibleForward size='300px' style={{backgroundColor: 'pink', color: 'aqua'}} /></button>
        <Question title='Stranger Things' info={info}/>
    </>
    )
}

export default Test;