import { useCallback, useEffect, useState, useRef } from 'react'

function App() {

  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef<HTMLInputElement>(null);

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += "!@#$%^&*_-+=[]{}~`";

    for (let i = 0; i < length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>

      <div
        className='w-full max-w-md mx-auto shadow-md px-4 py-3 my-10 bg-slate-800 text-orange-500 rounded-lg'>

        {/* upper div */}
        <h1
          className='text-white text-center my-3 text-xl'>Password Generator</h1>
        <div
          className='flex overflow-hidden mb-4 rounded-lg shadow'>
          <input
            type="text"
            value={password}
            className='w-full py-1 px-3 outline-none'
            placeholder='password'
            ref={passwordRef}
            readOnly
          />
          <button
            className='bg-blue-700 text-white px-2 py-1 outline-none hover:bg-orange-700 active:bg-black'
            onClick={copyPasswordToClipboard}>
            copy
          </button>
        </div>

        {/* lower div */}
        <div
          className='flex gap-x-2 text-sm'>
          {/* lower first div */}
          <div
            className='flex gap-x-1 items-center'>
            <input
              type="range"
              min={4} max={60}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(Number(e.target.value))
              }} />
            <label>Length: {length}</label>
          </div>

          {/* lower second div */}
          <div
            className='flex gap-x-1 items-center'>
            <input
              type="checkbox"
              id='numberInput'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((numberAllowed) => !numberAllowed)
              }} />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              id='charInput'
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((charAllowed) => !charAllowed)
              }} />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}
export default App

