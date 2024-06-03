import { alpha_spaces as alphaSpaces, email, max, min, required } from '@vee-validate/rules'
import { defineRule, ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
  }
}
