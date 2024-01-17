import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-pink-300 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline font-mono'>Login</Link>
              <Link to='/home' className='hover:underline font-mono'>Home</Link>
              <div className='hover:underline font-mono'>Postagens</div>
              <div className='hover:underline font-mono' >Temas</div>
              <div className='hover:underline font-mono'>Cadastrar tema</div>
              <div className='hover:underline font-mono'>Perfil</div>
              <div className='hover:underline font-mono'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar