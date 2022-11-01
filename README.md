This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## eFuse Exercise

Hello, you are reading this because you want to determine if
Fred is a good candidate for eFuse. He would tell you that
he is, but don't take his word for it.

This Readme will explain his decisions for this exercise.

### Framework

This uses Nextjs on React. Next provides a great framework for React apps. Its
just enough to get started without getting in the way. Fred has the most
experience with Next, so its also the most easy to use for him.

Vercel (devs for Next) also allow for seamless deployments for Next projects.

Uses SVGR for rendering svgs as components, since there were quite a few icons
in this exercise. Also allows for easier dynamic styling of those svgs.

Uses Google fonts for the open sans and Poppins fonts.

### State

Uses ['zustand']('https://github.com/pmndrs/zustand') for global
state management, and ['immer'](https://immerjs.github.io/immer/) to help
access state values more easily.

Normally I'd use Redux or Context, but honestly I wanted to play around with
something different. I like Redux, but its bulky with boilerplate. Admittedly,
I haven't really used it in about 2 years because the part of Leafly
my team was working on used Context.

Context is fine for smaller things but I've found it to be easily abusable.

Immer helps to add immutability with better dev experience when accessing nested values.

### Styling

I used css modules which come built in to Next. They provide a way to write
scoped css, by importing a given module and scoping its classnames to just
that component.

The global.css file also has some reused variables for things like colors.

### Testing

Cypress is the testing framework. I initially tried to use jest/
react-testing-library, but it didn't play nice with the google font modules.
I didn't have time to make it work and google help was not present.

Cypress works though! The script in package.json will run headless cypress.
I had trouble with GUI cypress (I think) because I use WSL.

### Future Considerations

* "Users" exist in state, but are not really implemented. That would be cool.
* Some of the values I used could be cleaned up.
* I did not implement the header that was present on the mobile mockup.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
