import raw from './pages.json';
export type ContentPage={path:string;canonical?:string;kind:string;name:string;title:string;description:string;blocks:{tag:string;text:string}[];links:{text:string;url:string}[];images:{url:string;alt:string}[];text:string};
export const pages=raw as Record<string,ContentPage>;
