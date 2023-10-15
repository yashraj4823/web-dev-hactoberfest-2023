export default function App(){
  return <div>
   <main className="min-h-screen flex flex-col items-center justify-center bg-Pale-blue">
    <div className="bg-white h-96 w-128 rounded-3xl flex shadow-lg">
      <div className="bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue  w-1/2 rounded-3xl h-full flex flex-col justify-center items-center gap-4">
       <div className="text-Pale-blue font-semibold text-lg mb-3">Your Result</div>
       <div className="text-white bg-gradient-to-b from-Violet-blue to-Light-royal-blue w-32 h-32 rounded-full gap-2 flex flex-col justify-center items-center text-5xl font-bold">90 
       <span className="text-gray-400 text-xs"> of 100</span></div>
       <div className="text-white text-xl font-semibold tracking-wider">Excellent</div>
       <div className="text-Pale-blue text-center text-xs px-6">You scored higher than 97 of the people who taken these test</div>
      </div>
      <div className="px-5 py-8 flex flex-col">
        <h1 className="text-lg font-semibold tracking-wider mb-3">Summary</h1>
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between bg-Light-red-light py-2 pl-2 pr-4  rounded-md">
           <div className="flex text-Light-red-default"> <img src={'./image/icon-reaction.svg'} alt="" />
            <p className="px-1 font-xs">Reaction</p>
           </div>
            <p className="ml-7 font-semibold">95 <span className="text-gray-400 text-md font-normal"> / 100</span></p>
          </li>
          <li className="flex justify-between bg-Orangey-yellow-light py-2 pl-2 pr-4  rounded-md">
           <div className="flex text-Orangey-yellow-default"> <img src={'./image/icon-memory.svg'} alt="" />
            <p className="px-1 font-xs">Memory</p>
           </div>
            <p className="ml-7 font-semibold">91 <span className="text-gray-400 text-md font-normal"> / 100</span></p>
          </li>
          <li className="flex justify-between bg-Green-teal-light py-2 pl-2 pr-4  rounded-md">
           <div className="flex text-Green-teal-default"> <img src={'./image/icon-verbal.svg'} alt="" />
            <p className="px-1 font-xs">Verbal</p>
           </div>
            <p className="ml-7 font-semibold">98 <span className="text-gray-400 text-md font-normal"> / 100</span></p>
          </li>
          <li className="flex justify-between bg-Cobalt-blue-light py-2 pl-2 pr-4  rounded-md">
           <div className="flex text-Cobalt-blue-default"> <img src={'./image/icon-visual.svg'} alt="" />
            <p className="px-1 font-xs">Visual</p>
           </div>
            <p className="ml-7 font-semibold">89 <span className="text-gray-400 text-md font-normal"> / 100</span></p>
          </li>
         
        
        </ul>
        
        <button className="bg-Dark-gray-blue mt-8 text-Pale-blue px-16 py-2 rounded-3xl font-semibold">Continue</button>
      </div>
    </div>
    

   </main>

  </div>
}