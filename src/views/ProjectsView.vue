<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// importar aqui os componentes, como exemplo acima
</script>

<template>
    <main>
        <div class="header">
            <h2>{{ title }}</h2>
        </div>

        <div v-if="projects.length > 0">
            <div v-for="(project, index) in projects" :key="index">
                <div>
                    <h3>Acesse:</h3>

                    <a :href="project.link" target="_blank" rel="noopener noreferrer">
                        {{ project.name }}
                    </a>
                </div>

                <div>
                    <h3>Sobre:</h3>

                    <div>
                        {{ project.about }}
                    </div>
                </div>

                <div>
                    <h3>Tecnologias:</h3>

                    <div>
                        {{ project.techs }}
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div>
                Não há Projetos.
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            title: "Projetos",
            projects: [
                {
                    name: "Finance",
                    link: "https://github.com/Daandrn/finance",
                    about: "Finance é um projeto com objetivo de facilitar o calculo do preço médio dos ativos de renda variável para a declaração de imposto de renda.",
                    techs: "Construído para a web utilizando laravel v10 - php 8.3, blade, html, JavaScript e tailwind.",
                },
                {
                    name: "Api PicPay - Um teste técnico",
                    link: "https://github.com/Daandrn/backend-picpay",
                    about: "Um teste técnico disponibilizado pelo PicPay, para realização de transações e controle de saldo de contas.",
                    techs: "Construído com php 8.3.",
                },
                {
                    name: "GTX Team",
                    link: "https://github.com/Daandrn/GTX-4.0/tree/GTX-3.0",
                    about: "Sendo o primeiro projeto construído por mim, o \"GTX team\" é uma aplicação web para gerenciamento de membros e canais de stream do time/clã Ghost toxic.",
                    techs: "Construído com php 8.1, html, css e JavaScript.",
                },
                {
                    name: "Daandrn Page",
                    link: "/",
                    about: "Esta é minha pagina pessoal, construída para reunir minhas experiências profissionais e meus contatos.",
                    techs: "Construído com Vue.js v3.",
                },
            ]
        }
    }
}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;

    height: 100%;

    align-items: center;
}

.header {
    height: 10rem;
    margin-top: 5rem;
}

.projects {
    border-radius: 0.5rem;

    height: 1.3rem;
    width: 1.3rem;
}
</style>