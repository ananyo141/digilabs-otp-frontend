import { redirect } from "next/navigation";

// redirect to signin page
export default async function Home({ params }: any) {
  redirect("/signin");
}
