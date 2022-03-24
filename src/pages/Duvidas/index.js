import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo2 from '../../assets/logo2.svg';
import { Link } from 'react-router-dom';


export default function Duvidas() {
 return (
    <div>
   <Header/>
   <div className='animation'>
    <div className='frase'>
        <h1> Leer en espanõl</h1>
        <Link to='/preguntas'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Clique aqui
          </Link>
       </div>
       <div  className='circle'></div>
       <svg>
         <filter id="wavy">
           <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite"></animate>
             </feTurbulence>
             <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
           </filter>
       </svg>
       </div>
    <div className=" doc duv">
        <div>
        <h2 class=" d-flex justify-content-start ml-3">DÚVIDAS FREQUENTES </h2>
        <h3 class=" d-flex justify-content-start text-align-center ml-3"> Quero me tornar solicitante de refúgio</h3>
        <h5 class="ml-3 justify-content-start">1)Não tenho documento algum. Posso solicitar o refúgio?</h5>
            <span class="">
            Sim. A ausência de documentos não impede a apresentação e o recebimento da solicitação reconhecimento </span><br /> 
            <span>
                da condição de refugiado. No entanto, se tornará mais complexa a análise do pedido.
            </span>
        </div>
        <h5 class="ml-3 justify-content-start">2)Preciso agendar o atendimento na Polícia Federal?</h5>
            <span class="">
            Cada Polícia Federal possui regras próprias de atendimento. Assim, o ideal é contatar o Departamento de polícia federal</span><br /> 
            <span> mais próximo e consultar sobre a necessidade de agendamento.
            </span>
            <h5 class=" d-flex justify-content-start m-3"> 3)Tenho mais de um documento de identificação. <br/>Qual devo apresentar ao fazer a solicitação de reconhecimento da condição de refugiado?</h5>
            <span >
            Sempre que você tiver o passaporte, utilize-o para solicitar refúgio. </span> <br/> <span>  Se o passaporte não tiver os dados de filiação, então você pode utilizar os documentos abaixo, na seguinte ordem:
                </span> <br/>  <ul>
                    <li > certidão de nascimento;</li>
                    <li > certidão de casamento;</li>
                    <li>
                        certidão consular do país de nacionalidade; ou
                        justificação judicial.
                    </li>
                </ul>
                <span>
                Caso tenha dúvidas, consulte o artigo 68 do Decreto nº 9.199/1997.
                </span>
            <div class=" logo3">
               <img src={logo2}/>
            </div>
        </div>
        <br/>
        <br/>
    <div class="doc duv">
        <h3 class=" d-flex justify-content-start ml-3 ">Sou solicitante do refúgio. E agora?</h3>
        <h5 class="ml-3 justify-content-start">1)O que é o Protocolo de Refúgio? Qual sua validade e como renová-lo?</h5>
            <span class="">
            Como solicitante de reconhecimento da condição de refugiado, o imigrante possui o Protocolo 
            </span> <br/> <span>de Refúgio, que serve como identidade e atesta sua condição migratória regular no país, desde que dentro da validade.  </span> <br/> <span>

            Portanto, é fundamental que este Protocolo esteja dentro da validade enquanto estiver em trâmite o processo de solicitação de reconhecimento da condição de refugiado.
            </span> <br/> <span> O Protocolo possui validade de um ano e deverá ser renovado em qualquer unidade da Polícia Federal. </span> <br/> <span> 
            Em outras palavras: o Protocolo de Refúgio deverá ser renovado a cada ano enquanto o processo estiver em análise pelo Comitê Nacional para os Refugiados (Conare).
            </span> <br/> <span>
            Para renovar seu protocolo, verifique qual é a sua situação:

            </span> <br/> <span>a) se o seu Protocolo de Refúgio ainda não é do Sisconare, você precisa se registrar no Sisconare e preencher o formulário de recadastro.
            </span> <br/> <span> Ao final, será gerado um número de controle que você deverá apresentar em uma unidade da Polícia Federal (PF) para finalizar a renovação.

            </span> <br/> <span> b) se o seu Protocolo de Refúgio já é do Sisconare, basta comparecer à Polícia Federal para renová-lo (verifique a necessidade de agendamento na Polícia Federal).

            </span>
        <h5>2)Como faço para obter o Documento Provisório de Registro Nacional Migratório (DPRNM), previsto no Decreto nº 9.277/2018?</h5>
            <span>
            O Documento Provisório de Registro Nacional Migratório (DPRNM) será processado pela Polícia Federal no momento em que o solicitante pedir refúgio pela primeira vez </span><br />
            <span>             
       ou no momento em que for renovar o Protocolo de Refúgio.
            </span>
            <br/>
            <span className="pb-3">
            Ou seja: o solicitante não precisa adotar nenhuma medida adicional: caso queira pedir refúgio pela primeira vez, deverá cadastrar-se no Sisconare </span> <br/> <span className="ml-3 justify-content-start d-lg-block d-none">
                e preencher o formulário de solicitação de reconhecimento da condição de refugiado; </span> <br/>
                 <span className="d-none d-lg-flex">
                caso já seja solicitante, deverá seguir as orientações de renovação de acordo com o seu caso (realizar recadastro ou apenas agendar atendimento na Polícia Federal).
                </span>

                <h5 className="d-none d-lg-flex">3)Qual a diferença entre o Protocolo de Refúgio e o Documento Provisório de Registro Nacional Migratório (DPRNM)?</h5>
               <span className="d-none d-lg-flex"> O Protocolo de Refúgio é o documento que o solicitante recebe imediatamente ao pedir o reconhecimento da condição de refugiado </span> <br/>
                 <span className="d-none d-lg-flex">
            e será utilizado como documento de identidade até o recebimento do Documento Provisório de Registro Nacional Migratório (DPRNM).
            </span>
            <br/>
                 <span className="d-none d-lg-flex">O DPRNM, previsto no Decreto nº 9.277/2018, passou a ser o documento de identificação de solicitantes de refúgio, em substituição do Protocolo de Refúgio.</span>

                  <br/>
                 <span> LEMBRE-SE: o DPRNM possui validade de um ano, e deve ser renovado anualmente na Polícia Federal.</span>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='doc duv pt-5 mt-5'>
            <h3>Entrevistas de Elegibilidade</h3>
            <h5>1) Posso escolher o modo de realização da entrevista (presencial ou online)?</h5>
            <span>
            Não, a decisão sobre o modo de realização de entrevista é da Coordenação-Geral do Conare.</span> <br/> <span> 
            No entanto, essa decisão é baseada nos dados de contato do solicitante – em especial, no endereço do solicitante.</span> <br/> <span> 
            Assim, é muito importante assegurar que seus dados estejam sempre atualizados.

            </span> <br/> <span> Para atualizar seus dados de contato no Sisconare, acesse o sistema e, após realizar o login, selecione a opção “Atualizar meus dados”. <br/></span>
            <span>
            Ou seja: o solicitante não precisa adotar nenhuma medida adicional: caso queira pedir refúgio pela primeira vez, deverá cadastrar-se no Sisconare </span> <br/> 
            <span>
                e preencher o formulário de solicitação de reconhecimento da condição de refugiado;
                </span> 
                <h5>2) Posso escolher o local de realização da entrevista?</h5>
                <span>
                Não, a decisão sobre o local de realização de entrevista é da Coordenação-Geral do Conare.
                </span> <br/> <span> No entanto, essa decisão é baseada nos dados de contato do solicitante – em especial, no endereço do solicitante.
                </span> <br/> <span> Assim, é muito importante assegurar que seus dados estejam sempre atualizados.

                </span> <br/> <span> Para atualizar seus dados de contato no Sisconare, acesse o sistema e, após realizar o login, selecione a opção “Atualizar meus dados”.
           </span>
           <h5>3) Caso minha entrevista esteja demorando muito, como posso solicitar mais urgência?</h5>
                <span>
                As entrevistas seguem, em regra, ordem cronológica; no entanto, um dos critérios de priorização é a manutenção de dados cadastrais atualizados.
                </span> <br/> <span>  Assegure-se, dessa forma, que os seus dados estão sempre atualizados.
                </span> <br/> <span>  Caso haja mudança de telefone, de e-mail ou de endereço, atualize seus dados no Sisconare, no menu "Atualizar Meus Dados".

                </span> <br/> <span> Lembre-se de que, enquanto o seu pedido de refúgio está em análise, a sua situação migratória no Brasil está regular </span> <br/> 
                <span> 
            pois você possui autorização provisória de residência até a decisão final do Conare (art. 156, §3º, do Decreto nº 9.199/2017 e art. 21 da Lei nº 9.474, de 1997).
           </span>
           </div>
           <br/>
           <br/>
           <br className='d-block d-xl-none'/>
        <div className='doc duv'>
        <h3 class=" d-flex justify-content-start ml-3">Mercado de trabalho</h3>
        <h5 class="ml-3 justify-content-start">1)Como obter acesso a Carteira de Trabalho Digital?</h5>
            <span >
            A Carteira de Trabalho Digital pode ser acessada pelo computador ou ser instalada em Smartphones </span> <br/> 
                <span>  com sistema operacional Android e iOS e funcionará como uma extensão do documento físico.</span> <br/> 
                <span> 
            Veja no site do Ministério da Economia as orientações sobre como acessar a Carteira de Trabalho Digital.
            </span> 
            <h5 class="ml-3 justify-content-start">2) Sou empregador e quero contratar formalmente um<br className='d-block d-lg-none'/> solicitante  de reconhecimento da condição de refugiado.</h5>
            <span>
            Solicitantes de reconhecimento da condição de refugiado estão em condição migratória regular no Brasil e, dessa forma, podem ser contratados formalmente.</span> <br/> 
                <span > 
            O amparo legal de tal autorização está na Lei nº 9.474, de 22 de julho de 1997.
            </span>
            </div>

          <Footer/>
   </div>
 )}