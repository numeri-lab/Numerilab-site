import { readFile } from "node:fs/promises";

export async function formations(req, res, next) {
  try {
    const catalogue = await readFile(new URL("../../data/formations.json", import.meta.url), "utf8");
    res.json(JSON.parse(catalogue));
  } catch (error) {
    next(error);
  }
}
