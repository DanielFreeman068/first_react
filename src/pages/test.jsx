import { MdAccessibleForward } from "react-icons/md";
import {default as Topics} from '../components/Question' 
import {useState} from 'react'
import Button from "../components/Button"

function Test(){
    const sports = "futbol"
    const src = 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg'
    const w = '250', h = '250', alt = 'Dog'
    let info = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et reprehenderit numquam culpa saepe repellat. Consequatur adipisci sunt recusandae fuga.'
    let triggered = []
    // type useState then hit useState Snippet if have Es7 extension
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    //conditional rendering
    // if(triggered.length <= 0){
    //     return(<h1>This rendered first haha</h1>)
    // }
    // let content;
    // if(isLoggedIn){
    //     content = <AdminPanel/>
    // }else{
    //     content = <LoginForm/>
    // }
    //return content

    //any if statements that have a return for things like conditional rendering need to be as close to the return at the bottom as possible
    return (
    <>
        <a href="/">Home</a>
        <Button count={count} onClick={handleClick}/>
        <Button count={count} onClick={handleClick}/>
        <h1>Daniel Freeman</h1>
        <p>Hello, my name is Daniel Freeman</p>
        <h3>{sports}</h3>
        <img src={src} width={w} height={h} alt={alt} />
        <button><MdAccessibleForward size='300px' style={{backgroundColor: 'pink', color: 'aqua'}} /></button>
        <Topics title='Stranger Things' info={info}/>
        {
            triggered.length > 0 ? <h1>Hello Data</h1> : <h1>Nothing Found</h1>
        }
        {/* conditional rendering */}
        {/* {
            isLoggedIn ? (<AdminPanel/>):(<LoginPage/>)
        } */}
    </>
    )
}

export default Test;