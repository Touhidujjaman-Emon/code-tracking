## Controled elements

- In React, a controlled element is an input element (such as input, textarea, or select) whose value is controlled by the **component's state (by React)**. This means that the component's state is the single source of truth for the element's value, and the element's value is updated automatically when the state changes.

**Why not use dom?**

By controlling the input element's value through the component's state, React can:

- **Keep the state consistent**: Ensure that the input element's value is always in sync with the component's state.
- **Handle changes predictably**: React can handle changes to the input element's value in a predictable way, without worrying about the DOM getting out of sync.
- **Make it easier to manage state**: By controlling the input element's value through the component's state, React makes it easier to manage the application's state and handle complex interactions.

**3 steps to use this technic**

- Define a piece of state

```js
const [description, setDescription] = useState("");
```

- Use that piece of state on the element we want to control

```js
<input type="text" placeholder="Item..." value={description}></input>
```

- update the state

```js
<input
  type="text"
  placeholder="Item..."
  value={description}
  onChange={(e) => setDescription(e.target.value)}
></input>
```
