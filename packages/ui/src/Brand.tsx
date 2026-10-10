import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " brand--inverse" : ""}`} href="/" aria-label="The Last Bencher Labs Digital — home">
      <span className="brand__mark" aria-hidden="true"><span>L</span><span>B</span></span>
      <span className="brand__wordmark"><strong>The Last Bencher Labs</strong><span>Digital</span></span>
    </Link>
  );
}
