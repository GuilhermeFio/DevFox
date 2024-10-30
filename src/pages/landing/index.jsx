import './index.scss';

import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="pagina-Landing">

      <header className='cabecalho'>

        <ul>
          <img className='logo' src='/assets/images/devfox-logo.png' />
          <li className= 'sob'> <a href="#patrocinadores"> PATROCINADORES</a></li>
          <li className= 'por'> <a href="#servicos"> SERVIÇOS</a></li>        
          <li className= 'sup'> <a href="#avaliacoes"> AVALIAÇÕES</a></li>
        </ul>


      </header>

      <main className='principal'>

        <section className='secao1'>

          <h2>A equipe de desenvolvedores que você precisava!</h2>
          <p>Há mais de 10 anos ajudando autônomos, empresários e startups a dar vida às suas ideias!</p>

        </section>


        <section className='secao2' id='patrocinadores'>

          <h2>A frente no mercado com parcerias gigantes, como: </h2>

          <div class="slide-track">
            <div class="slide">
                <img src="/assets/images/BK.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/pepe.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/xixi.png" height="150" width="190" />
            </div>
            <div class="slide">
                <img src="/assets/images/coca-cola-logo-0.png" height="190" width="190" />
            </div>
            <div class="slide">
                <img src="/assets/images/Nescafe-Logo.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/adidas-39.png" height="90" width="100" />
            </div>
            <div class="slide">
                <img src="/assets/images/nike_PNG12.png" height="90" width="170" />
            </div>
            <div class="slide">
                <img src="/assets/images/BK.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/pepe.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/xixi.png" height="150" width="190" />
            </div>
            <div class="slide">
                <img src="/assets/images/coca-cola-logo-0.png" height="190" width="190" />
            </div>
            <div class="slide">
                <img src="/assets/images/Nescafe-Logo.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/adidas-39.png" height="100" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/nike_PNG12.png" height="100" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/BK.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/pepe.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/xixi.png" height="150" width="190" />
            </div>
            <div class="slide">
                <img src="/assets/images/coca-cola-logo-0.png" height="190" width="190" />
            </div>
            <div class="slide">
                <img src="/assets/images/Nescafe-Logo.png" height="150" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/adidas-39.png" height="100" width="150" />
            </div>
            <div class="slide">
                <img src="/assets/images/nike_PNG12.png" height="100" width="150" />
            </div>
        </div>
        </section>

        <section className='secao3'  id='servicos'>

          <h2 className='texto3'> Aqui oferecemos serviços de qualidade! Confira abaixo: </h2>

          <div className='cartao'>

            <div id ='cartao1' className = 'serviços'>

              <h2>1- Desenvolvimento Web</h2>

              <div className='separador'>
              <img src="/assets/images/web.jfif" alt="" />

              <div className='textoinvisivel'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum commodi aliquid cupiditate optio. Aliquam enim officiis, illo sed, expedita quam cumque vel pariatur provident ratione ullam, nihil repellat sapiente.</p>
              </div>
              </div>
            </div>

            <div id ='cartao2' className = 'serviços'>
              <h2>2- Cybersegurança</h2>

              <div className='separador'>
              <img src="/assets/images/seguranca.jfif" alt="" />
              <div className='textoinvisivel'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum commodi aliquid cupiditate optio. Aliquam enim officiis, illo sed, expedita quam cumque vel pariatur provident ratione ullam, nihil repellat sapiente.</p>
              </div>
              </div>
              
            </div>



            <div id ='cartao3' className = 'serviços'>
              <h2 className='uxui'>3- UX&UI</h2>

              <div className='separador'>
              <img src="/assets/images/program.jfif" alt="" />
              <div className='textoinvisivel'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum commodi aliquid cupiditate optio. Aliquam enim officiis, illo sed, expedita quam cumque vel pariatur provident ratione ullam, nihil repellat sapiente.</p>
              </div>
              </div>
            </div>

            <div id ='cartao4' className = 'serviços'>
              <h2>4- Data Analysis</h2>

              <div className='separador'>
              <img src="/assets/images/grafico.jfif" alt="" />
              <div className='textoinvisivel'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum commodi aliquid cupiditate optio. Aliquam enim officiis, illo sed, expedita quam cumque vel pariatur provident ratione ullam, nihil repellat sapiente.</p>
              </div>
              </div>
            </div>


          </div>
        </section>

        <section className='secao4' id='avaliacoes'>

            <h1 className='tituloS4'>Dê uma olhada em algumas avaliações</h1>
          <div className='pessoas'>

            <div className='primeiro'>
              <img src='/assets/images/mulherpoucofeliz.jfif'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eos consectetur cupiditate ullam labore. Labore consequatur dolor impedit, autem eius, necessitatibus praesentium doloribus hic alias adipisci quam? Beatae, error nulla?</p>
            </div>
            <div className='segundo'>
              <img src='/assets/images/mulherfeliz.jfif'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestiae iusto ducimus aliquid pariatur dolor voluptatibus consequuntur cumque soluta nihil earum numquam ratione vel, voluptate alias dolorum autem! Illum, amet.</p>
            </div>
            <div className='terceiro'>
              <img src='/assets/images/homemfeliz.jfif'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat laudantium temporibus nam. Magnam corporis adipisci eveniet placeat totam alias, nobis nemo nostrum ut! Obcaecati qui deleniti esse commodi voluptates?</p>
            </div>
          </div>



          <div className='empresas'>

            <div className='primeiro'>
              <p>Qualidade De Serviço</p>
              <p><img src='/assets/images/star 1.png'/> 4.7/5.0</p>
              <img src='/assets/images/globalTrevo.png'/>
            </div>
            <div className='segundo'>
              <p>Comunicação</p>
              <p><img src='/assets/images/star 1.png'/> 4.9/5.0</p>
              <img src='/assets/images/tradeport.png'/>
            </div>
            <div className='terceiro'>
              <p>Compromisso Com o Cliente</p>
              <p><img src='/assets/images/star 1.png'/> 4.5/5.0</p>
              <img src='/assets/images/startuphero.png'/>
            </div>
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