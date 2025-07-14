# Aprenda Python Passo a Passo

Este projeto é uma plataforma de aprendizado interativa para conceitos de programação em Python, desde o básico até tópicos avançados de desenvolvimento web.

---

## Estrutura do Projeto

seu_projeto_python/
├── index.html                  # Página inicial
├── estilo.css                  # Estilos CSS globais da plataforma
├── script.js                   # Funções JavaScript (ex: copiar código)
├── logo.png                    # Imagem do logo
├── github-icon.png             # Ícone do GitHub
├── linkedin.png                # Ícone do LinkedIn
├── twitter.png                 # Ícone do Twitter
│
├── ... (outras páginas de conteúdo como variaveis.html, loops.html, etc.) ...
│
├── web_scraping.html           # Página sobre Web Scraping
│
├── app.py                      # NOVO: Script Python para a aplicação Flask
├── flask_intro.html            # NOVO: Página de introdução ao Flask
│
├── templates/                  # NOVA PASTA: Contém os templates HTML do Flask (Jinja2)
│   ├── index.html              # Template da página inicial do Flask
│   ├── sobre.html              # Template da página "Sobre" do Flask
│   ├── formulario.html         # Template do formulário de contato do Flask
│   ├── contador.html           # Template para o exercício do contador (Flask)
│   └── todo.html               # Template para o exercício da lista de tarefas (Flask)
│
└── static/                     # NOVA PASTA: Contém arquivos estáticos para o Flask
└── css/
└── style.css           # NOVO: Estilos CSS específicos para as páginas Flask

---

## Como Rodar e Navegar no Projeto

### Para o Conteúdo Estático (Páginas HTML):

Basta abrir qualquer arquivo `.html` diretamente no seu navegador. Para uma experiência completa, comece com `index.html`.

### Para a Aplicação Web Flask:

1.  **Pré-requisitos:** Certifique-se de ter Python instalado (versão 3.6 ou superior é recomendada).
2.  **Configurar Ambiente Virtual:**
    * Abra seu terminal na raiz do projeto.
    * Crie um ambiente virtual (se ainda não tiver um):
        ```bash
        python -m venv venv
        ```
    * Ative o ambiente virtual:
        * No Windows:
            ```bash
            .\venv\Scripts\activate
            ```
        * No macOS/Linux:
            ```bash
            source venv/bin/activate
            ```
3.  **Instalar Dependências:**
    * Com o ambiente virtual ativado, instale o Flask:
        ```bash
        pip install Flask
        ```
    * *(Opcional, mas recomendado para o Web Scraping):* Instale as bibliotecas para web scraping se ainda não o fez:
        ```bash
        pip install requests beautifulsoup4
        ```
4.  **Rodar a Aplicação Flask:**
    * Com o ambiente virtual ativado e as dependências instaladas, execute o arquivo `app.py`:
        ```bash
        python app.py
        ```
    * Você verá uma mensagem no terminal indicando que o servidor está rodando, geralmente em `http://127.0.0.1:5000/`.
    * Abra seu navegador e acesse essa URL para interagir com a aplicação Flask.

---

## Instruções para Integrar Novas Seções (Desenvolvedores)

Ao adicionar novas páginas de conteúdo ou funcionalidades, siga estas diretrizes:

1.  **Crie a Nova Página HTML:**
    * Crie um novo arquivo `.html` na raiz do projeto para o novo tópico (ex: `novo_topico.html`).
    * Inclua o cabeçalho, rodapé e o menu de navegação padrão.

2.  **Atualize o Menu de Navegação:**
    * Edite **todas as suas páginas de conteúdo HTML existentes** (incluindo `index.html`, `web_scraping.html`, `flask_intro.html`, etc.) para adicionar um link para a nova página no elemento `<nav class="main-menu">`.
    * Exemplo:
        ```html
        <li><a href="novo_topico.html">XX. Novo Tópico Fascinante</a></li>
        ```
    * A ordem deve seguir a sequência lógica do aprendizado.

3.  **Para Conteúdo Específico do Flask:**
    * **Arquivos Python:** Adicione novas rotas e lógica ao `app.py` ou crie novos módulos Python conforme a complexidade cresce.
    * **Templates:** Se a nova funcionalidade Flask precisar de uma interface, crie os arquivos `.html` correspondentes dentro da pasta `templates/`.
    * **Estilos/Scripts Estáticos:** Se precisar de CSS ou JavaScript específico, adicione os arquivos a `static/css/` ou `static/js/` e referencie-os nos seus templates Flask usando `url_for('static', filename='...')`.

4.  **Verificação de Caminhos e Ativos:**
    * Sempre verifique se os caminhos para imagens (`logo.png`, `github-icon.png`, etc.) e scripts (`script.js`) estão corretos em todas as novas páginas e templates.
    * Garanta que a função `copyCode()` (do `script.js`) esteja disponível e funcionando para todos os blocos de código.

5.  **Consistência de Estilos:**
    * Mantenha a consistência visual. Se você adicionar estilos específicos para as páginas Flask em `static/css/style.css`, considere se esses estilos são genéricos o suficiente para serem movidos para o `estilo.css` principal, ou se devem permanecer separados para modularidade.

6.  **Documentação (Este README):**
    * Se o projeto crescer e novas estruturas de pastas ou dependências forem adicionadas, atualize este `README.md` para refletir as mudanças.

---

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões para melhorar o conteúdo, exemplos de código ou a estrutura do projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

## Licença

Este projeto está licenciado sob a Licença MIT.



Instruções para Integrar a Nova Página e os Arquivos Flask:
Crie a nova página HTML: Salve o primeiro bloco de código (o HTML da página de conteúdo) como flask_database.html na raiz do seu projeto.

Atualize app.py: Substitua o conteúdo do seu app.py atual (ou adicione o novo código) com o código completo fornecido na seção "Código para app.py" (que inclui a configuração, os modelos e todas as rotas CRUD).

Crie novos arquivos de template: Salve cada um dos blocos de código dos templates HTML (de adicionar_usuario.html a editar_post.html) na sua pasta templates/.

Atualize o menu de navegação: Edite todas as suas outras páginas HTML (como index.html, flask_intro.html, etc.) para adicionar o link para a nova página no elemento <nav class="main-menu">:

HTML

<li><a href="flask_database.html">21. Flask e Banco de Dados (SQLite)</a></li>
Verifique a estrutura de pastas: Sua estrutura deve se parecer com:

seu_projeto/
├── app.py
├── flask_database.html
├── templates/
│   ├── adicionar_usuario.html
│   ├── listar_usuarios.html
│   ├── ver_usuario.html
│   ├── editar_usuario.html
│   ├── adicionar_post.html
│   ├── listar_posts.html
│   ├── ver_post.html
│   ├── editar_post.html
│   ├── (outros templates como index.html, sobre.html, etc.)
└── static/
    └── css/
        └── style.css
Verifique os caminhos e arquivos estáticos: Confirme que logo.png, github-icon.png, linkedin.png, twitter.png estão corretos e que script.js e static/css/style.css (com os estilos para formulários e mensagens flash) estão funcionando.

Instruções para Integrar a Nova Página e os Arquivos Flask:
Crie a nova página HTML: Salve o primeiro bloco de código (o HTML da página de conteúdo) como flask_auth.html na raiz do seu projeto.

Atualize app.py: Com cuidado, integre o novo código Flask (importações do Flask-Login, configuração do LoginManager, modificação do modelo Usuario, função user_loader, e as novas rotas de register/login/logout e exemplos de proteção) ao seu arquivo app.py existente. Não substitua seu app.py inteiro, pois você já tem as rotas do capítulo anterior.

Crie novos arquivos de template: Salve register.html e login.html na sua pasta templates/.

Atualize o menu de navegação: Edite todas as suas outras páginas HTML (como index.html, flask_intro.html, flask_database.html, etc.) para adicionar o link para a nova página no elemento <nav class="main-menu">:

HTML

<li><a href="flask_auth.html">22. Flask: Autenticação e Autorização</a></li>
E, mais importante, atualize os blocos de menu condicional com {% if current_user.is_authenticated %} em TODOS os seus arquivos HTML que contêm o menu de navegação, para que os links de login/logout/registro apareçam dinamicamente.

Atualize static/css/style.css: Adicione os estilos para as mensagens flash fornecidos na seção 9 ao seu arquivo CSS.

Gerencie as Mudanças no Banco de Dados:

Opção Simples (Perde Dados): Se você está em desenvolvimento e não tem dados importantes, pode simplesmente apagar o arquivo site.db da raiz do seu projeto. Quando você rodar python app.py novamente, db.create_all() criará um novo banco de dados com a nova coluna password_hash no modelo Usuario.

Opção Recomendada (Mantém Dados): Para não perder os dados existentes, você precisaria usar Flask-Migrate. Se você já tem a ferramenta instalada e configurada (conforme menção na seção 8 do capítulo anterior), os passos seriam:

flask db migrate -m "Add password_hash to Usuario"

flask db upgrade

Isso criará uma migração e aplicará a mudança na sua tabela Usuario existente.

Teste a aplicação:

Rode python app.py.

Navegue até /register e crie um novo usuário.

Tente fazer login com as credenciais.

Nente acessar rotas protegidas (como /adicionar_post) sem estar logado e veja se você é redirecionado.

Faça logout.

Instruções Finais para Integração:
Crie flask_wtf_forms.html: Salve o primeiro bloco de código (o HTML da página de conteúdo) como flask_wtf_forms.html na raiz do seu projeto.

Crie forms.py: Salve o código fornecido para forms.py em um novo arquivo com este nome, na mesma pasta do seu app.py.

Atualize app.py:

Adicione a importação: Certifique-se de adicionar from forms import RegistrationForm, LoginForm, PostForm no início do seu app.py.

Substitua as rotas: Copie e cole as versões REFATORADAS das rotas register, login e adicionar_post no seu app.py, substituindo as versões anteriores que não usavam Flask-WTF. Mantenha suas outras rotas intactas.

Atualize os Templates: Substitua o conteúdo dos seus arquivos templates/register.html, templates/login.html e templates/adicionar_post.html com as novas versões fornecidas acima.

Atualize o menu de navegação: Edite todas as suas outras páginas HTML (como index.html, flask_auth.html, etc.) para adicionar o link para a nova página no elemento <nav class="main-menu">:

HTML

<li><a href="flask_wtf_forms.html">23. Flask: Formulários com Flask-WTF</a></li>
Teste a aplicação:

Rode python app.py.

Acesse as rotas de registro, login e adicionar post.

Tente enviar formulários com dados inválidos para ver os validadores em ação.

Observe a URL do navegador. form.validate_on_submit() lida com GET e POST na mesma rota, mantendo a URL limpa.