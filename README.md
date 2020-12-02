# Stimulus CheckAll
[![npm version](https://badgen.net/npm/v/stimulus-check-all)](https://www.npmjs.com/package/stimulus-check-all)
[![npm downloads](https://badgen.net/npm/dt/stimulus-check-all)](#)
[![MIT License](https://badgen.net/npm/license/stimulus-check-all)](https://github.com/rbague/stimulus-check-all/blob/master/LICENSE)

A wrapper for [@github/check-all] as a Stimulus Controller.

Keep track of all the changes in the [Changelog](https://github.com/rbague/stimulus-check-all/blob/master/CHANGELOG.md)

## Install
This package assumes that you have [Stimulus](https://stimulusjs.org/handbook/installing) installed and set up.

Install the library in your project with:
```sh
yarn add stimulus-check-all
# or
npm install --save stimulus-check-all
```

And register the controller in your application
```js
import { Application } from "stimulus"
import CheckAll from "stimulus-check-all"

const application = Application.start()
application.register("check-all", CheckAll)
```

You can also use a UMD build directly from UNPKG, which will make the controller globally available as `StimulusCheckAll` (it also bundles `@github/check-all`)
```html
<script src="https://unpkg.com/stimulus/dist/stimulus.umd.js"></script> <!-- Stimulus must be loaded globally -->
<script src="https://unpkg.com/stimulus-check-all@latest/dist/stimulus-check-all.umd.js"></script> <!-- or 'stimulus-check-all.umd.min.js' -->
```

There is also a CommonJS build on UNPKG:
```
https://unpkg.com/stimulus-check-all/dist/stimulus-check-all.js
https://unpkg.com/stimulus-check-all/dist/stimulus-check-all.min.js
```

## Usage

For the most basic usage create a div with some checkboxes.
In the case you want to exclude some checkboxes from the check-all features, add a `data-skip` attribute to those checkboxes.

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

### Targets

All of them are optional, as they are in [@github/check-all].

- `all`: The checkbox used to check all of the other ones in the container
- `count`: Displays the number of selected checkboxes

## Extending controller
You can extend the functionality of the controller using inheritance. Just remember to call super if overriding any of the parent's methods, like `connect` or `disconnect`:

```js
import CheckAllController from 'stimulus-check-all'

export default class extends CheckAllController {
  connect () {
    super.connect()

    // your custom code
  }
}
```

Apart from access to the targets defined in the parent class, the controller exposes three other properties:
- `checkboxes`: All the checkboxes where the check-all feature is applied
- `checked`: The checked checkboxes
- `unchecked`: The unchecked checkboxes

## Contributing

Bug reports and pull requests are more than welcome on [GitHub](https://github.com/github/check-all).

### Coding standards
This project uses Standard to minimize bike shedding related to code formatting.

Please run `npm run lint` prior submitting pull requests.

## License

The software is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

[@github/check-all]: https://github.com/github/check-all
