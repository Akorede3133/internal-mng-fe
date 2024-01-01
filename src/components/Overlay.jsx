const Overlay = ( { children }) => {
  return (
    <div className="fixed w-full top-0 left-0 backdrop-blur-sm h-screen z-20 delay-1000 transition-all ">
      { children }
    </div>
  )
}

export default Overlay