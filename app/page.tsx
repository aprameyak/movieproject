import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Header from "../components/Header"
import { useRouter } from "next/router";
import { Router } from "lucide-react";
export default function Home() {
  const router = useRouter()
  const handleloggedout = () => {
    router.push("/login");
  }
  return (
    <div>
      <SignedOut>
        handleloggedout()
      </SignedOut>
      <SignedIn>
      <div>
        <Header/>
        <body>
        </body>
      </div>
      </SignedIn>
    </div>
  );
}
