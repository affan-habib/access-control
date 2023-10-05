
const fetcher = async (url, options = {}) => {
  const method = options.method || "get";

  if (method === "get" || method === "GET") {
    Object.keys(options).forEach((key) =>
      url.searchParams.append(key, options[key])
    );
  }

  let headers = {
    // Authorization: "Bearer " + getAccessToken(),
    "Content-Type": "application/json",
  };

  if (options.hasFile) {
    headers = {
      Authorization: "Bearer " + "getAccessToken()"
    };
  }

  const response = await fetch(url, {
    headers: headers,
    ...options,
  });

  return response.json();
};

export default fetcher;
