import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const hoursId = req.query.id;
  if (req.method === 'DELETE') {
    const hours = await prisma.hours.delete({
      where: { id: hoursId },
    });
    res.json(hours);
  } else {
    throw new Error(
      `La requète HTTP : ${req.method} n'est pas supportée ici.`,
    );
  }
}