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
            <img src='/assets/images/xixi.png'/>
            
        </div>
<br />
       
 <hr />
      </section>

      <section className='secao3'> 
        
        <h2 className='texto3'> Aqui oferecemos serviços de qualidade! Confira abaixo: </h2>
        
          <div className='cartao'>
            
             <div className='cartao1'>

              <div className='imagens1'>
              <h1>1- Desenvolvimento Web</h1>
             <img src="/assets/images/web.jfif" alt="" />
              </div>
              
               <div className='imagens2'>
               <h2>2- Cybersegurança</h2>
             <img src="/assets/images/seguranca.jfif" alt="" />
               </div>
             
             </div>

             <div className='cartao2'>

              <div className='imagens3'> 
              <h3 className='uxui'>3- UX&UI</h3>
             <img src="/assets/images/program.jfif" alt="" />
              </div>
            
               <div className='imagens4'>
               <h4>4- Data Analysis</h4>
             <img src="/assets/images/grafico.jfif" alt="" />
               </div>
          
             </div>
           </div>

              <div className='secao4'>
            
            <div className='olhada'> 
              <h1>Dê uma olhada em algumas avaliações</h1>
            </div>
              </div>

     </section>

     </main>


    </div>
  );
}

export default Landing;
