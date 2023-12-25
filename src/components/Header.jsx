import img from '../assets/bnb.webp';

const Header = () => {
  return (
    <header className='col-span-full row-start-1 row-end-1'>
      <img src={img} alt=""  className='w-6' />
    </header>
  )
}

export default Header