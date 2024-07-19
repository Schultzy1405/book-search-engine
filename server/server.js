const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const mongoose = require("mongoose");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected successfully to MongoDB");

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use("/graphql", expressMiddleware(server));

    // Serve static assets in production
    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "../client/dist")));

      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/dist/index.html"));
      });
    }

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
