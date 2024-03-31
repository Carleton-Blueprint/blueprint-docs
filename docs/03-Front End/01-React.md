### Custom Hooks

- Todo (skip in the workshop)

---

### Refs

- Todo (skip in the workshop)

---

### `||` vs `??`

- Nullish coalescing operator.
- Examples [here](https://stackoverflow.com/a/61481631).
- The highlighted line below is problematic. We indicate that the user is **logged out** only when `username` is `null`.
- However, if a user signs up with the username `"false"` (a string), the **highlighted line will not be rendered** (logic error: system assumes user is logged out), which is incorrect.

```tsx {7}
...

const username = "false"; // string if logged in, null if not.

return (
  <div>
    {username || <p>Logged in as: {username}</p>}
  </div>
);

...
```

---

### Key prop

#### Using `uuidv4`

```tsx {9}
import { v4 as uuidv4 } from "uuid";

export default function MyComponent() {
  const items = ["apple", "banana", "cherry"];

  return (
    <ul>
      {items.map((item) => (
        <li key={uuidv4()}>{item}</li>
      ))}
    </ul>
  );
}
```

#### Using `index`

```tsx {9}
export default function MyComponent() {
  const items = ["apple", "banana", "cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={`list-item-${index}`}>{item}</li>
      ))}
    </ul>
  );
}
```
