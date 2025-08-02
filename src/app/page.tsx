import Card from '@/components/Card';
import Container from '@/components/Container';
import engrenagemImg from '../../public/engrenagem.png';
import curso from '../../public/curso.jpg';


export default function Home() {
  return (
    <div>


      <main className="relative h-screen w-full bg-gray-800 text-white">
        {/* Imagem de fundo 
        <Image
          src={bgImage}
          alt="Imagem de fundo"
          fill
          priority
          className="object-cover brightness-50"
        />*/}

        {/* Conteúdo por cima da imagem */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Nosso Site</h1>
          <p className="text-lg max-w-xl">
            Aqui você encontra informações sobre nossos serviços, cursos, novidades e muito mais. Explore o site e descubra tudo que temos a oferecer.
          </p>
        </div>
      </main>

          {/*Algumas infos*/}
      <section className='p-2 sm:p-0'>
        <Container>
          <br />
          <h1 className="text-4xl font-bold mb-4">Veja oque vc pode encontrar: </h1>
          <br />
          <div className='flex flex-wrap justify-center gap-4'>
            <Card imgHref={engrenagemImg} link='/' titulo='Configurações' descricao='Dicas, orientações claras e tutoriais passo a passo que facilitam o uso do software e configuração dos equipamentos, garantindo que o sistema seja utilizado de forma simples, eficiente e sem complicações.'/>
            <Card imgHref={curso} link='/' titulo='Software' descricao='Este site foi criado para ajudar os usuários e técnicos da empresa a tirarem o máximo proveito do sistema.'/>
          </div>
        </Container>
        <br />
      </section>


    </div>
  );
}
