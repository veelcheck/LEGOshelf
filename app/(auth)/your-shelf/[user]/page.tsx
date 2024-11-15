import { PrismaClient } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const db = new PrismaClient();

export default async function DashBoard({
  params,
}: {
  params: { user: string };
}) {
  const user = await db.user.findUnique({
    where: { id: params.user },
  });

  return (
    <div className="min-h-screen">
      <h1 className="pt-10 text-2xl tracking-wide">Welcome, {user?.name}!</h1>
      <div className="flex justify-center gap-4 pt-14">
        <Card className="flex h-96 flex-col justify-center">
          <CardHeader>
            <CardTitle>On the shelf</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have 0 sets on your shelf.</p>
            <p>You have 0 pieces in your possesion.</p>
          </CardContent>
        </Card>
        <Card className="flex h-96 flex-col justify-center">
          <CardHeader>
            <CardTitle>Wishlist</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have 0 sets on your wishlist.</p>
            <p>Which makes 0 pieces altogether.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
