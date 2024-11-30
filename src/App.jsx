import Cards from "./components/Cards"

export default function App() {
  return (
    <>
    <div className=" w-full items-center">
    <h1 className="text-3xl font-bold bg-green-400 rounded-xl px-4 py-2 w-1/6 text-center mx-2 my-4">
      Hello world!
    </h1>
    </div>
        <Cards name=" Anayat " surname =" Ansari "/>
        <Cards name=" Salman " surname= " Khan "/>
    </>
    
    
  )
}