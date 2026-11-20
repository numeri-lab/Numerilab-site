export function chargerFormations(signal) {
  return fetch("/api/formations", { signal });
}
