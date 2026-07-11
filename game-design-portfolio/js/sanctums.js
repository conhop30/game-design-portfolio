/* ============================================================
   SANCTUM DOMAIN BROWSER
   Data-driven: one entry per domain. Swap the placeholder
   `feature2` values with your real content — `boon` is
   auto-generated from the domain name so it stays consistent
   everywhere without manual repetition.
   ============================================================ */

const SANCTUM_DOMAINS = [
  { key: "arcana",   label: "Arcana",   color: "var(--domain-arcana)",   feature2Label: "Ambient Power",           feature2Desc: "When the GM critically succeeds on an attack roll, mark 3 Stress for your next attack roll or Spellcast roll that deals damage to critically succeed." },
  { key: "blade",    label: "Blade",    color: "var(--domain-blade)",    feature2Label: "Devastating Technique",   feature2Desc: "One of your damage dice on attack rolls is increased by one size, up to a d20. At level 5, this increases to two damage dice. (d4 → d6 → d8...)" },
  { key: "bone",     label: "Bone",     color: "var(--domain-bone)",     feature2Label: "Honed",                   feature2Desc: "When you make an Agility roll to move further than Close range that succeeds by more than 5, you can make an attack roll. If you succeeded on your Agility roll with Hope, your attack roll has advantage. If you succeed with Fear instead, you can make the attack roll before the GM takes the Spotlight." },
  { key: "codex",    label: "Codex",    color: "var(--domain-codex)",    feature2Label: "Always Studying",         feature2Desc: "Once per rest, mark a Stress to use your Knowledge trait on an action or reaction roll. This can be used in place of a specified trait." },
  { key: "grace",    label: "Grace",    color: "var(--domain-grace)",    feature2Label: "Enthralling Distraction", feature2Desc: "When an ally marks a HP from a a target within Close range of you, you can spend 4 Hope to temporarily Taunt the adversary. While Taunted, the adversary has disadvantage against targets other than you. Additionally, while Taunted, you clear a Stress every time they miss an attack on you. Once they successfully attack you, they are no longer Taunted." },
  { key: "midnight", label: "Midnight", color: "var(--domain-midnight)", feature2Label: "Savor The Anticipation",  feature2Desc: "When the GM has 7 or more Fear, your attack rolls have advantage." },
  { key: "sage",     label: "Sage",     color: "var(--domain-sage)",     feature2Label: "Pack Mentality",          feature2Desc: "When you or an ally within Very Close range succeed on an attack roll, spend 2 Hope to have all willing allies within Very Close range roll a d6. For each 6, add one die of damage from that allies primary weapon. Anyone can spend a Hope to reduce their die from a d6 to a d4, where a 4 would succeed. Combine the damage with the original attack." },
  { key: "splendor", label: "Splendor", color: "var(--domain-splendor)", feature2Label: "Dying Breath",            feature2Desc: "Once per rest, when an adversary marks their last HP within Very Close range of you, make a roll against the adversary Difficulty. On a success, spend 3 Hope to roll a number of d8s equal to the adversary's HP slots. For each 8, clear a HP on you or an ally within Very Close range." },
  { key: "valor",    label: "Valor",    color: "var(--domain-valor)",    feature2Label: "Retaliate",               feature2Desc: "Oncer per long rest, you mark an Armor Slot and the adversary that caused you to mark it is wihtin Melee range, knock them back to Very Close range, dealing d4 using your Armor Score."},
  { key: "dread",    label: "Dread",    color: "var(--domain-dread)",    feature2Label: "Lurking Doom",            feature2Desc: "When you succeed on an attack or spellcast roll that targets an adversary, spend 3 Hope to cause the targets to be temporarily Nearsighted. While Nearsighted, the target can't see or hear anything outside of Very Close range."}
].map((d) => ({
  ...d,
  name: "Sanctum",
  boon: `Once per session, when you use a domain card from the ${d.label} domain, gain a Hope.`
}));

let activeDomainKey = SANCTUM_DOMAINS[0].key;

function buildSanctumCardHTML(domain) {
  return `
    <div class="sanctum-card-header">
      <p class="sanctum-card-domain">${domain.label}</p>
      <h3 class="sanctum-card-name">${domain.name}</h3>
    </div>
    <div class="sanctum-card-features">
      <div class="sanctum-feature is-boon">
        <p class="sanctum-feature-label">Sanctum's Boon</p>
        <p class="sanctum-feature-desc">${domain.boon}</p>
      </div>
      <div class="sanctum-feature">
        <p class="sanctum-feature-label">${domain.feature2Label}</p>
        <p class="sanctum-feature-desc">${domain.feature2Desc}</p>
      </div>
    </div>
  `;
}

function renderSpotlight(domainKey) {
  activeDomainKey = domainKey;
  const domain = SANCTUM_DOMAINS.find((d) => d.key === domainKey);
  const spotlightCard = document.getElementById("sanctum-spotlight-card");
  if (!spotlightCard || !domain) return;

  spotlightCard.style.setProperty("--domain-color", domain.color);
  spotlightCard.innerHTML = buildSanctumCardHTML(domain);

  document.querySelectorAll(".domain-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.domain === domainKey);
  });

  document.querySelectorAll(".sanctum-gallery .sanctum-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.domain === domainKey);
  });
}

function buildTabs() {
  const tabStrip = document.getElementById("domain-tab-strip");
  if (!tabStrip) return;

  tabStrip.innerHTML = SANCTUM_DOMAINS.map((d) => `
    <button class="domain-tab" data-domain="${d.key}" style="--tab-color: ${d.color};">
      <span class="dot"></span>${d.label}
    </button>
  `).join("");

  tabStrip.querySelectorAll(".domain-tab").forEach((tab) => {
    tab.addEventListener("click", () => renderSpotlight(tab.dataset.domain));
  });
}

function buildGallery() {
  const gallery = document.getElementById("sanctum-gallery");
  if (!gallery) return;

  gallery.innerHTML = SANCTUM_DOMAINS.map((d) => `
    <div class="sanctum-card" data-domain="${d.key}" style="--domain-color: ${d.color};">
      ${buildSanctumCardHTML(d)}
    </div>
  `).join("");

  gallery.querySelectorAll(".sanctum-card").forEach((card) => {
    card.addEventListener("click", () => renderSpotlight(card.dataset.domain));
  });
}

function initGalleryToggle() {
  const toggleBtn = document.getElementById("gallery-toggle-btn");
  const gallery = document.getElementById("sanctum-gallery");
  if (!toggleBtn || !gallery) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = gallery.classList.toggle("open");
    toggleBtn.classList.toggle("open", isOpen);
    toggleBtn.querySelector(".btn-text").textContent = isOpen
      ? "Hide full gallery"
      : "Full gallery display";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildTabs();
  buildGallery();
  initGalleryToggle();
  renderSpotlight(activeDomainKey);
});
