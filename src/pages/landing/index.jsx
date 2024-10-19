import './index.scss';

import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="pagina-Landing">

      <header className='cabecalho'>

        <ul>
          <img className='logo' src='/assets/images/devfox-logo.png' />
          <li className='sob'>PATROCINADORES</li>
          <li className='por'>SERVIÇOS</li>
          <li className='sup'>AVALIAÇÕES</li>
        </ul>


      </header>

      <main className='principal'>

        <section className='secao1'>

          <h2>A equipe de desenvolvedores que você precisava!</h2>
          <p>Há mais de 10 anos ajudando autônomos, empresários e startups a dar vida às suas ideias!</p>


        </section>



        <section className='secao2'>

          <h2>A frente no mercado com parcerias gigantes, como: </h2>

          <div className='brands'>

            <img src='/assets/images/BK.png' />
            <img className='pepsi' src='/assets/images/pepe.png' />
            <img src='/assets/images/xixi.png' />

          </div>
          <br />

          <hr />
        </section>

        <section className='secao3'>

          <h2 className='texto3'> Aqui oferecemos serviços de qualidade! Confira abaixo: </h2>

          <div className='cartao'>

            <div className='cartao1'>

              <h2>1- Desenvolvimento Web</h2>
              <img src="/assets/images/web.jfif" alt="" />
            </div>

            <div className='cartao2'>
              <h2>2- Cybersegurança</h2>
              <img src="/assets/images/seguranca.jfif" alt="" />
            </div>



            <div className='cartao3'>
              <h2 className='uxui'>3- UX&UI</h2>
              <img src="/assets/images/program.jfif" alt="" />
            </div>

            <div className='cartao4'>
              <h2>4- Data Analysis</h2>
              <img src="/assets/images/grafico.jfif" alt="" />
            </div>


          </div>
        </section>

        <section className='secao4'>

          <div className='olhada'>
            <h1>Dê uma olhada em algumas avaliações</h1>
          </div>
        </section>

      </main>

      <footer className='rodape'>
<div className='coluna'><div><i id='insta' class="fa-brands fa-instagram"></i><p>@devfox</p></div><div><i id='x'class="fa-brands fa-x-twitter"></i><p>@devfox</p></div></div>
<div className='coluna'><p>Terms of use</p><p>Privacy Police</p></div>
<div className='coluna'><p>@2024 devfox</p></div>


</footer>


    </div>
  );
}

export default Landing;
