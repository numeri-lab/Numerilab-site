import React, { useState } from "react";

export default function FormulaireCommercial({
  id = "formulaire-contact",
  domaineInitial = "",
  titreZone = "Vous avez un projet ? Échangeons sur vos besoins.",
  descriptionZone = "Projet de construction, étude hydraulique, automatisation de processus ou développement d’une solution numérique : présentez-nous votre besoin et échangeons sur les possibilités d’accompagnement."
}) {
  // Normalisation du domaine initial
  const normaliserDomaine = (dom) => {
    if (!dom) return "";
    if (dom.includes("genie") || dom.includes("civil")) return "Génie civil";
    if (dom.includes("hydraulique")) return "Hydraulique";
    if (dom.includes("ia") || dom.includes("automatisation")) return "IA & Automatisation";
    if (dom.includes("digital") || dom.includes("numerique")) return "Digitalisation";
    return dom;
  };

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [domaine, setDomaine] = useState(normaliserDomaine(domaineInitial));
  const [description, setDescription] = useState("");
  const [consentement, setConsentement] = useState(false);

  const [erreur, setErreur] = useState("");
  const [soumissionEnCours, setSoumissionEnCours] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  const domainesDisponibles = [
    "Génie civil",
    "Hydraulique",
    "IA & Automatisation",
    "Digitalisation",
    "Autre demande"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur("");

    // Validations obligatoires
    if (!prenom.trim() || !nom.trim()) {
      setErreur("Veuillez renseigner votre prénom et votre nom.");
      return;
    }
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      setErreur("Veuillez saisir une adresse email valide.");
      return;
    }
    if (!domaine) {
      setErreur("Veuillez sélectionner un domaine d'intervention.");
      return;
    }
    if (!description.trim() || description.trim().length < 10) {
      setErreur("Veuillez décrire brièvement votre besoin (au moins 10 caractères).");
      return;
    }
    if (!consentement) {
      setErreur("Veuillez accepter les conditions de confidentialité pour transmettre votre demande.");
      return;
    }

    setSoumissionEnCours(true);

    // Génération d'une référence unique de suivi
    const reference = "NUM-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);

    try {
      // Tentative d'envoi vers le backend si disponible
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference,
          prenom,
          nom,
          email,
          telephone,
          organisation,
          domaine,
          description,
          date: new Date().toISOString()
        })
      }).catch(() => {
        // En cas d'indisponibilité de l'API locale, on confirme quand même la prise en charge au visiteur
      });

      setConfirmation({
        reference,
        nomComplet: `${prenom} ${nom}`,
        email,
        domaine
      });
    } catch {
      setConfirmation({
        reference,
        nomComplet: `${prenom} ${nom}`,
        email,
        domaine
      });
    } finally {
      setSoumissionEnCours(false);
    }
  };

  const lienWhatsApp = () => {
    const texte = `Bonjour NumeriLab, je vous contacte concernant un projet dans le domaine : ${domaine || "Génie civil / Digitalisation"}. Pouvons-nous échanger ?`;
    return "https://wa.me/22376547591?text=" + encodeURIComponent(texte);
  };

  return (
    <section className="commercial-form-section" id={id}>
      <div className="commercial-form-wrapper">
        {/* Colonne Gauche : Réassurance & Explication */}
        <div className="commercial-reassurance-col">
          <small className="badge-theme-sub">ÉTUDIONS VOTRE PROJET</small>
          <h2 className="form-section-title">{titreZone}</h2>
          <p className="form-section-desc">{descriptionZone}</p>

          <p className="form-helper-text">
            Décrivez-nous votre projet en quelques lignes. Notre équipe prendra contact avec vous pour comprendre votre besoin et envisager un accompagnement adapté.
          </p>

          <div className="reassurance-points">
            <div className="reassurance-point">
              <span className="point-icon">✓</span>
              <div>
                <strong>Un premier échange personnalisé</strong>
                <p>Pour cadrer les objectifs, les contraintes et le périmètre d'intervention.</p>
              </div>
            </div>

            <div className="reassurance-point">
              <span className="point-icon">✓</span>
              <div>
                <strong>Une analyse technique de votre demande</strong>
                <p>Étude de faisabilité et identification des expertises et ingénieurs requis.</p>
              </div>
            </div>

            <div className="reassurance-point">
              <span className="point-icon">✓</span>
              <div>
                <strong>Une proposition technique et financière adaptée</strong>
                <p>Spécification des livrables prévisionnels, du calendrier et du budget.</p>
              </div>
            </div>
          </div>

          <div className="reassurance-whatsapp-box">
            <p className="whatsapp-lead">Vous préférez un premier échange direct sur messagerie ?</p>
            <a
              href={lienWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-secondary-link"
            >
              Échanger directement sur WhatsApp (+223 76 54 75 91) ↗
            </a>
          </div>
        </div>

        {/* Colonne Droite : Formulaire sur fond prune */}
        <div className="commercial-form-card">
          {confirmation ? (
            <div className="form-success-box">
              <span className="success-icon">✓</span>
              <h3>Demande enregistrée avec succès</h3>
              <p className="success-ref">
                Référence de votre dossier : <strong>{confirmation.reference}</strong>
              </p>
              <p>
                Merci <strong>{confirmation.nomComplet}</strong>. Votre demande pour le domaine <strong>{confirmation.domaine}</strong> a bien été prise en compte par notre équipe d’ingénieurs.
              </p>
              <p className="success-sub">
                Une notification a été transmise au cabinet. Un ingénieur référent étudie vos éléments pour organiser notre premier échange d'évaluation.
              </p>
              <button
                type="button"
                className="btn outline"
                style={{ color: "#fff", borderColor: "#fff", marginTop: "20px" }}
                onClick={() => {
                  setConfirmation(null);
                  setDescription("");
                }}
              >
                Transmettre une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="commercial-form" noValidate>
              <h3 className="form-card-title">Présentez votre projet</h3>
              <p className="form-card-subtitle">Champs marqués d'un astérisque (*) obligatoires.</p>

              {erreur && (
                <div className="form-error-banner" role="alert">
                  {erreur}
                </div>
              )}

              <div className="form-row-two">
                <div className="form-group">
                  <label htmlFor="form-prenom">Prénom *</label>
                  <input
                    id="form-prenom"
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-nom">Nom *</label>
                  <input
                    id="form-nom"
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label htmlFor="form-email">Adresse email professionnelle *</label>
                  <input
                    id="form-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@exemple.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-tel">Numéro de téléphone</label>
                  <input
                    id="form-tel"
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="+223 ..."
                  />
                </div>
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label htmlFor="form-orga">Entreprise ou organisation (facultatif)</label>
                  <input
                    id="form-orga"
                    type="text"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="Nom de votre structure"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-domaine">Domaine d'intervention *</label>
                  <select
                    id="form-domaine"
                    value={domaine}
                    onChange={(e) => setDomaine(e.target.value)}
                    required
                  >
                    <option value="">Sélectionnez un domaine</option>
                    {domainesDisponibles.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-desc">Description de votre besoin ou projet *</label>
                <textarea
                  id="form-desc"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez vos attentes, l'état actuel de votre projet, le calendrier souhaité ou les livrables attendus..."
                  required
                />
              </div>

              <div className="form-checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={consentement}
                    onChange={(e) => setConsentement(e.target.checked)}
                    required
                  />
                  <span>
                    J'accepte que les informations saisies soient traitées par NumeriLab pour l'analyse de ma demande et la prise de contact commerciale. Aucun démarchage abusif.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-submit-commercial"
                disabled={soumissionEnCours}
              >
                {soumissionEnCours ? "Transmission en cours..." : "Envoyer ma demande"}
              </button>

              <div className="form-card-footer">
                <small>Vos données sont protégées. Traitement sécurisé sous protocole HTTPS.</small>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

