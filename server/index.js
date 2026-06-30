import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { allowedAreas, allowedPriorities, tickets } from "./data/tickets.js";

const app = express();
const port = Number(process.env.PORT) || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distPath = path.join(projectRoot, "dist");

app.use(express.json());

app.get("/api/tickets", (req, res) => {
  res.json(tickets.filter((ticket) => ticket.status === "open"));
});

app.get("/api/ticket-options", (req, res) => {
  res.json({
    priorities: allowedPriorities,
    areas: allowedAreas
  });
});

app.post("/api/tickets", (req, res) => {
  const allowedFields = ["title", "description"];
  const payload = req.body ?? {};
  const extraField = Object.keys(payload).find((field) => !allowedFields.includes(field));

  if (extraField) {
    res.status(400).json({
      code: "INVALID_FIELD",
      message: `Il campo "${extraField}" non e' ammesso.`
    });
    return;
  }

  const title = typeof payload.title === "string" ? payload.title.trim() : "";
  const description = typeof payload.description === "string" ? payload.description.trim() : "";

  if (!title) {
    res.status(400).json({
      code: "INVALID_TITLE",
      message: 'Il campo "title" non puo\' essere vuoto.'
    });
    return;
  }

  if (!description) {
    res.status(400).json({
      code: "INVALID_DESCRIPTION",
      message: 'Il campo "description" non puo\' essere vuoto.'
    });
    return;
  }

  const now = new Date().toISOString();
  const ticket = {
    id: `TCK-${Date.now()}`,
    title,
    description,
    status: "open",
    source: "support",
    createdAt: now,
    updatedAt: now
  };

  tickets.push(ticket);
  res.status(201).json(ticket);
});

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

app.listen(port, () => {
  console.log(`API server ready on http://127.0.0.1:${port}`);
});
