<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// importar aqui os componentes, como exemplo acima
</script>

<template>
  <main>
    <div class="header">
      <h2>{{ title }}</h2>
    </div>

    <div v-if="experiences.length > 0">
      <div v-for="(experience, index) in experiences" :key="index">
        <a :href="experience.link" target="_blank" :alt="experience.name" rel="noopener noreferrer">
        </a>

        <div>
          <h3>Empresa:</h3>

          <div>
            {{ experience.enterprise }}
          </div>
        </div>

        <div>
          <h3>Atividades:</h3>

          <div>
            {{ experience.activities }}
          </div>
        </div>

        <div>
          <h3>Desde:</h3>

          <div>
            {{ experience.since }}
          </div>
        </div>

      </div>
    </div>

    <div v-else>
      <div>
        Não há experiencias.
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Experiencias",
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
</style>