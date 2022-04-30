export async function fetchReq(params: object = {}, uri: string) {
  const url = new URL(uri);
  url.search = new URLSearchParams({ ...params }).toString();
  const response = await fetch(url.toString());
  const data = await response.json();
  return data.statusCode === 400 ? { status: false, description: data.description } : { status: true, data };
}
