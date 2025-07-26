export function getOffsetFromUrl(url: string) {
  const parsedUrl = new URL(url);
  return parsedUrl.searchParams.get("page[offset]") || "0";
}
