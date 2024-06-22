import { useState } from "react"

function App() {

  const [color, setColor] = useState("black");

  return (

    <div className="w-full h-screen duration-200" style = {{ backgroundColor: color }}>
      {/* inset-x-0 defines that left and right inset (margin) of an element to 0.  */}
      <div className=" fixed flex flex-wrap justify-center bottom-16 px-2 inset-x-0">
        <div className=" flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-slate-500 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none text-white font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "red" }}>
            Red</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none text-white font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "green" }}>
            Green</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none text-white font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "blue" }}>
            Blue</button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none text-white font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "olive" }}>
            Olive</button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none text-white font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "gray" }}>
            Gray</button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none text-black font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "yellow"}}>
            Yellow</button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none text-black font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "pink" }}>
            Pink</button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none text-white font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "purple" }}>
            Purple</button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none text-black font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "lavender" }}>
            Lavender</button>
          <button
            onClick={() => setColor("white")}
            className="outline-none text-black font-bold px-3 py-2  shadow-3xl rounded-full"
            style={{ backgroundColor: "white" }}>
            White</button>
          <button
            onClick={() => setColor("black")}
            className="outline-none text-white font-bold px-3 py-2 shadow-3xl rounded-full"
            style={{ backgroundColor: "black" }}>
            Black</button>
        </div>
      </div>
    </div>
  )
}
export default App
