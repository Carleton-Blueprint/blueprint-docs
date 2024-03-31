# Features

This page lists some of the key "good-to-know" features of Next.js that are extensively used in developing Blueprint apps.

## Environment Variables

Read more from the official Next.js [docs](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables).

:::danger[Important Notes]

**Always** store sensitive information like API keys, passwords, and other secrets in environment variables. **Never** hardcode them in your codebase.

**Never** commit the `.env.local` file to your repository (it should be added to `.gitignore`). This is to ensure that sensitive information like API keys, passwords, and other secrets are not exposed.

:::

1. Create a `.env.local` file in the root of your project.
2. Add environment-specific variables on new lines in the form of `NAME=value`.
3. Create a `.env.local.example` file to provide a template for developers to fill in their own environment variables.
4. Access environment variables in your code using `process.env.NAME`.

**Note**: Environment variables are loaded into `process.env` at build time on the server. They are not available in the browser for security purposes. To expose environment variables to the browser, you can use the `NEXT_PUBLIC_` prefix. Read more about `NEXT_PUBLIC_` from the official docs [here](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser).

:::tip[Blueprint Guideline]

Make sure to always include a `.env.local.example` file in your project to provide a template for developers to fill in their own environment variables.

:::
