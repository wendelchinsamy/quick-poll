import express from "express"
import { config } from "dotenv"

// Create the server instance
const app = express()

// Initialize the environment variables
config()

// Start the server
app.listen(process.env.API_PORT, () =>
  console.log(`quick-poll api is running on port ${process.env.API_PORT}`)
)
