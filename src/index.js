import { Controller } from 'stimulus'
import checkAll from '@github/check-all'

export default class extends Controller {
  static targets = ['checkbox', 'all', 'count']

  connect () {
    this.setAttributes()
    this.subscription = checkAll(this.element)
  }

  disconnect () {
    this.subscription.unsubscribe()
    this.subscription = null
  }

  setAttributes () {
    if (this.hasAllTarget) this.allTarget.setAttribute('data-check-all', '')
    if (this.hasCountTarget) this.countTarget.setAttribute('data-check-all-count', '')

    this.checkboxes.forEach(e => e.setAttribute('data-check-all-item', ''))
  }

  get checkboxes () {
    return this.checkboxTargets
  }

  get checked () {
    return this.checkboxes.filter(checkbox => checkbox.checked)
  }

  get unchecked () {
    return this.checkboxes.filter(checkbox => !checkbox.checked)
  }
}
