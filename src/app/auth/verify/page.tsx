import { Suspense } from "react";
import VerifyEmailClient from "./VerifyEmailClient";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<p className="text-center">Loading verification...</p>}>
      <VerifyEmailClient />
    </Suspense>
  );
}
