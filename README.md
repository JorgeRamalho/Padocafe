# ☕ Padocafé — Padaria Artesanal

> Sua padaria de verdade.

Site institucional de uma padaria artesanal, desenvolvido com **HTML5, CSS3 e JavaScript puro** (sem frameworks), com foco em design responsivo, acessibilidade e boas práticas de front-end.

## 🌐 Website

Projeto online: [padocafe-murex.vercel.app](https://padocafe-murex.vercel.app/)

📂 Repositório: [github.com/JorgeRamalho/Padocafe](https://github.com/JorgeRamalho/Padocafe)

## 📸 Visão geral

O site apresenta a Padocafé, uma padaria artesanal com pães de fermentação natural, doces caseiros e café especial.

### Seções

| Seção | Descrição |
| --- | --- |
| **Hero Carrossel** | Chamada principal com slides rotativos (forno, vitrine, produtos) |
| **Destaques** | Cards com os produtos em destaque da casa |
| **Cardápio** | Categorias completas: pães, cafés, cafeteria, salgados, bolos, tortas, sucos e doces |
| **Nossa história** | Apresentação da padaria e seus valores |
| **Alerta de Pão 🔔** | Cadastro para receber aviso por WhatsApp ou SMS quando sai uma nova fornada |
| **Visite-nos** | Endereço em Curitiba — PR, horários e fachada da loja |
| **Fale conosco** | Telefone, e-mail e WhatsApp |

## 🛠️ Tecnologias

- **HTML5** semântico (header, nav, main, section, footer)
- **CSS3** com variáveis customizadas, Flexbox e Grid
- **JavaScript** vanilla (menu mobile, header com scroll, carrossel do hero, Alerta de Pão, ano dinâmico no rodapé)
- **Google Fonts** — Fraunces, Source Sans 3 e Caveat
- **SVG** inline para logo e ícones

## ✨ Destaques técnicos

- Layout totalmente **responsivo** (mobile-first)
- **Acessibilidade**: skip link, atributos ARIA, navegação por teclado, textos alternativos
- Menu hambúrguer com estado `aria-expanded`
- Header com efeito de transição ao rolar a página
- **Hero Carrossel**: slides com autoplay, controles e enquadramento por imagem
- **Botão flutuante de WhatsApp** fixo na página
- **Alerta de Pão**: integração com WhatsApp (`wa.me`) e SMS com mensagem pré-preenchida
- Favicon em SVG

## 📂 Estrutura do projeto

```
Projeto-PadocaCafe/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos do site
├── js/
│   └── main.js         # Interações (menu, scroll, Alerta de Pão, ano)
└── images/             # Imagens, logos e ícones SVG
```

## 🚀 Como executar

1. Clone o repositório:

```bash
git clone https://github.com/JorgeRamalho/Padocafe.git
cd Padocafe
```

2. Abra o `index.html` diretamente no navegador, ou rode um servidor local:

```bash
python -m http.server 8000
```

3. Acesse [http://localhost:8000](http://localhost:8000).

## 👨‍💻 Autor

**Jorge R. Barbosa**

- 💼 LinkedIn: [jorge-r-barbosa](https://www.linkedin.com/in/jorge-r-barbosa-aabb0417b/)
- 👾 GitHub: [JorgeRamalho](https://github.com/JorgeRamalho)
- ☎️ Contato: (41) 99143-4153

---

Feito com fermentação natural e café. ☕🍞
