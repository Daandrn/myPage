<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// importar aqui os componentes, como exemplo acima
</script>

<template>
    <main>
        <div class="header">
            <h2>{{ titles.projects }}</h2>
        </div>

        <div v-if="projects.length > 0" class="projects">
            <div v-for="(project, index) in projects" :key="index">
                <div>
                    <a :href="project.link" target="_blank" rel="noopener noreferrer">
                        Acesse: {{ project.name }}
                    </a>
                </div>

                <div>
                    <h3>
                        <p><b>Sobre:</b></p>
                    </h3>

                    <div>
                        {{ project.about }}
                    </div>
                </div>

                <div>
                    <h3>
                        <p><b>Tecnologias:</b></p>
                    </h3>

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

        <div class="header">
            <h2>{{ titles.experiences }}</h2>
        </div>

        <div v-if="experiences.length > 0" class="experiences">
            <div v-for="(experience, index) in experiences" :key="index">
                <a :href="experience.link" target="_blank" rel="noopener noreferrer">
                    {{ experience.name }}
                </a>

                <div>
                    <h3>
                        <p><strong>Atividades:</strong></p>
                    </h3>

                    <div>
                        {{ experience.activities }}
                    </div>
                </div>

                <div>
                    <h3>
                        <p><strong>Empresa:</strong></p>
                    </h3>

                    <div>
                        {{ experience.enterprise }}
                    </div>
                </div>

                <div>
                    <h3>
                        <p><strong>Desde:</strong></p>
                    </h3>

                    <div>
                        {{ experience.since }}
                    </div>
                </div>

            </div>
        </div>

        <div v-else>
            <div>
                Não há experiências.
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            titles: {
                projects: "Projetos",
                experiences: "Experiências"
            },
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
                    about: "Esta é minha pagina pessoal, construída para reunir meus projetos, experiências profissionais e meus contatos.",
                    techs: "Construído com Vue.js v3.",
                },
            ],
            experiences: [
                {
                    name: "Analista",
                    enterprise: "Contass Contabilidade e Consultoria",
                    activities: "Levantamento de requisitos de produto, testes E2E, banco de dados",
                    link: "https://www.linkedin.com/in/danillo-rodrigues/details/experience/",
                    since: "2020"
                },
                {
                    name: "Analista de Produto",
                    enterprise: "RDL Sistemas e Aplicativos",
                    activities: "Levantamento de requisitos de produto, testes E2E",
                    link: "https://www.linkedin.com/in/danillo-rodrigues/details/experience/",
                    since: "2023"
                },
            ],
        }
    }
}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;

    height: 100%;
    padding-bottom: 5rem;

    align-items: center;
}

.header {
    height: 5rem;
    margin-top: 4rem;
}

.projects {
    display: flex;
    flex-direction: column;

    gap: 2rem;

    min-width: 100%;

    padding: 0 15rem;
}

.experiences {
    display: flex;
    flex-direction: column;

    gap: 2rem;

    min-width: 100%;

    padding: 0 15rem;
}
</style>