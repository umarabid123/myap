
import { useState, useCallback} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str +=! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~"
  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>
    <div className="bg-black h-screen w-full">
    <h1 className='text-center text-white text-4xl pt-10 font-bold'>Password Genreater</h1>
    </div>
    </>
  );
}

export default App;
