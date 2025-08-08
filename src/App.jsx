import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  Users, 
  FileText, 
  Code, 
  Star,
  ArrowRight,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Play,
  Download,
  Target,
  Clock,
  Award
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectUrl: '',
    message: ''
  })

  // Smooth scroll para links âncora
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode integrar com um serviço de email ou formulário
    console.log('Formulário enviado:', formData)
    alert('Obrigado pelo interesse! Entrarei em contato em breve.')
    setFormData({ name: '', email: '', projectUrl: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4 text">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-slate-900">Gustavo Nóbrega</span>
              <Badge variant="secondary" className="hidden sm:inline-flex">QA Especialista</Badge>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-slate-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-slate-700 hover:text-blue-600 transition-colors">
                Como funciona
              </button>
              <button onClick={() => scrollToSection('exemplos')} className="text-slate-700 hover:text-blue-600 transition-colors">
                Exemplos
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-slate-700 hover:text-blue-600 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-slate-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-slate-700 hover:text-blue-600 transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('como-funciona')} className="text-left text-slate-700 hover:text-blue-600 transition-colors">
                  Como funciona
                </button>
                <button onClick={() => scrollToSection('exemplos')} className="text-left text-slate-700 hover:text-blue-600 transition-colors">
                  Exemplos
                </button>
                <button onClick={() => scrollToSection('depoimentos')} className="text-left text-slate-700 hover:text-blue-600 transition-colors">
                  Depoimentos
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-slate-700 hover:text-blue-600 transition-colors">
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Auditoria Técnica de Qualidade para 
              <span className="text-purple-800"> Aplicações Web</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Evite bugs críticos, perda de vendas e insatisfação do usuário. 
              Receba um relatório detalhado com falhas encontradas, sugestões práticas de melhoria e exemplos de automação.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 inline-block">
              <p className="text-lg font-semibold text-slate-800 mb-2">
                <FileText className="inline h-5 w-5 mr-2 text-purple-800" />
                Entregável: Relatório completo + Scripts automatizados com Cypress
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-purple-800 hover:bg-purple-600 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('contato')}
            >
              Quero auditar meu sistema
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* O que é a Auditoria Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              O que é a Auditoria Técnica?
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              Faço uma análise minuciosa da sua aplicação e entrego um relatório com:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Falhas funcionais e visuais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Identificação de bugs, problemas de layout e comportamentos inesperados.</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    Problemas de usabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Análise da experiência do usuário e navegação intuitiva.</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-purple-600 mr-2" />
                    Compatibilidade cross-browser
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Testes em diferentes navegadores e dispositivos móveis.</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-6 w-6 text-orange-600 mr-2" />
                    Scripts Cypress automatizados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Automação de partes críticas como login, checkout e formulários.</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center bg-slate-50 p-8 rounded-lg">
              <p className="text-lg text-slate-700 mb-6">
                <strong>Tudo explicado em linguagem clara — sem enrolação técnica.</strong>
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Ideal para:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center md:justify-start">
                  <Target className="h-5 w-5 text-purple-800 mr-2" />
                  <span>Desenvolvedores que precisam de ajuda com testes</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Target className="h-5 w-5 text-purple-800 mr-2" />
                  <span>Pequenas empresas sem equipe de QA</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Target className="h-5 w-5 text-purple-800 mr-2" />
                  <span>Startups antes de lançar um MVP</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Target className="h-5 w-5 text-purple-800 mr-2" />
                  <span>Donos de software que querem reduzir falhas</span>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-purple-800 mt-8">
                Se você precisa de confiança no sistema, eu posso te ajudar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos Section */}
      <section id="exemplos" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Exemplos Reais
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Play className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Teste automatizado com Cypress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Vídeo demonstrando automação de login e checkout</p>
                  <Button variant="outline" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Ver demonstração
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Relatório técnico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Exemplo de relatório detalhado com falhas encontradas</p>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar amostra
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Antes e depois</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Comparativo visual de melhorias aplicadas</p>
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Ver comparativo
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                Ver mais exemplos ou baixar amostra
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Depoimentos de quem já contratou
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic">
                    "Com a análise do Gustavo, encontramos 9 falhas que passaram despercebidas por meses."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-slate-900">Lucas Ferreira</p>
                  <p className="text-slate-600">Dev Full Stack</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic">
                    "A entrega foi rápida, o relatório muito claro e os testes automatizados nos ajudaram a melhorar nosso processo."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-slate-900">Mariana Costa</p>
                  <p className="text-slate-600">CEO de startup</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona Section */}
      <section id="como-funciona" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Como funciona?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-purple-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Envio da aplicação</h3>
                <p className="text-slate-600">Você me envia a URL da aplicação ou acesso ao sistema</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Análise completa</h3>
                <p className="text-slate-600">Eu faço a análise e crio os testes automatizados</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Entrega em 3 dias</h3>
                <p className="text-slate-600">Relatório técnico, sugestões e scripts Cypress</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Suporte pós-entrega</h3>
                <p className="text-slate-600">Tira-dúvidas por 7 dias</p>
              </div>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-purple-800 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Em até 3 dias úteis você recebe:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Relatório técnico com falhas encontradas</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Sugestões práticas de melhoria</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Scripts Cypress (se aplicável)</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-8 bg-purple-800 hover:bg-purple-600"
                onClick={() => scrollToSection('contato')}
              >
                Começar Auditoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              Planos simples e diretos
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              Pagamento via Pix ou Cartão
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Auditoria Essencial</CardTitle>
                  <div className="text-4xl font-bold text-purple-800 mt-4">R$ 497</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Análise funcional e visual</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Relatório técnico completo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Suporte por 7 dias</span>
                  </div>
                  <Button 
                    className="w-full mt-6 " 
                    variant="outline"
                    onClick={() => scrollToSection('contato')}
                  >
                    Quero esse plano
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-800 hover:border-purple-600 transition-colors relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-800">
                  Mais Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Auditoria + Automação</CardTitle>
                  <div className="text-4xl font-bold text-purple-800 mt-4">R$ 697</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Tudo do plano anterior</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Scripts Cypress de automação incluídos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Vídeo explicando como rodar os testes</span>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-purple-800 hover:bg-purple-600"
                    onClick={() => scrollToSection('contato')}
                  >
                    Quero esse plano
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mim Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Sobre mim
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-16 w-16 text-purple-800" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Sou Gustavo, QA com 5 anos de experiência em empresas de tecnologia. 
                Já atuei em áreas de implantação, suporte, coordenação e qualidade.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Hoje ajudo empresas a melhorar seus sistemas através de testes inteligentes, 
                clareza técnica e automação de processos com Cypress.
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="lg">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="h-5 w-5 mr-2" />
                Ver projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8">
              Solicite sua auditoria agora
            </h2>
            
            <Card className="border-2 border-blue-100">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectUrl" className="block text-sm font-medium text-slate-700 mb-2">
                      Link da aplicação ou descrição do projeto
                    </label>
                    <Input
                      id="projectUrl"
                      name="projectUrl"
                      type="text"
                      required
                      value={formData.projectUrl}
                      onChange={handleInputChange}
                      placeholder="https://meusite.com ou descrição do projeto"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Dúvidas adicionais (opcional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte mais sobre seu projeto ou dúvidas específicas..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-purple-800 hover:bg-purple-00">
                    <Mail className="h-5 w-5 mr-2" />
                    Enviar pedido de orçamento
                  </Button>
                </form>

                <p className="text-sm text-slate-500 text-center mt-4">
                  Seus dados estão seguros. Nunca envio spam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <span className="text-lg font-bold">Gustavo Nóbrega</span>
                </div>
                <p className="text-slate-300">
                  Auditoria Técnica de QA para aplicações web
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Links rápidos</h3>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection('inicio')} className="block text-slate-300 hover:text-white transition-colors">
                    Início
                  </button>
                  <button onClick={() => scrollToSection('como-funciona')} className="block text-slate-300 hover:text-white transition-colors">
                    Como funciona
                  </button>
                  <button onClick={() => scrollToSection('exemplos')} className="block text-slate-300 hover:text-white transition-colors">
                    Exemplos
                  </button>
                  <button onClick={() => scrollToSection('contato')} className="block text-slate-300 hover:text-white transition-colors">
                    Contato
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                    Política de privacidade
                  </a>
                  <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                    Termos de uso
                  </a>
                  <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                    Contato
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center">
              <p className="text-slate-300">
                © 2025 Gustavo Nóbrega • Auditoria Técnica de QA • Desenvolvido por mim • Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

