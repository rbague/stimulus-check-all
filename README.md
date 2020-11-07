# Stimulus CheckAll
![npm version](https://badgen.net/npm/v/stimulus-check-all)
![npm downloads](https://badgen.net/npm/dt/stimulus-check-all)
![license](https://badgen.net/npm/license/stimulus-check-all)

A wrapper for [@github/check-all] as a Stimulus Controller

## Install
This package assumes that you have [Stimulus](https://stimulusjs.org/handbook/installing) installed and set up.

Install it in your project:
```sh
yarn add stimulus-check-all
# or
npm install --save stimulus-check-all
```

Or you can use UMD build directly from UNPKG, which then will be globally available as `StimulusCheckAll`, and bundles `@github/check-all`:
```html
<script src="https://unpkg.com/stimulus/dist/stimulus.umd.js"></script> <!-- Stimulus need to be loaded globally -->
<script src="https://unpkg.com/stimulus-check-all@latest/dist/stimulus-check-all.umd.js"></script> <!-- or '/dist/stimulus-check-all.umd.min.js' -->
```

There is also a CommonJS build on UNPKG:
```
https://unpkg.com/stimulus-check-all/dist/stimulus-check-all.js
https://unpkg.com/stimulus-check-all/dist/stimulus-check-all.min.js
```

## Usage

For the most basic usage, register the controller in the application and create a div with some checkboxes.
In the case you want to exclude some checkboxes from the check-all features, add a `data-skip` attribute to the checkbox.

### HTML
```html
<div data-controller="check-all">
  <div>Count: <span data-target="check-all.count">0</span></div> <!-- optional -->
  <label><input type="checkbox" data-target="check-all.all"> Check All</label> <!-- optional -->
  <label><input type="checkbox"> github/fetch</label>
  <label><input type="checkbox"> github/textarea-autosize</label>
  <label><input type="checkbox"> github/eventlistener-polyfill</label>
  <label><input type="checkbox"> github/quote-selection</label>
  <label><input type="checkbox" data-skip> skip-this-one</label> <!-- this one is skipped -->
</div>
```

### JS
```js
import { Application } from "stimulus"
import CheckAll from "stimulus-check-all"

const application = Application.start()
...
application.register("check-all", CheckAll)
```

### Targets

All of them are optional, as they are in [@github/check-all].

- `all`: The checkbox used to check all of the other ones in the container
- `count`: Displays the number of selected checkboxes

## Extending controller
You can extend the functionality of the controller using inheritance. Just remember to call super if overriding `connect` or `disconnect`:

```js
import CheckAllController from 'stimulus-check-all'

export default class extends CheckAllController {
  connect () {
    super.connect() // don't forget this line

    // custom code
  }

  disconnect () {
    super.disconnect() // don't forget this line

    // custom code
  }
}
```

The controller provides three different properties:
- `this.checkboxes`: All the checkboxes where the check-all feature is applied
- `this.checked`: The checked checkboxes
- `this.unchecked`: The unchecked checkboxes

## License

The software is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

[@github/check-all]: https://github.com/github/check-all
