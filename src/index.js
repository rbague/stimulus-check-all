import { Controller } from "stimulus"
import checkAll from "@github/check-all"

export default class extends Controller {
  static targets = ["all", "count"]

  connect() {
    this._setAttributes()
    this.subscription = checkAll(this.element)
  }

  disconnect() {
    this.subscription.unsubscribe()
    this.subscription = null
  }

  _setAttributes() {
    if (this.hasAllTarget) {
      this.allTarget.setAttribute('data-check-all', '')
    }
    if (this.hasCountTarget) {
      this.countTarget.setAttribute('data-check-all-count', '')
    }

    const checkboxes = this.element.querySelectorAll('input[type="checkbox"]:not([data-check-all])')
    checkboxes.forEach(e => e.setAttribute('data-check-all-item', ''))
  }
}
