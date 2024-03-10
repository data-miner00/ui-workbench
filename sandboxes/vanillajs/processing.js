function processing(
  htmlString = "<html><body><div>Hello Worlds</div></body></html>"
) {
  const parser = new DOMParser();
  const encoder = new TextEncoder();
  const dom = parser.parseFromString(htmlString, "text/html");
  const sizeInBytes = encoder.encode(htmlString).byteLength;

  return { dom, sizeInBytes };
}

export default processing;
