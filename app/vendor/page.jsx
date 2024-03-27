"use client";
import {redirect} from "next/navigation";


export default function Vendor() {

    redirect("/vendor/dashboard");

  return (
    <div>
        Routing
    </div>
  );
}