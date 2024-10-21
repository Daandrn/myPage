<script setup>
// importar aqui os componentes, como exemplo acima
</script>

<template>
  <main>
    <div class="header">
      <h2>{{ titles.about }}</h2>
    </div>

    <div class="about">
      <div>
        <p class="p-about">{{ about }}</p>
      </div>
    </div>

    <div class="header">
      <h2>{{ titles.stack }}</h2>
    </div>


    <div v-if="techs.length > 0" class="stack">
      <div v-for="(tech, index) in techs" :key="index">
        <div>
          <div>
            <a :href="tech.link" target="_blank" rel="noopener noreferrer">
              <component :is="tech.icon.component" class="techsIcon" />
              {{ tech.name }}
            </a>
          </div>
        </div>

        <h4>
          <p><b>Versão:</b></p>
        </h4>

        <div>
          {{ tech.version }}
        </div>
      </div>
    </div>

    <div v-else>
      <div>
        Não há Tecnologias.
      </div>
    </div>
  </main>
</template>

<script>
import IconDocker from '@/components/icons/home/IconDocker.vue';
import IconGit from '@/components/icons/home/IconGit.vue';
import IconJavaScript from '@/components/icons/home/iconJavaScript.vue';
import IconLaravel from '@/components/icons/home/IconLaravel.vue';
import IconLinux from '@/components/icons/home/IconLinux.vue';
import IconNginx from '@/components/icons/home/iconNginx.vue';
import IconPhp from '@/components/icons/home/IconPhp.vue';
import IconPostgres from '@/components/icons/home/IconPostgres.vue';
import IconTailwind from '@/components/icons/home/iconTailwind.vue';
import IconVue from '@/components/icons/home/IconVue.vue';

export default {
  data() {
    return {
      titles: {
        about: "Sobre mim",
        stack: "Stack atual"
      },
      about: `
        Graduado em Gestão Pública pela Unimontes e amante de tecnologia, 
        direciono meus esforços para evolução de sistemas para gestão pública, 
        principalmente em relação à gestão municipal e prestação de contas municipais e da saúde. 
        Em 2013 tive meus primeiros contatos com a programação, 
        durante um curso tecnico em informática que tinha como foco o desenvolvimento web, com php, banco de dados e redes. 
        Hoje mantenho os estudos para o desenvolvimento web principalmente no universo php.
      `,
      techs: [
        {
          name: "PHP",
          version: "7.4 - 8.3",
          link: "https://www.php.net",
          icon: {
            component: IconPhp,
          }
        },
        {
          name: "Laravel",
          version: "10",
          link: "https://laravel.com",
          icon: {
            component: IconLaravel,
          }
        },
        {
          name: "Postgres",
          version: "15-16",
          link: "https://www.postgresql.org",
          icon: {
            component: IconPostgres,
          }
        },
        {
          name: "Git",
          version: "lt",
          link: "https://git-scm.com",
          icon: {
            component: IconGit,
          }
        },
        {
          name: "Tailwindcss",
          version: "lt",
          link: "https://tailwindcss.com",
          icon: {
            component: IconTailwind,
          }
        },
        {
          name: "JavaScript",
          version: "lt",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          icon: {
            component: IconJavaScript,
          }
        },
        {
          name: "Vue",
          version: "3",
          link: "https://vuejs.org",
          icon: {
            component: IconVue,
          }
        },
        {
          name: "Wsl/Linux",
          version: "Ubuntu 22.04",
          link: "https://ubuntu.com/desktop/wsl",
          icon: {
            component: IconLinux,
          }
        },
        {
          name: "Docker",
          version: "lt",
          link: "https://www.docker.com",
          icon: {
            component: IconDocker,
          }
        },
        {
          name: "Nginx",
          version: "lt",
          link: "https://nginx.org/en/",
          icon: {
            component: IconNginx,
          }
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

.about {
  display: flex;
  flex-direction: column;

  gap: 1rem;

  min-width: 100%;

  padding: 0 15rem;

  text-align: justify;
}

.p-about {
  text-indent: 3rem;
}

.stack {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 1rem;

  min-width: 100%;

  padding: 0 15rem;
}

.techsIcon {
  border-radius: 0.4rem;

  height: 1.5rem;
  width: 1.5rem;

  background-color: var(--white-text);

  color: black;
}
</style>