new Vue({
    el: '#app',
    data() {
        return {
            errors: [],
            email: '',
            password: '',
            message: 'Login API Calc',
            Usuarios: [],
            msg: [],
            novoUsuario: {
                email: '',
                password: ''
            },

        }
    },

    watch: {
        'novoUsuario.email' (value) {
            // binding this to the data value in the email input
            this.email = value;
            this.validateEmail(value);
        },

    },

    methods: {
        inserirUsuarios() {

            nErros = 0;
            this.errors = [];

            if (!this.validateEmail(this.email)) {
                this.msg['email'] = 'Utilize um e-mail válido.';
                nErros++;
            }


            if (nErros > 0) {

                $('#checkform').submit(function(evt) {
                    evt.preventDefault();
                });

            } else {

                axios.post('https://reqres.in/api/login', this.novoUsuario)
                    .then(res => {
                        this.novoUsuario.email = ''
                        this.novoUsuario.password = ''

                        alert('Você será redirecionado para a pagina')
                        window.location.href = 'http://127.0.0.1:5000/api/calc';
                    })
            }
        },

        checkForm: function(e) {

            nErros = 0;
            this.errors = [];

            if (!this.validateEmail(this.email)) {
                this.msg['email'] = 'Utilize um e-mail válido.';
                nErros++;
            }


            if (nErros > 0) {

                //window.alert(this.msg['email']);
                e.preventDefault();
            } else {

                this.inserirUsuarios();
            }

        },

        validateEmail(value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.msg['email'] = '';
                return true;
            } else {
                this.msg['email'] = 'Utilize um e-mail válido.';
                return false;
            }
        },

    }
})