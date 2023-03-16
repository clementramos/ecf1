// pages/api/hours/index.ts

import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/hours
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  const result = await prisma.hours.create({
    data: {
      title: title,
      content: content,
    },
  });
  res.json(result);
}
