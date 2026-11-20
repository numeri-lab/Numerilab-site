import "dotenv/config";
import express from "express";
import { fileURLToPath } from "node:url";
import formationsRoutes from "./routes/formations.routes.js";
import { sauvegarderContact, envoyerEmailContact } from "./services/mail.service.js";

const app = express();
app.use(express.json());
const uploads = fileURLToPath(new URL("../uploads/", import.meta.url));
const dist = fileURLToPath(new URL("../../frontend/dist/", import.meta.url));

app.use("/api/formations", formationsRoutes);

app.post("/api/contact", async (req, res) => {
  const {
    reference = "NUM-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000),
    prenom = "",
    nom = "",
    email = "",
    telephone = "",
    organisation = "",
    domaine = "Général",
    description = ""
  } = req.body || {};

  if (!email || !prenom || !nom) {
    return res.status(400).json({ error: "Prénom, nom et email sont requis." });
  }

  const donneeContact = {
    reference,
    prenom,
    nom,
    email,
    telephone,
    organisation,
    domaine,
    description,
    date: new Date().toISOString()
  };

  // 1. Sauvegarde locale permanente dans backend/data/contacts.json
  await sauvegarderContact(donneeContact);

  // 2. Envoi d'email en tâche de fond vers la boîte Gmail de NumeriLab
  envoyerEmailContact(donneeContact).catch((err) => {
    console.error("[Contact] Erreur non bloquante lors de l'envoi d'email :", err);
  });

  console.log(`[Contact commercial] Réf: ${reference} | ${prenom} ${nom} (${email}) | Domaine: ${domaine}`);

  return res.status(201).json({
    success: true,
    reference,
    message: "Demande enregistrée avec succès."
  });
});

app.use("/api", (req, res) => res.status(404).json({ error: "Route inconnue" }));
app.use("/uploads", express.static(uploads));
app.use("/uploads", (req, res) => res.sendStatus(404));
// Preserve existing links to images and brochures.
app.use("/media", express.static(uploads));
const pages = [
  "/",
  "/index.html",
  "/expertises",
  "/expertises/genie-civil",
  "/expertises/hydraulique",
  "/expertises/ia-automatisation",
  "/expertises/digitalisation",
  "/formations",
  "/formations.html",
  "/realisations",
  "/publications",
  "/notre-cabinet",
  "/contact",
  "/centre.html",
  "/equipe.html",
  "/orientation.html",
  "/prestation-de-service.html",
  "/nous-trouver.html",
  "/etudes-de-cas.html"
];
app.get(pages, (req, res) => res.sendFile(dist + "/index.html"));
app.use(express.static(dist, { index: false }));
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: "Le service est momentanément indisponible." });
});
export default app;
