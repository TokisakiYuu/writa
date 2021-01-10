export default function parsePageURL(url: string): YuuLogPage {
  const { pathname, searchParams } = new URL(url, "http://e.com");
  const paths = pathname.split("/");
  const query: YuuLogQuery = {};
  for(const item of searchParams.entries()) {
    query[item[0]] = item[1];
  }
  return {
    view: paths[1],
    id: paths[2],
    query
  };
}

export interface YuuLogPage {
  view: string;
  id?: string;
  query?: YuuLogQuery;
}

export interface YuuLogQuery {
  [key: string]: string;
}