import prisma from '../../../lib/prisma';

// PUT /api/publish/:id
export default async function handle(req, res) {
  const hoursId = req.query.id;
  const hours = await prisma.hours.update({
    where: { id: hoursId },
    data: { published: true },
  });
  res.json(hours);
}