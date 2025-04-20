import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Level Up Your Interview Game with AI</h2>
          <p className="text-lg">
            Practice real questions. Get instant, smart feedback.
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot1.png"
          alt="robo"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
    </>
  );
};

export default page;
