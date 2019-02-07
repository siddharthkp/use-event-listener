<p align="center">
  <img src="https://pbs.twimg.com/media/DyKPpD7UwAAVKyH.jpg:large" height="200px"/>
  <br><br>
  <b>Declarative React hook for eventListener</b>
  <br><br/>
  <a href="https://codesandbox.io/s/nnpjwz4nwl">Demo on CodeSandbox</a>
</p>

&nbsp;

#### install

```
npm install use-event-listener
```

&nbsp;

#### usage

```js
import useEventListener from 'use-event-listener'

function Example() {
  const [key, setKey] = useState()

  useEventListener(
    'keydown', // event to listen to
    event => setKey(event.key) // callback
  )

  return <div>{key} was pressed</div>
}
```

[Run on CodeSandbox](https://codesandbox.io/s/nnpjwz4nwl)

&nbsp;

#### but why?

Long answer long: [overreacted.io/making-setinterval-declarative-with-react-hooks/](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
