import Container from "@/components/Container";

export default function Sobre() {
  return (
    <Container>
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Sobre a Rocken Sistemas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformando ideias em soluções digitais inovadoras para
            impulsionar o seu negócio.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🎯</span>
            <h2 className="font-bold text-xl text-gray-800 mb-1">Missão</h2>
            <p className="text-gray-600 text-center">
              Oferecer soluções tecnológicas de alta qualidade, promovendo
              inovação, eficiência e crescimento sustentável para nossos
              clientes.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🚀</span>
            <h2 className="font-bold text-xl text-gray-800 mb-1">Visão</h2>
            <p className="text-gray-600 text-center">
              Ser referência nacional em desenvolvimento de sistemas,
              reconhecida pela excelência, criatividade e compromisso com
              resultados.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">💡</span>
            <h2 className="font-bold text-xl text-gray-800 mb-1">Valores</h2>
            <ul className="text-gray-600 text-left list-disc list-inside">
              <li>Inovação e criatividade</li>
              <li>Ética e transparência</li>
              <li>Foco no cliente</li>
              <li>Trabalho em equipe</li>
              <li>Compromisso com resultados</li>
            </ul>
          </div>
        </div>

        {/* Sobre a empresa */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quem somos
          </h2>
          <p className="text-gray-700 mb-4">
            Fundada em 2022, a{" "}
            <span className="font-semibold text-blue-700">Rocken Sistemas</span>{" "}
            nasceu com o propósito de transformar a experiência digital de
            empresas e pessoas. Nossa equipe é formada por profissionais
            experientes e apaixonados por tecnologia, sempre em busca das
            melhores práticas e tendências do mercado.
          </p>
          <p className="text-gray-700 mb-4">
            Atuamos no desenvolvimento de sistemas web, aplicativos, consultoria
            em TI e automação de processos. Nosso diferencial está na
            proximidade com o cliente, no atendimento personalizado e na busca
            constante por inovação e excelência.
          </p>
        </div>

        {/* Diferenciais */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Por que escolher a Rocken?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h3 className="font-bold text-gray-700">
                  Atendimento personalizado
                </h3>
                <p className="text-gray-600">
                  Entendemos as necessidades de cada cliente e entregamos
                  soluções sob medida.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="font-bold text-gray-700">
                  Segurança e confiabilidade
                </h3>
                <p className="text-gray-600">
                  Priorizamos a proteção dos dados e a estabilidade dos sistemas
                  desenvolvidos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-bold text-gray-700">Agilidade</h3>
                <p className="text-gray-600">
                  Processos ágeis para entregar resultados rápidos e eficientes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌎</span>
              <div>
                <h3 className="font-bold text-gray-700">Sustentabilidade</h3>
                <p className="text-gray-600">
                  Compromisso com práticas responsáveis e impacto positivo na
                  sociedade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chamada para contato */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Vamos conversar?
          </h2>
          <p className="text-gray-700 mb-4">
            Quer saber mais sobre nossos serviços ou iniciar um projeto? <br />
            <a
              href="/contato"
              className="text-blue-700 underline hover:text-blue-900 font-bold"
            >
              Entre em contato
            </a>{" "}
            e descubra como podemos ajudar sua empresa a crescer com tecnologia!
          </p>
        </div>
      </section>
    </Container>
  );
}
