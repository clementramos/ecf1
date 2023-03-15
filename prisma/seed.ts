import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function update() {
  await prisma.user.update({
    where:{
      email: `ramos.clement@outlook.fr`,
    },
    data: {
      role: `ADMIN`,
    },
  });
}

update()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
