import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerts";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  let component: ReactNode

  function logout() {

    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', "sucesso")
    navigate('/login')
  }

  if (usuario.token !== "") {
    component = (

      <div className='w-full bg-pink-300 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

          <div className='flex gap-4'>
            <Link to='/postagens' className='hover:underline font-mono'>Postagens</Link>
            <Link to='/temas' className='hover:underline font-mono' >Temas</Link>
            <Link to='/cadastrarTema' className='hover:underline font-mono'>Cadastrar tema</Link>
            <Link to='/perfil' className='hover:underline font-mono'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:underline font-mono'>Sair</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {component}
    </>
  )
}

export default Navbar