import { Controller } from 'stimulus'
import checkAll from '@github/check-all'

const isChecked = (el) => el.checked

export default class extends Controller {
  static targets = ['all', 'count']

  connect () {
    this._setAttributes()
    this._subscription = checkAll(this.element)
  }

  disconnect () {
    this._subscription.unsubscribe()
    this._subscription = null
  }

  _setAttributes () {
    if (this.hasAllTarget) {
      this.allTarget.setAttribute('data-check-all', '')
      if (this.checkboxes.every(isChecked)) {
        this.allTarget.checked = true
      } else {
        this.allTarget.indeterminate = this.checkboxes.some(isChecked)
      }
    }
    if (this.hasCountTarget) {
      this.countTarget.setAttribute('data-check-all-count', '')
    }

    this.checkboxes.forEach(e => e.setAttribute('data-check-all-item', ''))
  }

  get checkboxes () {
    const selector = 'input[type="checkbox"]:not([data-check-all]):not([data-skip])'
    const elements = this.element.querySelectorAll(selector)
    return Array.from(elements)
  }

  get checked () {
    return this.checkboxes.filter(checkbox => checkbox.checked)
  }

  get unchecked () {
    return this.checkboxes.filter(checkbox => !checkbox.checked)
  }
}
