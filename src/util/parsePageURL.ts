export default function parsePageURL(url: string): YuuLogPage {
  const { pathname, searchParams } = new URL(url, "http://e.com");
  const paths = pathname.split("/");
  const querys: {[key:string]: string} = {};
}

interface YuuLogPage {
  view: string;
  id?: string;
  query?: {
    [key: string]: string;
  };
}