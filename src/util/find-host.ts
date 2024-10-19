/**
 * Find the host of the current page
 */
function findHost(): string {
  return `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
}

export default findHost;
