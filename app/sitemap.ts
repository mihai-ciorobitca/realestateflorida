import type {MetadataRoute} from 'next';
import {pages} from '@/lib/content';
import {SITE_URL} from '@/lib/site';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return [{url:SITE_URL+'/',changeFrequency:'weekly',priority:1},...Object.values(pages).filter(p=>!p.canonical).map(p=>({url:SITE_URL+p.path+'/',changeFrequency:'monthly' as const,priority:p.kind==='page'?0.8:0.6}))]}
