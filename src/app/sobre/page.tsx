

export default function Sobre() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      <section className="py-12 px-4 max-w-5xl mx-auto text-gray-100">
        {/* Título e descrição */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-cyan-400 mb-3">
            Sobre a Rocken Sistemas
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Na Rocken Sistemas, a inovação é a essência de tudo o que fazemos. Há mais de 20 anos, estamos na vanguarda da tecnologia aplicada ao controle de acesso de pessoas, veículos e mercadorias, oferecendo soluções modernas e eficazes que promovem organização, conveniência e segurança para condomínios e empresas.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🎯</span>
            <h2 className="font-bold text-xl text-cyan-300 mb-2">Missão</h2>
            <p className="text-gray-200 text-center">
              Desenvolver sistemas inovadores e personalizados que facilitem o dia a dia, promovam segurança e excelência para nossos clientes.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🚀</span>
            <h2 className="font-bold text-xl text-cyan-300 mb-2">Visão</h2>
            <p className="text-gray-200 text-center">
              Ser referência nacional em inovação tecnológica para controle de acesso, reconhecida pela qualidade e compromisso com resultados.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">💡</span>
            <h2 className="font-bold text-xl text-cyan-300 mb-2">Valores</h2>
            <ul className="text-left list-disc list-inside text-gray-200 space-y-1">
              <li>Inovação constante</li>
              <li>Compromisso com a qualidade</li>
              <li>Foco no cliente</li>
              <li>Ética e transparência</li>
              <li>Suporte ágil e eficiente</li>
            </ul>
          </div>
        </div>

        {/* Quem somos */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Quem Somos</h2>
          <p className="text-gray-300 mb-4">
            Com mais de 20 anos de mercado, acumulamos uma sólida experiência com centenas de cases de sucesso, consultorias, palestras e cursos. Somos reconhecidos pela mídia e pelo setor como uma empresa de referência em inovação e qualidade tecnológica.
          </p>
          <p className="text-gray-300 mb-4">
            Atuamos com soluções que vão além da segurança, trazendo organização e conveniência para condomínios e empresas. Nosso portfólio inclui automação de portas e portões, biometria facial, leitura de veias e outras tecnologias avançadas, sempre personalizadas conforme a necessidade do cliente.
          </p>
          <p className="text-gray-300 mb-4">
            Além disso, nosso atendimento é ágil e eficiente, acompanhando desde a consultoria inicial até a manutenção contínua dos sistemas, garantindo alta performance e satisfação.
          </p>
        </div>

        {/* Diferenciais */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Por que escolher a Rocken?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔬</span>
              <div>
                <h3 className="font-bold text-gray-100">Tecnologia de ponta</h3>
                <p className="text-gray-300">
                  Utilizamos alta tecnologia para controlar o acesso, garantindo segurança e eficiência.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="font-bold text-gray-100">Experiência e reconhecimento</h3>
                <p className="text-gray-300">
                  Com décadas de experiência, somos referência no setor e na mídia pela qualidade de nossos serviços.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚙️</span>
              <div>
                <h3 className="font-bold text-gray-100">Soluções personalizadas</h3>
                <p className="text-gray-300">
                  Serviços adaptados às necessidades específicas de cada cliente, do básico ao avançado.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-bold text-gray-100">Atendimento e suporte</h3>
                <p className="text-gray-300">
                  Suporte rápido e eficiente desde a consultoria até a manutenção, para máxima tranquilidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contato final */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Vamos conversar?
          </h2>
          <p className="text-gray-200 mb-4">
            Quer saber mais sobre nossos serviços ou iniciar um projeto? <br />
            <a
              href="/contato"
              className="text-cyan-400 underline hover:text-cyan-200 font-bold"
            >
              Entre em contato
            </a>{" "}
            e descubra como podemos ajudar seu condomínio a crescer com tecnologia!
          </p>
        </div>
      </section>
    </div>
  );
}
