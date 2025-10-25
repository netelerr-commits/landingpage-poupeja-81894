import { MessageCircle, Check, TrendingUp, Calendar, Image, Shield, BarChart3, Clock, Target, Star, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { config, getWhatsAppLink } from './config';

function Template() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTA = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <MessageCircle className="text-emerald-600" size={24} />
            <span className="text-lg font-bold text-gray-900">{config.appName}</span>
          </div>
          <button
            onClick={handleCTA}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm rounded-full font-semibold transition-all shadow-lg shadow-emerald-200 hover:shadow-xl"
          >
            Começar Agora
          </button>
        </div>
      </header>

      <section className="pt-16 pb-8 px-4 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Tenha um assistente financeiro que trabalha por você{' '}
              <span className="text-emerald-600">24 horas por dia</span>, direto no WhatsApp
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
              O {config.appName} organiza seus gastos, metas e tarefas de forma automática e sem complicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              <button
                onClick={handleCTA}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-xl shadow-emerald-200 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Comece Agora Mesmo
              </button>
              <button
                onClick={scrollToPricing}
                className="text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
              >
                Ver Planos
                <ChevronDown size={18} />
              </button>
            </div>
          </div>

          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-4">
                <div className="bg-white rounded-lg p-3 mb-2">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-emerald-600" size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Você</p>
                      <p className="text-gray-900 text-sm">Gastei R$ 45 no almoço</p>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-emerald-700">Auxilie</p>
                      <p className="text-gray-900 text-sm">✅ Gasto registrado em "Alimentação"!</p>
                      <p className="text-gray-700 text-xs mt-1">Você gastou R$ 450 em alimentação este mês (75% da sua meta).</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 text-xs mt-3">Registre gastos por texto, voz ou foto - totalmente automático</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Organização financeira sem esforço
            </h2>
            <p className="text-sm md:text-base text-gray-600">Tudo que você precisa em um só lugar</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-5 rounded-xl border border-emerald-100 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mb-3">
                <MessageCircle className="text-white" size={20} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Registre seus gastos por texto, voz ou foto</h3>
              <p className="text-sm text-gray-600">Envie uma mensagem, um áudio ou tire uma foto do cupom fiscal. O Auxilie entende tudo automaticamente.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                <Target className="text-white" size={20} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Receba alertas automáticos de metas e prazos</h3>
              <p className="text-sm text-gray-600">Seja notificado quando estiver perto de atingir sua meta ou quando um prazo importante se aproximar.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                <Clock className="text-white" size={20} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Lembretes de compromissos e tarefas importantes</h3>
              <p className="text-sm text-gray-600">Nunca mais esqueça uma reunião, pagamento ou compromisso. O Auxilie lembra por você.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-xl border border-orange-100 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mb-3">
                <MessageCircle className="text-white" size={20} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Tudo isso direto no seu WhatsApp</h3>
              <p className="text-sm text-gray-600">Sem apps para instalar, sem complicação. Use o WhatsApp que você já conhece e ama.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Veja o Auxilie em ação
            </h2>
            <p className="text-sm md:text-base text-gray-600">Casos de uso reais do dia a dia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <TrendingUp className="text-white" size={48} />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-1">Organização Financeira</h3>
                <p className="text-sm text-gray-600">Registre gastos, acompanhe metas e visualize onde seu dinheiro está indo.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Calendar className="text-white" size={48} />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-1">Compromissos e Lembretes</h3>
                <p className="text-sm text-gray-600">Gerencie tarefas, reuniões e nunca mais perca um prazo importante.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <BarChart3 className="text-white" size={48} />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-1">Relatórios e Gráficos</h3>
                <p className="text-sm text-gray-600">Visualize seus gastos por categoria e período de forma clara e simples.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Funcionalidades completas
            </h2>
            <p className="text-sm md:text-base text-gray-600">Tudo que você precisa para organizar sua vida financeira</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon: Calendar, title: 'Integração com Google Agenda', desc: 'Sincronize seus compromissos automaticamente' },
              { icon: Image, title: 'Envio de comprovantes por imagem', desc: 'Tire foto do cupom e pronto, registrado!' },
              { icon: BarChart3, title: 'Análise de gastos por categoria', desc: 'Saiba exatamente onde você está gastando' },
              { icon: Target, title: 'Histórico de metas alcançadas', desc: 'Acompanhe seu progresso ao longo do tempo' },
              { icon: Shield, title: 'Segurança e privacidade de dados', desc: 'Seus dados protegidos com criptografia' },
              { icon: Clock, title: 'Lembretes inteligentes', desc: 'Alertas personalizados no momento certo' }
            ].map((feature, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <feature.icon className="text-emerald-600 mb-2" size={28} />
                <h3 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              O que nossos usuários dizem
            </h2>
            <p className="text-sm md:text-base text-gray-600">Histórias reais de quem já usa o {config.appName}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: 'Maria Silva',
                role: 'Empreendedora',
                text: 'O Auxilie mudou completamente minha relação com o dinheiro. Agora sei exatamente para onde vai cada centavo!'
              },
              {
                name: 'João Santos',
                role: 'Desenvolvedor',
                text: 'Praticidade total! Registrar gastos pelo WhatsApp é muito mais fácil do que qualquer app que já usei.'
              },
              {
                name: 'Ana Costa',
                role: 'Designer',
                text: 'Finalmente consegui economizar para minha viagem dos sonhos. Os alertas de meta me ajudaram muito!'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Números que impressionam
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">+{config.stats.records}</p>
              <p className="text-xs md:text-sm text-gray-600">Registros processados</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{config.stats.satisfaction}%</p>
              <p className="text-xs md:text-sm text-gray-600">Satisfação dos usuários</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">{config.stats.amount}</p>
              <p className="text-xs md:text-sm text-gray-600">Organizados</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-8 px-4 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Escolha seu plano e comece hoje mesmo
            </h2>
            <p className="text-sm md:text-base text-emerald-50">Simples, transparente e sem surpresas</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Plano Mensal</h3>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-5xl font-bold">{config.plan.currency}{config.plan.price.split('.')[0]}</span>
                  <span className="text-xl">,{config.plan.price.split('.')[1]}</span>
                </div>
                <p className="text-sm text-emerald-100">por {config.plan.period}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-2.5 mb-6">
                  {[
                    'Registros ilimitados de gastos',
                    'Integração com Google Agenda',
                    'Envio de comprovantes por foto',
                    'Relatórios e gráficos detalhados',
                    'Alertas e lembretes inteligentes',
                    'Suporte prioritário via WhatsApp',
                    'Análise de gastos por categoria',
                    'Histórico completo',
                    'Cancele quando quiser'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCTA}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Quero Meu Assistente
                </button>

                <p className="text-center text-gray-500 text-xs mt-3">
                  Pagamento seguro • Cancele quando quiser
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Perguntas Frequentes
            </h2>
            <p className="text-sm md:text-base text-gray-600">Tudo que você precisa saber</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Como funciona o Auxilie?',
                a: 'O Auxilie é um assistente financeiro inteligente que funciona direto no seu WhatsApp. Você envia mensagens de texto, áudio ou fotos de gastos, e ele organiza tudo automaticamente para você. Sem apps para instalar, sem complicação.'
              },
              {
                q: 'Preciso instalar algo?',
                a: 'Não! O Auxilie funciona 100% no WhatsApp. Basta adicionar nosso número e começar a conversar. Nada de baixar apps ou criar contas complicadas.'
              },
              {
                q: 'É seguro usar meus dados?',
                a: 'Absolutamente! Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança. Seus dados financeiros são tratados com o máximo de sigilo e nunca são compartilhados com terceiros.'
              },
              {
                q: 'Posso cancelar quando quiser?',
                a: 'Sim! Não há fidelidade ou taxas de cancelamento. Você pode cancelar sua assinatura a qualquer momento, diretamente pelo WhatsApp, e continua tendo acesso até o fim do período pago.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`text-emerald-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-br from-emerald-600 to-blue-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Pronto para transformar sua vida financeira?
          </h2>
          <p className="text-sm md:text-base mb-6 text-emerald-50">
            Junte-se a milhares de pessoas que já organizam suas finanças com o {config.appName}
          </p>
          <button
            onClick={handleCTA}
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Começar Agora Mesmo
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="text-emerald-400" size={24} />
                <span className="text-xl font-bold">{config.appName} AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Seu assistente financeiro inteligente, direto no WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-3">Links Úteis</h3>
              <ul className="space-y-1.5 text-gray-400 text-sm">
                <li><a href={config.footer.termsUrl} className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href={config.footer.privacyUrl} className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href={config.footer.faqUrl} className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-3">Suporte</h3>
              <button
                onClick={handleCTA}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-xs">
            <p>&copy; 2024 {config.appName} AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleCTA}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="font-bold text-sm pr-1">Falar Agora</span>
        </button>
      </div>
    </div>
  );
}

export default Template;
