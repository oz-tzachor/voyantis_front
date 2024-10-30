
# Frontend - Queue Management System

This is the frontend for the Queue Management System, built with React. The frontend allows users to interact with message queues, providing options to publish and retrieve messages.

## How to Run

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run strta
   ```

## Project Structure

```
frontend
│
├── src
│   ├── components         # React components, including SingleQueue
│   ├── context            # MainProvider for global queue management
│   ├── api                # Axios API functions for backend communication
│   └── App.js             # Main entry point for the React app
└── package.json           # Project dependencies and scripts
```

## Key Components

- **SingleQueue Component**: Displays details for a specific queue, including:
  - Queue name and message count.
  - Button to retrieve the next message.
  - Input field and button to publish a new message.

- **MainProvider (Context)**: Manages global queue data and provides the following functions:
  - `fetchAllQueues()`: Fetches all queues with their message counts.
  - `getNextMsg(queue)`: Retrieves the next message from a specified queue.
  - `publishMessage(queue, message)`: Publishes a new message to a specified queue.

## API Functions

Located in `src/api/api.js`, these functions use Axios to communicate with the backend:

- `getAllMsg()`: Fetches all queues and their message counts.
- `getOneMsg(queue)`: Retrieves the next message in a specified queue.
- `postMessage(queue, message)`: Publishes a message to a specified queue.

## Example Usage

1. **Publishing a Message**:
   - Enter a message in the input field of the `SingleQueue` component and click "Publish Message."
   - The message is sent to the backend, and the queue count updates.

2. **Retrieving a Message**:
   - Click "Get Next Message" to retrieve the next message.
   - If a message is available, it’s displayed below. Otherwise, "No message available" appears.
