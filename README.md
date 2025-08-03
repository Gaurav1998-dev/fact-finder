# AI-Powered Fact Finder

## Overview

This project is an AI-powered fact-finder application that allows users to ask questions about Inkeep and get answers from its documentation. The application then automatically saves the conversation to a Google Sheet. It uses a Next.js frontend with CopilotKit for the chat interface and a Mastra server on the backend to power the AI agent.

## Demo

https://www.loom.com/share/a4389c10cb4743c38f338aa75e2fe86e

## Features

- **Chat Interface**: A simple and intuitive chat interface to interact with the AI assistant.
- **Ask Questions about Inkeep**: Users can ask any question about Inkeep, and the assistant will provide a relevant answer.
- **Search Inkeep Documentation**: The assistant can search the Inkeep documentation to find answers to user queries.
- **Save Conversation to Google Sheets**: The entire conversation is automatically saved to a Google Sheet for future reference.
- **Extensible Agent**: The backend agent can be extended with more tools and capabilities.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [CopilotKit](https://www.copilotkit.ai/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend**:
  - [Mastra](https://mastra.ai/)
  - [OpenAI](https://openai.com/)

## Project Structure

The project is a monorepo with the following structure:

- `next-app/`: The Next.js frontend application.
- `mastra-server/`: The Mastra backend server.

## Getting Started

To get the project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js (v20.9.0 or later)
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `mastra-server` directory and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=your-openai-api-key
   ```

### Running the Application

1. **Start the backend server:**

   ```bash
   npm run start
   ```

2. **Start the frontend development server:**

   ```bash
   npm run dev
   ```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

1. Open the application in your browser.
2. Type a question about Inkeep in the chat input field.
3. The assistant will provide an answer based on the Inkeep documentation.
4. The conversation will be saved to a Google Sheet.