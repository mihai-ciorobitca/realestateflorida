import type { Metadata } from 'next';
import { Header, Footer } from '@/components/shell';
import { SITE_URL } from '@/lib/site';
import './globals.css';
export const metadata:Metadata = {
  metadataBase:new URL(SITE_URL),
  title:{default:'Real Estate of Florida | A Life Well Located',template:'%s | Real Estate of Florida'},
  description:'Find your next chapter in Florida. Explore homes, coastal communities, and local real estate expertise across the Treasure Coast and beyond.',
  openGraph:{type:'website',locale:'en_US',siteName:'Real Estate of Florida',images:[{url:'/images/coast.jpg',width:1500,height:768,alt:'Florida oceanfront living'}]},
  twitter:{card:'summary_large_image'},
  icons:{icon:'/icon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'RealEstateAgent',name:'Real Estate of Florida',url:SITE_URL,telephone:'+1-772-600-7400',email:'contact@realestateofflorida.com',image:SITE_URL+'/images/coast.jpg',address:{'@type':'PostalAddress',streetAddress:'2391 SE Ocean Blvd',addressLocality:'Stuart',addressRegion:'FL',postalCode:'34996',addressCountry:'US'},areaServed:['Stuart','Port St. Lucie','Jensen Beach','Treasure Coast','Florida']})}}/></body></html>}
