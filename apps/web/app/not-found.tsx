import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <section className="not-found section-pad"><div className="container"><span className="eyebrow">404 / OFF THE MAP</span><h1>Looks like this<br /><em>isn’t the right path.</em></h1><p>The page may have moved. Let’s get you back to something useful.</p><Link href="/" className="button button--primary button--lg"><ArrowLeft size={16} /> Back to overview</Link></div></section>;
}
