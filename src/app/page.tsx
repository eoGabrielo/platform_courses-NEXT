import Card from '@/components/Card';
import Container from '@/components/Container';
import engrenagemImg from '../../public/engrenagem.png';
import curso from '../../public/curso.jpg';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 min-h-screen text-gray-100">

      <main className="relative h-screen w-full">
        {/* Imagem de fundo (se quiser, pode ativar depois) 
        <Image
          src={bgImage}
          alt="Imagem de fundo"
          fill
          priority
          className="object-cover brightness-50"
        /> */}
        
        {/* Conteúdo por cima da imagem */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-cyan-400">
            Bem-vindo ao Nosso Site
          </h1>
          <p className="text-lg max-w-xl text-gray-300">
            Aqui você encontra informações sobre nossos serviços, cursos, novidades e muito mais. Explore o site e descubra tudo que temos a oferecer.
          </p>
        </div>
      </main>

      {/* Algumas infos */}
      <section className="py-12">
        <Container>
          <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 text-center">
            Veja o que você pode encontrar:
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Card
              imgHref={engrenagemImg}
              link="/"
              titulo="Configurações"
              descricao="Dicas, orientações claras e tutoriais passo a passo que facilitam o uso do software e configuração dos equipamentos, garantindo que o sistema seja utilizado de forma simples, eficiente e sem complicações."
            />
            <Card
              imgHref={curso}
              link="/"
              titulo="Software"
              descricao="Este site foi criado para ajudar os usuários e técnicos da empresa a tirarem o máximo proveito do sistema."
            />
          </div>
        </Container>
      </section>

    </div>
  );
}
