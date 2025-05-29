import { Suspense } from "react";
import NotFoundClient from "../components/NotFoundClient"; // ✅ use relative path for now

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundClient />
    </Suspense>
  );
}
