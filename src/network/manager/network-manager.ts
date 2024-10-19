import findHost from "../../util/find-host.ts";

interface GetProps {
  host?: string;
  queue: string;
  params?: Map<string, string>;
}

/**
 * Perform a GET request to the server
 * @param props
 */
async function get(props: GetProps): Promise<object> {
  // Convert the params to a query string
  const params = props.params;
  let query: string = "";
  if (params != null) {
    query = "?";
    query += Object.keys(params)
      .map((key) => key + "=" + params.get(key))
      .join("&");
  }

  // Get the host and queue clearly
  const host: string = props.host ?? findHost();
  const queue: string = props.queue;

  const response = await fetch(host + queue + query, {
    method: "GET",
  });

  return await response.json();
}

export { get };
