import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import de from 'vee-validate/dist/locale/de'

const config = {
  locale: 'de',
  inject: false
}

Validator.localize('de', de)
Vue.use(VeeValidate, config)

// Register custom rule for the strong password
const strongPass = 'strong_password'
VeeValidate.Validator.extend(strongPass, {
  getMessage: field => `Das Passwort muss mindestens enthalten: 1 Großbuchstabe, 1 Kleinbuchstabe, 1 Nummer und ein Sonderzeichen (z. B.. _ &? Usw.)`,
  validate: value => {
    var strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%-_?\\^&\\*])(?=.{8,})')
    return strongRegex.test(value)
  }
})

// Register custom rule for discounts number format
const percentage = 'percentage'
VeeValidate.Validator.extend(percentage, {
  getMessage: field => `Der Wert muss in Prozent zwischen 0,00 und 100,00 liegen`,
  validate: value => {
    var percentageRegex = new RegExp('(^100(\\,0{1,2})?$)|(^([1-9]([0-9])?|0)(\\,[0-9]{1,2})?$)')
    return percentageRegex.test(value)
  }
})

// Telephone/Mobile Number validation
const contactNumber = 'contact'
VeeValidate.Validator.extend(contactNumber, {
  getMessage: field => `Ungültige ${field} Erlaube nur Zahlen, + und - Symbol`,
  validate: value => {
    var contactRegex = new RegExp('^\\+*([0-9]+\\-*)+$')
    return contactRegex.test(value)
  }
})

// Currency format validation
const amount = 'amount'
VeeValidate.Validator.extend(amount, {
  getMessage: field => `${field} sollte nur Zahlen, Komma (,) und Punkt (.) enthalten`,
  validate: value => {
    var amountRegex = new RegExp('^\\-*([0-9]{1,1})+(\\.[0-9]{1,3})*(\\,[0-9]{1,2})?$')
    return amountRegex.test(value)
  }
})

// File Mime-type validation(For the component upload-button)
const pdffiletype = 'pdffiletype'
VeeValidate.Validator.extend(pdffiletype, {
  getMessage: field => `Die Datei muss eine PDF-Datei sein`,
  validate: value => {
    var mimeType = 'application/pdf'
    return mimeType === value.type
  }
})

// File Mime-type validation(For the component upload-button)
const pdfsize = 'pdfsize'
VeeValidate.Validator.extend(pdfsize, {
  getMessage: field => `Die PDF-Größe darf nicht größer als 2 MB sein`,
  validate: value => {
    var size = 2000
    return size >= (value.size / 1204)
  }
})
