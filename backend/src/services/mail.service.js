import nodemailer from "nodemailer";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dataDir = fileURLToPath(new URL("../../data/", import.meta.url));
const contactsFile = path.join(dataDir, "contacts.json");

/**
 * Sauvegarde permanente d'un contact dans backend/data/contacts.json
 */
export async function sauvegarderContact(demande) {
  try {
    await mkdir(dataDir, { recursive: true });
    let contacts = [];
    try {
      const contenu = await readFile(contactsFile, "utf-8");
      contacts = JSON.parse(contenu);
      if (!Array.isArray(contacts)) contacts = [];
    } catch {
      contacts = [];
    }

    const nouveauContact = {
      ...demande,
      enregistreLe: new Date().toISOString()
    };

    contacts.unshift(nouveauContact);
    await writeFile(contactsFile, JSON.stringify(contacts, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("[Sauvegarde contact] Erreur lors de l'enregistrement :", err);
    return false;
  }
}

/**
 * Création d'un transporteur Nodemailer dynamique
 */
function obtenirTransporteur() {
  const user = process.env.GMAIL_USER || "numerilab223@gmail.com";
  const pass = process.env.GMAIL_PASS ? process.env.GMAIL_PASS.trim().replace(/\s+/g, "") : "";

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass
    }
  });
}

/**
 * Envoi d'une notification email vers la boîte Gmail de NumeriLab
 */
export async function envoyerEmailContact(contact) {
  const {
    reference = "DEM-000",
    prenom = "",
    nom = "",
    email = "",
    telephone = "Non renseigné",
    organisation = "Non renseignée",
    domaine = "Général",
    description = ""
  } = contact;

  const transporteur = obtenirTransporteur();
  const destinataire = process.env.CONTACT_RECEIVER || "numerilab223@gmail.com";
  const expediteur = process.env.GMAIL_USER || "numerilab223@gmail.com";

  if (!transporteur) {
    console.warn(
      `[Email Contact] Envoi différé : la variable GMAIL_PASS n'est pas encore renseignée dans le fichier backend/.env. La demande ${reference} a néanmoins été sauvegardée dans contacts.json.`
    );
    return {
      envoye: false,
      raison: "GMAIL_PASS non configuré"
    };
  }

  const sujet = `[Nouveau Contact NumeriLab] ${domaine} — ${prenom} ${nom} (${reference})`;

  const corpsHtml = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7eff9; margin: 0; padding: 20px; color: #21182f; }
        .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #ebdfee; box-shadow: 0 4px 18px rgba(33, 24, 47, 0.08); }
        .header { background: linear-gradient(135deg, #882a94 0%, #551c5e 100%); color: #ffffff; padding: 26px 30px; text-align: left; }
        .header h1 { margin: 0 0 6px; font-size: 22px; font-weight: 700; }
        .header p { margin: 0; font-size: 13.5px; opacity: 0.9; }
        .badge { display: inline-block; background: rgba(255, 255, 255, 0.2); padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 8px; }
        .body { padding: 28px 30px; }
        .info-grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .info-grid td { padding: 10px 12px; border-bottom: 1px solid #f2e9f4; font-size: 14px; }
        .info-label { font-weight: 600; color: #6d2c73; width: 35%; }
        .info-val { color: #21182f; }
        .message-box { background: #faf4fb; border-left: 4px solid #882a94; padding: 16px 20px; border-radius: 6px; margin: 20px 0; }
        .message-box h3 { margin: 0 0 8px; font-size: 14px; color: #6d2c73; text-transform: uppercase; letter-spacing: 0.04em; }
        .message-box p { margin: 0; font-size: 14.5px; line-height: 1.6; white-space: pre-wrap; color: #332442; }
        .actions { margin-top: 28px; text-align: center; }
        .btn-reply { display: inline-block; background: #882a94; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; }
        .footer { padding: 18px 30px; background: #fdfafd; border-top: 1px solid #ebdfee; text-align: center; font-size: 12px; color: #7f6e89; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nouvelle demande de contact</h1>
          <p>Reçue depuis le site web <strong>NumeriLab</strong></p>
          <span class="badge">Réf : ${reference}</span>
        </div>
        <div class="body">
          <table class="info-grid">
            <tr>
              <td class="info-label">Client :</td>
              <td class="info-val"><strong>${prenom} ${nom}</strong></td>
            </tr>
            <tr>
              <td class="info-label">Email :</td>
              <td class="info-val"><a href="mailto:${email}" style="color: #882a94; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td class="info-label">Téléphone :</td>
              <td class="info-val">${telephone ? `<a href="tel:${telephone}" style="color: #882a94; text-decoration: none;">${telephone}</a>` : "Non renseigné"}</td>
            </tr>
            <tr>
              <td class="info-label">Organisation / Entité :</td>
              <td class="info-val">${organisation || "Non renseignée"}</td>
            </tr>
            <tr>
              <td class="info-label">Domaine concerné :</td>
              <td class="info-val"><strong style="color: #882a94;">${domaine}</strong></td>
            </tr>
          </table>

          <div class="message-box">
            <h3>Description du projet :</h3>
            <p>${description}</p>
          </div>

          <div class="actions">
            <a href="mailto:${email}?subject=${encodeURIComponent("Re: Votre demande NumeriLab (" + reference + ")")}" class="btn-reply">
              Répondre directement au client
            </a>
          </div>
        </div>
        <div class="footer">
          NumeriLab · Missabougou, Bamako, Mali · numeri-lab.com
        </div>
      </div>
    </body>
    </html>
  `;

  const corpsTexte = `
NOUVELLE DEMANDE DE CONTACT — NUMERILAB
Référence : ${reference}

Client : ${prenom} ${nom}
Email : ${email}
Téléphone : ${telephone || "Non renseigné"}
Organisation : ${organisation || "Non renseignée"}
Domaine : ${domaine}

Description du projet :
--------------------------------------------------
${description}
--------------------------------------------------

Pour répondre au client, répondez directement à cet email.
  `;

  try {
    const nomExpediteur = prenom || nom ? `${prenom} ${nom} (via NumeriLab)` : "NumeriLab Site Web";
    const info = await transporteur.sendMail({
      from: `"${nomExpediteur}" <${expediteur}>`,
      to: destinataire,
      replyTo: email,
      subject: sujet,
      text: corpsTexte,
      html: corpsHtml
    });

    console.log(`[Email Contact] Succès : message ${reference} expédié à ${destinataire} (ID: ${info.messageId})`);
    return {
      envoye: true,
      messageId: info.messageId
    };
  } catch (erreur) {
    console.error(`[Email Contact] Erreur lors de l'envoi SMTP :`, erreur);
    return {
      envoye: false,
      erreur: erreur.message
    };
  }
}

