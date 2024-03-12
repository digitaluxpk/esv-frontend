"use client";
import {redirect} from "next/navigation";


export default function Guide() {

    redirect("/guide/dashboard");

  return (
    <div>
        Routing
    </div>
  );
}
