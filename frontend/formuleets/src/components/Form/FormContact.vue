<template>
    <section
        class="min-h-screen dark:text-white flex flex-col md:flex-row justify-center items-center
         bg-cover bg-center bg-fixed w-full bg-no-repeat"
        lazy-background="/static/home/fond.svg"
    >
        <h1
            class="text-red-600 text-4xl m-10 mb-20 w-full md:w-1/3 font-bold italic tracking-wider text-shadow z-10 p-5 text-center uppercase"
            data-aos="fade-right"
        >{{ $t("message.header.contact-us") }}</h1>

        <div class="w-full md:w-2/3 flex justify-center items-center text-black">
            <p
                v-if="formMessage"
                class="text-xl"
                :class="formMessage.type == 'error' ? 'text-red-500' : 'text-green-500'"
            >{{ formMessage.message }}</p>

            <form
                name="contact"
                data-aos="fade-left"
                class="flex flex-col justify-center items-center w-full"
                method="POST"
                @submit="submitForm"
                action="/pages/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                v-if="!formMessage"
            >
                <input type="hidden" name="form-name" value="contact" />

                <input
                    v-model="form.name"
                    class="p-5 m-5 w-3/4 h-10 border border-dark-mode"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    v-model="form.email"
                    class="p-5 m-5 w-3/4 h-10 border border-dark-mode"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    v-model="form.subject"
                    class="p-5 m-5 w-3/4 h-10 border border-dark-mode"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                />
                <textarea
                    v-model="form.message"
                    class="p-5 m-5 w-3/4 h-32 border border-dark-mode"
                    name="message"
                    placeholder="Message"
                ></textarea>

                <div class="flex items-end justify-end md:w-3/4">
                    <button
                        class="bg-red-600 p-3 pl-10 pr-10 text-white disabled:opacity-50 mb-5"
                        :disabled="isDisabled"
                        type="submit"
                    >Send</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: "FormContact",
    props: {
        title: {
            default: true
        }
    },
    data() {
        return {
            form: {
                email: null,
                name: null,
                subject: null,
                message: null
            },
            formMessage: null
        }
    },
    computed: {
        isDisabled() {
            for (const key of Object.keys(this.form)) {
                if (!this.form[key] || this.form[key].trim() == "") {
                    return true;
                }
            }
            return false;
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            let myForm = document.querySelector("form");
            let formData = new FormData(myForm);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    this.form = {
                        email: null,
                        name: null,
                        subject: null,
                        message: null
                    };
                    this.formMessage = { type: "sucess", message: "Form successfully submitted" };
                })
                .catch((error) => this.formMessage = { type: "error", message: error });
        },
    }
}
</script>

<style>
</style>