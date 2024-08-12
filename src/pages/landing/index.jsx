import './index.scss';

import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="pagina-Landing">

      <header className='cabecalho'>
        <img className='logo' src='/assets/images/devfox-logo.webp' />

        <nav>
          <ul>
            <li className='sob'>Sobre Nós</li>
            <li className='por'>Portfólio</li>
            <li className='sup'>Suporte</li>
          </ul>
        </nav>

      </header>

      <main className='principal'>

      <section className='secao1'>

        <div className='texto1'>

          <h3>A equipe de desenvolvedores que você precisava!</h3>
          <p>Há mais de 10 anos ajudando autônomos, empresários e startups a dar vida às suas ideias!</p>

        </div>

       <img className='fundo' src='/assets/images/devfox-s1fundo.jpg' />

       </section>



      <section className='secao2'>

     <h2>A frente no mercado com parcerias gigantes, como: </h2>

          <div className='brands'>

            <img src='/assets/images/burguer-king.png' />
            <img className='pepsi' src='/assets/images/pepsipep.png' />
            <img src='/assets/images/xiaomi.png'/>
            
        </div>



      </section>

      <section className='secao3'> 
        
        <h2 className='texto3'> Aqui ofereçemos serviços de qualidade! Confira abaixo: </h2>
        

     </section>

     </main>


    </div>
  );
}

export default Landing;
