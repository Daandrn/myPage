<script setup>
//import iconGithub from '../components/icons/IconGithub.vue';
// importar aqui os componentes, como exemplo acima
</script>

<template>
    <main>
        <div class="header">
            <h2>{{ title }}</h2>
        </div>

        <div v-if="contacts.length > 0" class="box-contacts">
            <div v-for="(contact, index) in contacts" :key="index">
                <a :href="contact.link" target="_blank" rel="noopener noreferrer">

                    <component :is="contact.icon.component" class="contactsIcon" />
                    {{ contact.name }}
                </a>
            </div>
        </div>

        <div v-else>
            <div>
                Não há contatos.
            </div>
        </div>
    </main>
</template>

<script>
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import iconGithub from '@/components/icons/IconGithub.vue';


export default {
    data() {
        return {
            title: "Contatos",
            contacts: [
                {
                    name: "GitHub/daandrn",
                    link: "https://github.com/Daandrn",
                    icon: {
                        component: iconGithub,
                    }
                },
                {
                    name: "LinkedIn/danillo-rodrigues",
                    link: "https://www.linkedin.com/in/danillo-rodrigues/",
                    icon: {
                        component: IconLinkedin,
                    }
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

.contactsIcon {
    border-radius: 0.4rem;

    height: 1.5rem;
    width: 1.5rem;

    background-color: var(--white-text);
}
</style>