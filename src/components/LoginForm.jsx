import logo from '../assets/logo-light.png'
const LoginForm = () => {
  return (
    <section className='flex flex-col justify-center items-center min-h-screen bg-[#F9FAFB]'>
      <div className='flex flex-col items-center'>
      <img src={logo} alt=""  className="w-[170px] px-4 mb-5"/>
      <h3 className=' text-[#374151] text-3xl font-medium'>Log in to your account </h3>
      </div>
      <form action="" className='bg-white shadow-md md:w-[500px] w-[85%] rounded-md p-10 my-10 space-y-5'>
        <section className=' space-y-2'>
          <label htmlFor="email" className='text-[#374151] font-medium '>Email address</label>
          <input type="email" name="email" id="email" autoComplete='email'  className=' border border-gray-400 rounded px-4 py-2 w-full outline-blue-600'/>
        </section>
        <section className=' space-y-2'>
          <label htmlFor="password" className='text-[#374151] font-medium '>Password</label>
          <input type="password" name="password" id="password" autoComplete='password'  className=' border border-gray-400 rounded px-4 py-2 w-full outline-blue-600'/>
        </section>
        <section>
          <button className='bg-blue-600 hover:bg-blue-800 text-white w-full p-3 rounded'>Log in</button>
        </section>
      </form>
    </section>
  )
}

export default LoginForm