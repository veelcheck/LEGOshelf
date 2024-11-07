import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const user = await db.user.findUnique({
    where: { id: params.user },
  });

  if (!user) {
    return <p>User not found.</p>;
  }
  return <div className="min-h-screen pt-10">Welcome {user.name}</div>;
}
