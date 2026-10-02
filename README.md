# Blurly

**Blurly** is an AI-powered image guessing game.

Upload an image, choose how much you want to blur it, and let AI try to guess what is hidden behind the blur.

## Features

* Upload an image
* Adjust the blur level
* Generate the blurred image client-side
* Let AI guess the main subject
* Responsive UI
* No account or database required

## Tech Stack

* [Nuxt](https://nuxt.com/)
* [Vue](https://vuejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Google Gemini](https://ai.google.dev/)
* [Vitest](https://vitest.dev/)

## Setup

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
NUXT_GEMINI_API_KEY=your-api-key
```

You can get a Gemini API key from [Google AI Studio](https://aistudio.google.com/).

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Testing

Run the unit tests:

```bash
npm test
```

## Production

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## How It Works

1. Select an image.
2. Choose the desired blur level.
3. Blur the image in the browser using the Canvas API.
4. Send the blurred image to the backend.
5. The backend sends the image to Google Gemini.
6. Gemini tries to identify what is shown.
7. Blurly displays the AI's guess.

## Project Structure

```text
app/
├── components/
├── composables/
├── pages/
└── utils/

server/
├── api/
├── clients/
└── services/

tests/
└── unit/
```

## Deployment

Blurly is deployed as a Nuxt application with a Node.js server.

The production server can be started with:

```bash
node .output/server/index.mjs
```
