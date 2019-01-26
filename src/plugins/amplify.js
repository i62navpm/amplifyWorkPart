import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { I18n } from '@aws-amplify/core'
import { AmplifyPlugin } from 'aws-amplify-vue'
import aws_exports from '../aws-exports'

const dict = {
  es: {
    'Sign In Account': 'Entrar en la app',
    'Sign Up Account': 'Registrate en la app',
    Username: 'Email',
    'Enter your username': 'Introduce tu email',
    'Forget your password? ': 'Has olvidado la contraseña? ',
    'Reset password': 'Restablece la contraseña',
    Password: 'Contraseña',
    'Enter your password': 'Introduce tu contraseña',
    'Sign Up': 'Regístrate',
    'No account? ': 'No tienes cuenta? ',
    'Create account': 'Registrate',
    'Sign In': 'Entra',
    'Reset your password': 'Restablece tu contraseña',
    'Back to Sign In': 'Vuelve al login',
    'Send code': 'Enviar código',
    'Username cannot be empty': 'El email no puede estar vacío',
    'User does not exist.': 'El email no existe',
    'Incorrect username or password.': 'Correo o contraseña incorrecta',
    'null failed with error Generate callenges lambda cannot be called..':
      'Completa el formulario',
  },
}

I18n.putVocabularies(dict)
Amplify.configure(aws_exports)
Vue.use(AmplifyPlugin, AmplifyModules)
