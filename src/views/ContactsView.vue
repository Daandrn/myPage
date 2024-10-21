<script setup>
//import iconGithub from '../components/icons/IconGithub.vue';
// importar aqui os componentes, como exemplo acima
</script>

<template>
    <main>
        <div class="header">
            <h2>{{ title }}</h2>
        </div>

        <div v-if="contacts.length > 0" class="contacts">
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
import IconDiscord from '@/components/icons/IconDiscord.vue';

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
                {
                    name: "Discord/daandrn",
                    link: "https://www.discord.com/channels/@367867450915553284",
                    icon: {
                        component: IconDiscord,
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
    padding-bottom: 5rem;

    align-items: center;
}

.header {
    height: 5rem;
    margin-top: 4rem;
}

.contacts {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    min-width: 100%;

    padding: 0 15rem;
}

.contactsIcon {
    border-radius: 0.4rem;

    height: 1.5rem;
    width: 1.5rem;

    background-color: var(--white-text);

    color: black;
}
</style>