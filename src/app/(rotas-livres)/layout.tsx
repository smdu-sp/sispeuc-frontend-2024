import { authOptions } from "@/shared/auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RotasLivres({children}:{children: React.ReactNode}) {
  const session = await getServerSession(authOptions);
  if (session) redirect('/');
  return <>{children}</>;
}