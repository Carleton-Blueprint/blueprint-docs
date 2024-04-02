Link to [docs](https://tailwindcss.com/docs/installation)

### Tailwind Utilities

- Media queries `sm:`, `md:`, `hover:`, etc
- `mx-auto`, `my-auto`
- `spacing-x-4`, `spacing-y-4`
- `flex-1` (flex-grow: 1, flex-shrink: 1, flex-basis: 0)

### Blueprint Theme

#### Colors

In [tailwind.config.ts](https://github.com/Carleton-Blueprint/carleton-blueprint.github.io/blob/dev/tailwind.config.ts), we have a custom color theme that we use throughout the site. This is how we define it:

```tsx title="tailwind.config.js"
blueprint: {
  50: "#E7F2FE",
  100: "#aed9ff",
  200: "#7dbdff",
  300: "#4aa3ff",
  400: "#1a89ff",
  500: "#006fe6",
  600: "#0056b4",
  700: "#003e82",
  800: "#002551",
  900: "#000d21",
  DEFAULT: "#006fe6",
},
```

Example usage:

```tsx
// Font color with weightage
<h2 className="text-blueprint-700"> ... </h2>

// Background color
<div className="bg-blueprint"> ... </div>
```

#### Container

We impose a max-width on the container wrapping all website content. This is how we define it:

```tsx title="tailwind.config.js"
container: {
  center: true,
  padding: {
    DEFAULT: "2rem",
  },
  screens: {
    sm: "600px",
    md: "728px",
    lg: "944px",
    xl: "1000px",
    "2xl": "1256px",
  },
},
```

This is just a "good-to-know", you would probably not have to modify this any time soon.

### Weird bugs

#### PurgeCSS

https://github.com/tailwindlabs/tailwindcss/discussions/3461

There's this weird issue that's caused by PurgeCSS (which comes with Tailwind). It purges all unecessary classes from the CSS file, but some times it goes too far and purges our classes which are generated in Javascript dynamically.

For example, if we have a class like this, and we set `NAV_BREAKPOINT='md'`:

```tsx title="src/app/_components/NavbarMobile.tsx"
<div className={`${NAV_BREAKPOINT}:hidden`}>...</div>
```

We would expect the final div to have the class `md:hidden`, but it doesn't. This is because PurgeCSS doesn't know that we've set `NAV_BREAKPOINT='md'` dynamically using a template literal, so it removes the `hidden` class altogether.

A solution to this problem is described in this [GitHub discussion](https://github.com/tailwindlabs/tailwindcss/discussions/3461).

```tsx title="src/app/_components/NavbarMobile.tsx"
const NAV_BREAKPOINT = "md";

const styles = {
  div: {
    xs: "xs:hidden",
    sm: "sm:hidden",
    md: "md:hidden",
    lg: "lg:hidden",
    xl: "xl:hidden",
  },
};

<div className={styles.div[NAV_BREAKPOINT]}> ... </div>;
```

Essentially, we create a "lookup table" for the classes we want to use, and then we use the dynamic key to access the correct class.
