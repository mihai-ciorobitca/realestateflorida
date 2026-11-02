import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
export default function NotFound(){return <main id="main" className="not-found wrap"><div style={{width:'100%'}}><span className="eyebrow">A LITTLE OFF THE BEATEN PATH / 404</span><h1>Let’s find your way home.</h1><p>This page isn’t here, but your next chapter still is.</p><Link className="button" href="/">Back to Florida<ArrowUpRight size={17}/></Link></div></main>}
