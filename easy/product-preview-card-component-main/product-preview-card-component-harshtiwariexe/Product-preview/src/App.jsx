export default function App(){
  return <div className="bg-Cream min-h-screen min-w-full flex items-center justify-center">
    <div className="bg-white h-[550px] sm:h-96 w-72 rounded-md sm:w-[600px] sm:flex shadow-md sm:rounded-md">
      <img src="image-product-desktop.jpg" className="h-1/3 sm:h-full w-full sm:w-1/2 object-cover rounded-t-md sm:rounded-l-md sm:rounded-r-none" alt="" />
      <div className="gap-3 p-4 sm:p-6 sm:w-1/2 ">
        <p className="text-xs tracking-widest text-Dark-grayish-blue">PERFUME</p>
        <h1 id="divv" className="text-black text-3xl tracking-wide font-black">Gabrielle Essence <br />Eau De Parfum</h1>
        <p className="text-Dark-grayish-blue">A floral, solar and voluptuous <br />interpretation composed by oliver <br />Polge, Perfumer-Creator for the House Of Chanel</p>
        <h1 className="text-3xl text-dark-cyan ">$149.99 <span className="text-sm text-Dark-grayish-blue line-through">$169.99</span></h1>
        <button className="bg-dark-cyan flex px-16 py-4 ml-4 mt-3 rounded-lg"><img src="icon-cart.svg" className="object-scale-down"/><p className="text-white ml-2 "> Add to Cart</p></button>
      </div>
    </div>
   </div>
}