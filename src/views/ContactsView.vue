<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
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
                    <img class="contactsIcon" :src="contact.icon" srcset="">
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
export default {
    data() {
        return {
            title: "Contatos",
            contacts: [
                {
                    name: "GitHub",
                    link: "https://github.com/Daandrn",
                    icon: "/src/components/icons/icon-github.png"
                },
                {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/danillo-rodrigues/",
                    icon: "/src/components/icons/icon-linkedin.png"
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
    border-radius: 0.5rem;

    height: 1.3rem;
    width: 1.3rem;
}
</style>