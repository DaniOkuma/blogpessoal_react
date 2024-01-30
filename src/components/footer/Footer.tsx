﻿﻿import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext, ReactNode } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div className="flex justify-center bg-pink-200 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/DaniOkuma/" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/in/danielle-okuma/" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                  
                            <InstagramLogo size={48} weight='bold' />
                      
                 
                            <FacebookLogo size={48} weight='bold' />
                     
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

export default Footer