/* ============================================================
   DAGGERHEART DATA-DRIVEN SYSTEMS
   Two independent systems on this page:

   1. CLASSES — horizontal tab per class. Clicking a tab swaps
      in that class's entire cluster: the Class block, then all
      of its subclasses stacked below (alternating layout, same
      as before). Add a new class by adding an object to
      CLASS_DATA; nothing else needs to change.

   2. DOMAINS — filtered by tab. Clicking a domain tab renders
      that domain's description + fit-note, plus a dynamic
      gallery of every card in its `cards` array.
   ============================================================ */

/* ---------- CLASS DATA ---------- */
const CLASS_DATA = [
  {
    key: "summoner",
    name: "Summoner",
    oneliner: "A friend is never far away... a subordinate would also do.",
    description: `The Summoner is focused on controlling a space either by bolstering allies or subjugating adversaries. Should they so choose, they can rely solely on themselves, summoning their own creatures and subordinates. When the Summoner enters a room, they are never alone and any who oppose them could very well find themselves a subject under the Summoner's thumb.`,
    domains: ["Domination", "Grace"],
    fitNoteLabel: "Design Note",
    fitNoteHtml: `Daggerheart has focused primarily on a hero being the source of power, with a few explorations of other entities being integrated via constructs and the Beastbound Ranger. Devoting a whole class to a Summoner was a deliberate decision, as this fantasy can be expanded past the scope of a subclass. Potential subclasses would include:
      <ul><li>Swarm</li><li>Behemoth</li><li>Totem</li><li>Sacrificer</li></ul>`,
    example: {
      tiers: [
        {
          label: "Class Features", fear: false,
          entries: [
            { name: "Summon", desc: `After a short rest, place a number of tokens equal to your Spellcast trait.
              <strong>Spend any number of tokens</strong> to summon a Summons within Close range for each token.
              <br>
              You can command Summons to perform simple, non-hostile actions.
              <br>
              During combat, you can spotlight 1 Summons. For each Summons after, you must <strong>mark a Stress</strong>. When you take Severe damage, remove one Summon. Otherwise, remove any existing Summons at the end of the scene.
              <br>
              A Summon has an attack range of Melee and uses a <strong>d6</strong> for damage rolls using your Proficiency. At each Tier, their damage die increases by one die size. (d6 becomes d8, d8 becomes d10, etc...)
              They can move up to Close range when you spotlight them.` },
            { name: "Array of Skills", desc: `During your spotlight, you can <strong>mark a Stress</strong> to do one of the following:`,
              list: ["Spotlight an amount of Summons equal to your tier.", "On a successful attack by a Summons, the target is temporarily <em>Vulnerable</em>."] },
            { name: "Strength In Numbers", desc: `For each summons, gain a +1 to your Severe Threshold.` },
          ],
        },
        {
          label: "Hope Feature", fear: true,
          entries: [
            { name: "Obey", desc: `<strong>Spend 3 Hope</strong> to force an adversary to move up to Far range towards or away from you, avoiding harmful outcomes.` },
          ],
        },
      ],
    },
    subclasses: [
      {
        key: "sacrificer",
        name: "Sacrificer",
        oneliner: "For when others are just pawns in your game.",
        hook: "Play the Sacrificer if you want to wield your summoned creatures as expendable tools of raw power.",
        description: `Instead of focusing on sustaining your summoned creatures, they turn into batteries. When a Sacrificer needs to tap into their overwhelming strength, those that are under their rule will serve their finite, honorable purpose.<br><br>Spellcast trait: <strong>Presence</strong>`,
        fitNoteLabel: "Designer Note",
        fitNoteHtml: `Giving a PC the chance to narrate something so awesome in scale but potentially morally complex leads to compelling table dynamics. There is also room within the subclass ecosystem for a more selfish playstyle that doesn't actively detract from other PCs, but rather is a unique resource that the Summoner PC manages.`,
        example: {
          tiers: [
            { label: "Foundation", fear: false, entries: [
              { name: "Bolster Me", desc: `When you succeed on an attack roll or spellcast roll that deals damage and there is a summon within Very Close range, you gain bonus damage equal to your tier to the damage roll for each summons.` },
              { name: "Consume The Weak", desc: `When you would mark your last HP and there is a summons within Very Close range, you can instead remove the summons and clear a HP instead.` },
            ]},
            { label: "Specialization", fear: false, entries: [
              { name: "Always Loyal", desc: `A summons can move up to Far range to get within Melee range of you. If this is used when an attack roll succeeds against you, you can remove the summons to add disadvantage to the attack roll.` },
              { name: "The Gift of Servants", desc: `During downtime, you can spend an unspent summons token on you or an ally, a maximum of one time, to gain an additional downtime move.` },
            ]},
            { label: "Mastery", fear: true, entries: [
              { name: "Repurposed Servant", desc: `You can <strong>remove any number of your summoned creatures</strong> within Melee range to add a +3 to your attack roll or +7 to your damage roll each. Gain Hope or clear HP equal to how much your target marks. If this causes the target to mark their last HP, gain 1 summons token.` },
            ]},
          ],
        },
      },
      {
        key: "behemoth",
        name: "Behemoth",
        oneliner: "Grow until nothing can stop you.",
        hook: "Play the Behemoth if you want to condense your summons into a single, unstoppable force.",
        description: `Take the strength of an army and condense it into a singular Summons, a demi-god under your control.<br><br>Spellcast trait: <strong>Presence</strong>`,
        fitNoteLabel: "Design Note",
        fitNoteHtml: `This subclass could negatively blur the lines with the Beastbound Ranger. To avoid that, we can lean on the design behind the Beastbound being focused around a parternship and how the mechanics represent that dependency on one another. For this subclass, it should be focused on the Summons being a tool, non-autonomous, and separate the idea of a "partnership" with "master".`,
        example: {
          tiers: [
            { label: "Foundation", fear: false, entries: [
              { name: "The One", desc: `Your Summons damage die starts as a <strong>d8</strong>.` },
              { name: "Combined Might", desc: `When you spend a summons token while a Summons exists, a new Summons doesn't appear. Instead, for each token spent, the existing Summons gains the following:`,
                list: ["+4 on damage rolls", "Grows in size", "Increases your Severe threshold by +1"] },
            ]},
            { label: "Specialization", fear: false, entries: [
              { name: "Familiar Voice", desc: `Your Summons obeys your commands comfortably. When you make an action roll that involves your Summons, gain a +2.` },
              { name: "Expanded Presence", desc: `When your Summons is existing while trying to persuade or intimdate someone, you can <strong>spend a Hope</strong> to add the following:`,
                list: ["On a Hope, gain an additional Hope.", "On a Fear, you can remove 2 unspent Summons tokens to stop the GM from gaining a Fear."] },
            ]},
            { label: "Mastery", fear: true, entries: [
              { name: "Unbreakable Will", desc: `When you take Severe damage, instead of your Summons being removed, you can <strong>mark a Stress</strong>.` },
              { name: "As One", desc: `Once per rest, when you spend a summons token that would create a Summons, you can <strong>spend a Hope</strong> to also become a copy of it and must <strong>spend a Hope</strong> for every action after. If you can't, you drop out of the copied form. Your Summons can use your weapon feature on it's rolls. You and your Summons can move up to Far range without having to make an Agility Reaction roll. You can <strong>spend a hope</strong> to swap positions with your Summons within far range of each other.` },
            ]},
          ],
        },
      },
      {
        key: "totem",
        name: "Totem",
        oneliner: "Establish deliberate areas of influence.",
        hook: "Play the Totem if you want to command the battlefield through fixed, lingering zones of power.",
        description: `Coming Soon...<br><br>Spellcast trait: <strong>Knowledge</strong>`,
        example: null,
      },
      {
        key: "swarm",
        name: "Swarm",
        oneliner: "Endless. All-consuming. Don't fear the inevitable.",
        hook: "Play the Swarm if you want to overwhelm your enemies with an endless tide of summoned minions.",
        description: `Open the portal to an endless wave of your will, drowning anyone who stands in the way.<br><br>Spellcast trait: <strong>Presence</strong>`,
        fitNoteLabel: "Design Note",
        fitNoteHtml: `When it comes to overwhelming masses, that can be hard to do with the <em>Limit Cognitive Load</em> design principle. The Swarm subclass is a player's opportunity to play a Leader type adversary, since those are the mechanics I borrowed to make it possible.`,
        example: {
          tiers: [
            { label: "Foundation", fear: false, entries: [
              { name: "The Many", desc: `Gain the <em>Swarm Sheet</em>. Your Summons damage die starts as a <strong>d4</strong>. Instead of gaining summons tokens up to your Spellcast trait, gain tokens equal to your level or Spellcast trait, whichever is higher.` },
              { name: "Weaker Wills", desc: `Instead of marking Stress to command additional Summons, you can also choose to <strong>spend a Hope</strong>.` },
              { name: "Greater Command", desc: `For each Summons you would spotlight, you can spotlight as many as equal to your tier.` },
            ]},
            { label: "Specialization", fear: false, entries: [
              { name: "Unrelenting", desc: `When a Summons succeeds on an attack roll with Fear, you gain a Hope.` },
              { name: "Collective Mark", desc: `When a Summons makes an attack roll and there are other Summons within Very Close range of the target, you can make a <strong>Spellcast roll (16)</strong>. On a success, you can move the Summons to that target and add to the attack, dealing half damage.` },
            ]},
            { label: "Mastery", fear: true, entries: [
              { name: "Volatile Mitosis", desc: `When you mark Severe damage, roll d6s equal to your Spellcast trait. On a 6, choose a Summons. Instead of being removed, it splits into two <em>Volatile</em> Summons. While <em>Volatile</em>, a Summons can obey one more command, then they are removed.` },
            ]},
          ],
        },
      },
    ],
  },
];

/* ---------- DOMAIN DATA ---------- */
const DOMAIN_DATA = [
  {
    key: "domination",
    name: "Domination",
    oneliner: "The mastery of command, authority, and leadership.",
    description: `Domination is the domain of authority and leadership. With the strength of a commander both in voice and in arm, those who practice their ability to cut through the noise of a battlefield have ultimate sway over who does what, when they want. Wielders of Domination are promised obedience and they, in turn, lead inspiring victories.<br>Just like all other sections, this section is currently iterating under the <em>Streamline, Then Streamline Again</em> design principle. Cards are being constantly adjusted, reworked, and removed to help the domain hone in on what it is supposed to represent.`,
    fitNoteLabel: "Design Note",
    fitNoteHtml: `Daggerheart hosts a variety of domains that include attributes like inspiration, leadership, and persuasion. However, none of them deliberately focus on what it would look like to have a true leader that can manipulate both friend and foe. This open space allows for a domain that focuses on players wanting a fantasy where their words matter, where they can influence the enemy past opposition, and make allies push past their usual limits.<br>Just like all other sections, this section is currently iterating under the <em>Streamline, Then Streamline Again</em> design principle. Cards are being constantly adjusted, reworked, and removed to help the domain hone in on what it is supposed to represent. With the current iteration, I believe the cards are cool, but the thematic realization is still lacking. I want to make sure that the domain hits the right notes mechanically of having a card be able to target an ally or an adversary, as I believe that is where one of the strengths of being a prominent voice and visionary lies.`,
    cards: [
      {
        domainColor: "var(--fear-dim)",
        cardName: "Encourage",
        level: 1,
        recall: 1,
        type: "Ability",
        text: `Make a <strong>Spellcast roll (12)</strong> to target an ally within Close range. On a success, they can make their next attack roll with advantage. If they succeed, you can clear a Stress.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Adjust",
        level: 1,
        recall: 1,
        type: "Spell",
        text: `After a long rest, place a number of tokens equal to your Presence (minimum 1). When an ally within Close range fails an action roll, you can remove a token to allow them to reroll with disadvantage. If they succeed, they gain a Hope. When you take a long rest, clear all unspent tokens.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Rebuke",
        level: 1,
        recall: 1,
        type: "Ability",
        text: `Once per rest, when you mark 1 or more Hit Points from an adversary, you can <strong>make a Spellcast reaction roll</strong>. On a success, cause them to mark Stress equal to your tier. If you succeed with Hope, ignore the exhaust limit.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Embolden",
        level: 2,
        recall: 0,
        type: "Spell",
        text: `When an ally within Very Close range is successfully attacked, you can <strong>spend a Hope</strong> to increase their Major threshold equal to your Presence for that attack. Additionally, when you mark an Armor Slot to reduce damage from Severe to Major or less, gain a Hope.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Recalibrate",
        level: 2,
        recall: 0,
        type: "Spell",
        text: `<strong>Mark a Stress</strong> to target a creature within Far range. If it's an ally, they can add half of your weapon's damage dice to an attack. If it's an adversary, they are temporarily Vulnerable until you mark another Stress or the GM spends a Fear.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Guide",
        level: 3,
        recall: 1,
        type: "Ability",
        text: `When a PC within Close range makes a successful attack, you can inspire them. <strong>Mark a Stress</strong> to give them a +1 Proficiency for the damage roll. When an adversary within Close range makes a successful attack, you can cause them to lose concentration on who their target is supposed to be. <strong>Mark a Stress</strong> to cause them to deal half damage.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Threaten",
        level: 3,
        recall: 0,
        type: "Spell",
        text: `On a successful attack, gain a bonus to your damage roll equal to your Presence. If an ally within Close range makes a successful attack, they can <strong>spend a Hope</strong> to add a bonus to their damage roll equal to your Presence.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Instruct",
        level: 4,
        recall: 1,
        type: "Ability",
        text: `Instruct an ally within Melee range how to use their armor more efficiently. Once per rest, they can <strong>mark an Armor Slot</strong> to clear a Hit Point. If this would cause them to clear a Hit Point that was marked by the most recent attack from an adversary, ignore the exhaust limit.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Alleviate",
        level: 4,
        recall: 1,
        type: "Ability",
        text: `When you <em>Prepare</em> as a downtime move with an ally, you can both clear a Stress in addition to gaining Hope.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Persuade",
        level: 5,
        recall: 2,
        type: "Ability",
        text: `When an adversary sees another adversary that could be considered a leader to them mark 1 or more Hit Points, you can <strong>make a Spellcast roll</strong> to persuade that one subordinate adversary to join your side. On a success, you can command them to make an attack against another target within Close range of them. If it's a success with Fear, they do so, but then can't be commanded in this again.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Bark",
        level: 5,
        recall: 2,
        type: "Ability",
        text: `After an attack roll succeeds against you, but before the damage is rolled, you can <strong>mark 2 Stress</strong> to target an adversary within Close range to protect you. The adversary moves within Melee range of you, and for every Hit Point you would mark, you can instead <strong>mark an armor slot</strong> to cause the adversary to mark a Hit Point instead.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Authority",
        level: 6,
        recall: 0,
        type: "Ability",
        text: `Your presence is your armor. Gain Armor Slots equal ot half of your Presence.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Uplift",
        level: 6,
        recall: 2,
        type: "Ability",
        text: `Once per long rest, when a Tag Team is initiated within Far range of you, you can <strong>spend a Hope</strong> to cause the initiator to only have to spend 2 Hope. If they succeed with Hope, then you gain a Hope, as well.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Command",
        level: 7,
        recall: 2,
        type: "Spell",
        text: `After a long rest, place a number of tokens equal to your Presence (minimum 1). <strong>Spend any number of tokens</strong> to give a simple command to a target within Close range. If they would oppose you, you can either <strong>mark a Stress</strong> or make a <strong>Spellcast Roll</strong> to force them to do it.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Domination-Touched",
        level: 7,
        recall: 1,
        type: "Ability",
        text: `When 4 or more of the domain cards in your loadout are from the Domination domain, gain the following benefits: 1) When you target an ally, you can <strong>spend a Hope</strong> to gain advantage. 2) When you cause advantage or disadvantage, it is with a <strong>d8</strong> instead of a d6.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Deter",
        level: 8,
        recall: 3,
        type: "Ability",
        text: `Once per long rest, you can strike fear into those who oppose you. Until the end of the scene, the GM must spend a Fear to target you. If they had  to already spend Fear, they must spend an additional Fear. This does not apply to actions that target an area.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Deflect",
        level: 8,
        recall: 1,
        type: "Ability",
        text: `After a long rest, place a number of tokens equal to half of Presence (minimum 1). When an adversary would cause you to mark Stress, you can <strong>remove a token</strong> instead. When you take a long rest, clear all unspent tokens.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Repurpose",
        level: 9,
        recall: 2,
        type: "Spell",
        text: `Cause an ally within Far range to become an ambassador of your authority. Instead of using your Tag Team token to initiate a Tag Team, you can use it use an ally within Far range's Hope or Class Feature and they can use yours.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Mandate",
        level: 9,
        recall: 2,
        type: "Ability",
        text: `<strong>Mark a Stress</strong> to command a willing target within Far range to make an attack roll against another target within its attack range. If they roll with Fear or they fail, the result is ignored. On a roll with Hope or on a success, you gain a Hope.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Submit",
        level: 10,
        recall: 1,
        type: "Ability",
        text: `You gain access to the new Submit downtime move. To use this move during a long rest, you and any willing allies must evenly distribute your Hope pools with any excess remaining with the original ally. After the long rest, you can <strong>mark a Stress</strong> to tap into any of the Hope pools of the willing allies that participated and distribute it again. If an ally Submitted before and then died, then you claim all of their Hope before the character dies, ignoring the Hope limit.`,
      },
      {
        domainColor: "var(--fear-dim)",
        cardName: "Dominate",
        level: 10,
        recall: 2,
        type: "Ability",
        text: `<strong>Spend a Hope</strong> before you make an attack or spellcast roll targeting an adversary. On a success, you can do one of the following: 1) The GM loses a Fear 2) Choose an adversary. That adversary must mark a Stress and you clear a Stress. 3) Cause the next successful attack against you to fail. The GM can still spend a Fear to deal half damage.<br>If you succeed with Hope, you can choose two options.`,
      },
    ],
  },
];

/* ---------- DOMAIN CARD RENDERING ---------- */
function renderDomainCardHTML(domainName, card) {
  return `
    <div class="domain-card" style="--domain-color: ${card.domainColor};">
      <div class="domain-card-header">
        <div class="domain-card-badge domain-card-level">${card.level}<span class="badge-label">LEVEL</span></div>
        <div class="domain-card-badge domain-card-cost">${card.recall}<span class="badge-label">RECALL</span></div>
        <p class="domain-card-domain">${domainName}</p>
        <p class="domain-card-name">${card.cardName}</p>
      </div>
      <div class="domain-card-body">
        <p class="domain-card-type">${card.type}</p>
        <p class="domain-card-text">${card.text}</p>
      </div>
    </div>
  `;
}

function renderDomainCluster(domainKey) {
  const domain = DOMAIN_DATA.find((d) => d.key === domainKey);
  const container = document.getElementById("domain-cluster");
  if (!domain || !container) return;

  container.innerHTML = `
    <section class="showcase solo reveal is-visible">
      <div class="showcase-text">
        <span class="eyebrow">Domain</span>
        <h2>${domain.name}</h2>
        <p class="showcase-oneliner">${domain.oneliner}</p>
        <div class="showcase-body"><p>${domain.description}</p></div>
        <div class="fit-note">
          <strong>${domain.fitNoteLabel}</strong>
          ${domain.fitNoteHtml}
        </div>
      </div>
      <div class="domain-card-gallery">
        ${domain.cards.map((c) => renderDomainCardHTML(domain.name, c)).join("")}
      </div>
    </section>
  `;

  document.querySelectorAll("#domain-tab-strip .tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.key === domainKey);
  });
}

function buildDomainTabs() {
  const strip = document.getElementById("domain-tab-strip");
  if (!strip) return;

  strip.innerHTML = DOMAIN_DATA.map((d) => `<button class="tab-btn" data-key="${d.key}">${d.name}</button>`).join("");

  strip.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => renderDomainCluster(btn.dataset.key));
  });
}

/* ---------- DOMAIN COLOR LOOKUP (for the class spread's left-column gradient) ---------- */
const DOMAIN_COLOR_MAP = {
  Domination: "var(--fear-dim)",
  Arcana: "var(--domain-arcana)",
  Blade: "var(--domain-blade)",
  Bone: "var(--domain-bone)",
  Codex: "var(--domain-codex)",
  Grace: "var(--domain-grace)",
  Midnight: "var(--domain-midnight)",
  Sage: "var(--domain-sage)",
  Splendor: "var(--domain-splendor)",
  Valor: "var(--domain-valor)",
};

/* ---------- CLASS PAGE-SPREAD RENDERING ----------
   Modeled on Daggerheart's actual class-spread page layout:
   a dark left column (Class info, background blended from the
   class's two domain colors) and a white right column (the
   active Subclass, with its own small switcher that only
   re-renders this side — the Class column never changes). */
function renderSpreadClassFeatures(cls) {
  const hopeTier = cls.example.tiers.find((t) => t.label.toLowerCase().includes("hope"));
  const featureTiers = cls.example.tiers.filter((t) => t !== hopeTier);

  const statRow = (label, value) => value ? `
    <div class="spread-stat">
      <p class="spread-stat-label">${label}</p>
      <p class="spread-stat-value">${value}</p>
    </div>` : "";

  const hopeRow = hopeTier ? `
    <div class="spread-stat">
      <p class="spread-stat-label">${hopeTier.label}</p>
      <p class="spread-stat-value"><i>${hopeTier.entries[0].name}:</i> ${hopeTier.entries[0].desc}</p>
    </div>` : "";

  const featuresHtml = featureTiers.map((t) => t.entries.map((e) => `
    <p class="spread-feature-name">${e.name}</p>
    <p class="spread-feature-desc">${e.desc}</p>
    ${e.list ? `<ul>${e.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : ""}
  `).join("")).join("");

  return `
    ${statRow("Domains", cls.domains.join(" and "))}
    ${statRow("Starting Evasion", cls.startingEvasion)}
    ${statRow("Starting Hit Points", cls.startingHitPoints)}
    ${statRow("Class Items", cls.classItems)}
    ${hopeRow}
    <p class="spread-features-header">Class Features</p>
    ${featuresHtml}
  `;
}

function renderSpreadSubclassFeatures(sub) {
  if (!sub.example) {
    return `<p class="spread-feature-desc">${sub.description}</p>`;
  }
  return sub.example.tiers.map((tier) => `
    <p class="spread-tier-header"><span class="tier-bullet"></span>${tier.label} Features</p>
    ${tier.entries.map((e) => `
      <p class="spread-feature-inline"><i>${e.name}:</i> ${e.desc}</p>
      ${e.list ? `<ul class="spread-inline-list">${e.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : ""}
    `).join("")}
  `).join("");
}

function renderSpreadRight(cls, subKey) {
  const sub = cls.subclasses.find((s) => s.key === subKey) || cls.subclasses[0];
  return `
    <div class="spread-subclass-tabs">
      ${cls.subclasses.map((s) => `<button class="spread-sub-tab ${s.key === sub.key ? "active" : ""}" data-sub="${s.key}">${s.name}</button>`).join("")}
    </div>
    <p class="spread-subclass-header">${cls.name} Subclasses</p>
    <p class="spread-subclass-chooser">Choose a subclass to specialize your ${cls.name}.</p>
    <div class="spread-subclass-banner">${sub.name}</div>
    <p class="spread-subclass-hook">${sub.hook || sub.oneliner}</p>
    ${renderSpreadSubclassFeatures(sub)}
  `;
}

function attachSpreadSubTabs(cls) {
  document.querySelectorAll(".spread-sub-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const right = document.getElementById("spread-right");
      if (!right) return;
      right.innerHTML = renderSpreadRight(cls, btn.dataset.sub);
      attachSpreadSubTabs(cls);
    });
  });
}

function renderClassSpread(cls) {
  const domainColors = cls.domains.map((d) => DOMAIN_COLOR_MAP[d] || "var(--fear-dim)");
  const gradient = `linear-gradient(160deg, ${domainColors[0]}, ${domainColors[1] || domainColors[0]})`;

  return `
    <div class="class-spread reveal is-visible">
      <div class="spread-left" style="background: ${gradient};">
        <h1 class="spread-title">${cls.name}</h1>
        <p class="spread-desc">${cls.description}</p>
        ${renderSpreadClassFeatures(cls)}
      </div>
      <div class="spread-right" id="spread-right">
        ${renderSpreadRight(cls, cls.subclasses[0].key)}
      </div>
    </div>
  `;
}

function renderClassCluster(classKey) {
  const cls = CLASS_DATA.find((c) => c.key === classKey);
  const container = document.getElementById("class-cluster");
  if (!cls || !container) return;

  container.innerHTML = renderClassSpread(cls);
  attachSpreadSubTabs(cls);

  document.querySelectorAll("#class-tab-strip .tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.key === classKey);
  });
}

function buildClassTabs() {
  const strip = document.getElementById("class-tab-strip");
  if (!strip) return;

  strip.innerHTML = CLASS_DATA.map((c) => `<button class="tab-btn" data-key="${c.key}">${c.name}</button>`).join("");

  strip.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => renderClassCluster(btn.dataset.key));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildClassTabs();
  renderClassCluster(CLASS_DATA[0].key);
  buildDomainTabs();
  renderDomainCluster(DOMAIN_DATA[0].key);
});