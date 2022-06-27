This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This is the front-end web application for the Flowt rentation application. This provides a platform to test the business hopthesis using front-end html, CSS and javascript to quickly iterate and perform tests.

This code repository is the production code to be deployed on the production [flowt.app](www.flowt.com/dashboard) domain.

Production enviromenent is hosted on vercil
Staging enviroment is hosted on netlify

<!-- Why? cause it's free -->

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

## Commands

```md
"dev" - deploy local development enviroment
"build" - Next Build instructions for CI pipeline
"start": "next start static production server",
"lint": "next lint code, runs in editor",
"cypress": "npx cypress open",
"storybook": "start-storybook -p 6006",
"build-storybook": "build-storybook",
"deploy" - Netlify CLI deploy script
"deploy:production" - Vercil CLI script
"cypress | test:e2e | e2e" - Open cypress for 
"test": "jest test unit tests once for CI pipeline",
"e2e:headless | cypress:headless": "start-server-and-test using cypress start http://localhost:3000 
"test:watch": "jest --watch unit tests for changes" 
test - start jest headlesss testing enviroment
``

## Deployment

Deployment is run on CI enviroments. The remote server needs to use NPM & Node to statically build dynamic pages into static html pages. 

Once the initional JS package is downloaded by the end-user's client the react app will rehyrdare and become a progressive web app with features turned on.

### Deploy on vercil(Production)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

** NOTE: Vercil does not have a CDN node in Southern Africa. **


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!