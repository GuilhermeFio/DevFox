import './index.scss';

import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="pagina-Landing">

      <header className='cabecalho'>
        <img className='logo' src='/assets/images/devfox-logo.webp' />

        <nav>
          <ul>
            <li>Sobre Nós</li>
            <li>Portfólio</li>
            <li>Suporte</li>
          </ul>
        </nav>

      </header>

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

            <img src='/assets/images/devfox-s2bk.svg' />
            <img src='/assets/images/devfox-s2pepsi.png' />
            <img src='/assets/images/devfox-s2samsung.avif' />

        </div>



      </section>

      <section className='secao3'> 
        
        <h2 className='texto3'> Aqui ofereçemos serviços de qualidade! Confira abaixo:  </h2>
        
     </section>



    </div>
  );
}

export default Landing;
