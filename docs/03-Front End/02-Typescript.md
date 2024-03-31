### Types vs Interfaces

- Always prefer `type`s instead of `interface`s when working on Blueprint projects. This [video](https://www.youtube.com/watch?v=oiFo2z8ILNo&t=80s) shows why.

```tsx {1-5,13}
// Prefer this
type Props = {
  name: string;
  age: number;
};

// Avoid this
interface Props {
  name: string;
  age: number;
}

type Props = string | number;       // valid
interface Props = string | number;  // invalid
```

### Prop types

- Always add prop types to your components. This will help you and your team understand what props are required and what types they should be.
- The example also shows how to set **default/optional values** for props.

```tsx
type Props = {
  name: string;
  age?: number; // optional
};

export default function MyComponent({ name, age = 20 }: Props) {
  return <div>{name}</div>;
}
```

### Union

```tsx {3}
type Props = {
  name: string;
  age: number | string; // union
};
```

### Intersection

```tsx {10}
type Person = {
  name: string;
  age: number;
};

type Student = {
  studentID: number;
};

type Props = Person & Student; // intersection
```

### Generics

```tsx
type Props<T> = {
  data: T;
};

export default function MyComponent<T>({ data }: Props<T>) {
  return <div>{data}</div>;
}
```

### `tsconfig.json`

- This config file is used to set up TypeScript in your project. You can find it in the root directory of your project.
- This is usually automatically generated for you by Next.js.
- We typically only modify `tsconfig.json` to configure **absolute imports** or **import aliases**.

```js title="tsconfig.json" {3-5,8-10}
...
"lib": ["dom", "dom.iterable", "esnext"],
"paths": {
  "@/_": ["./src/_"]  // import aliases
}
"allowJs": true,
"skipLibCheck": true,
"compilerOptions": {
  "baseUrl": "."      // absolute imports
}
"strict": true,
...
```
