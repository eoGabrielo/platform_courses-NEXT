import Image from 'next/image';
import bgImage from '../../public/fundo.jpg'; // Substitua por sua imagem real
import Card from '@/components/Card';
import Container from '@/components/Container';
// Você pode usar uma imagem local ou externa

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
            <Card link='/' titulo='Cursos rocken' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>
            <Card link='/' titulo='Cursos rocken' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>
            <Card link='/' titulo='Cursos rocken' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>
<<<<<<< HEAD
            <Card link='/' titulo='Cursos rocken' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>
            <Card link='/' titulo='Cursos rocken' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>
            <Card link='/' titulo='Cursos rocken' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>
=======
>>>>>>> be62d91 (pagCursos Soft/Tec)
          </div>
        </Container>
        <br />
      </section>


    </div>
  );
}
