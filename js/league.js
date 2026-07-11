/* ============================================================
   LEAGUE CHAMPION BROWSER
   Data-driven, same pattern as the Sanctum browser: click a
   gallery tile, the spotlight panel repopulates. Add, edit, or
   remove entries in LOL_CHAMPIONS below — everything else
   (gallery tiles, spotlight panel, ability rows) renders from
   this array automatically.

   PORTRAITS: set `portrait` to a path like
   "assets/champions/your-file.png" and drop the matching image
   into the assets/champions/ folder. Leave it as an empty
   string ("") to show placeholder text instead until you have
   art ready.
   ============================================================ */

const LOL_CHAMPIONS = [
  {
    key: "champion-one",
    name: "Kato",
    title: "The Sadistic Servant",
    role: "Support",
    portrait: "assets/champions/kato.jpg",
    lore: "Avoiding death means avoiding attention and gaining favor. However, Kato still has an agenda, as all Noxians do. Power and domination still appealing to Kato, he places himself in a position where he can mold the minds of power to do his bidding without the threat of infamousy. Being a servant, Kato can seem the tool of his “masters” when it is, in fact, Kato who is blazing the trail to power and dominance. But to be powerful is not enough; He must see the submission in his subjects’ eyes. The balance of slow agony and feverish desire to rule causes Kato to leave long lasting sorrow as he sways Noxus’ generals to his next conquest.",
    passive: { name: "Sadistic Services", desc: "Kato swears fealty to an ally. While near that ally, Kato gains movement speed. While away from them, Kato’s auto attacks and abilities apply a bleed, leaving a blood trail that lasts for as many consecutive attacks Kato landed. Only Kato and his marked ally can see the blood trail. Once the marked ally comes within Kato’s movement speed enhancement range, the ally gains the movement speed boost instead until the blood trail effect wears off." },
    q: { name: "Dream Catcher", desc: "Throws the barbed wire, latching to the first enemy hit, dealing physical damage. The barbed wire will stick into the ground at a fixed distance, causing the enemy to only be able to move within the wire limit." },
    w: { name: "Savoring Torment", desc: "Passive: Abilities apply barbs. || Active – Enhance an ally’s auto attacks to apply barbs up to 3 times and deal bonus physical damage. When all 3 barbs are expended, Kato and the ally gain a burst of decaying movement speed." },
    e: { name: "Ravaging Embrace", desc: "Racks toward himself, slowing and dealing physical damage. Each barb stacked on the enemy increases slow and physical damage amount." },
    r: { name: "The Motivating Whip", desc: "Lashes his barbed chain, hitting the first champion. If an ally is struck, then they receive a burst of movement speed, adaptive healing, and gain Savoring Torment. If an enemy is struck, the enemy takes physical damage and is grounded. If Kato successfully lands The Motivating Whip, then it may be casted again with reduced effect per unique champion, until Kato misses." },
  },
  {
    key: "champion-two",
    name: "Hilt",
    title: "Shurima's Phalanx",
    role: "Tank",
    portrait: "assets/champions/hilt.webp",
    lore: "Hilt grew up with a knack of protection through ingenious methods. Being part of the newly arisen empire of Shurima, Hilt was recognized by Azir as an outstanding soldier and placed in his personal vanguard. After regularly displaying his talent of leadership and conquering, Hilt was approached by Azir to become Ascended. Coming down from the Sun Disc and deemed worthy, Hilt took the form of anarmored lion brandishing armor that has the Sun Disc itself engraved into his armor.",
    passive: { name: "Shifting Sands Foundation", desc: "Gains 5% tenacity for every spell Hilt casts. lasts for 4 seconds." },
    q: { name: "Burning Sands Beckoning", desc: "Stabs ground and deals AD damage. After a delay, rips up, dealing AD damage and pulling enemies." },
    w: { name: "Conquering Step", desc: "Lunges forward with his shield, knocking minions out of the way and stunning the first enemy hit, dealing AP damage. Hitting a structure disarms it for 1.75 seconds." },
    e: { name: "Unburdened Defense", desc: "Plunges his shield into the ground, creating an aura that grants bonus AP damage, also applying on auto attacks and grants % armor and magic resist." },
    r: { name: "Shurima's Advance", desc: "Marches forward with his vanguard supporting in a V formation with Hilt at the point, being slowed by 30%, becoming unstoppable and dealing AD damage. Also gains a shield based on AP and number of enemies nearby." },
  },
  {
    key: "champion-three",
    name: "Soren",
    title: "The HearthBlade Wielder",
    role: "Support",
    portrait: "assets/champions/soren.jpg",
    lore: "Soren is a son of the Hearthblood. Nurturing his love of stories with the Notai during the moment his people were killed, Soren is the sole survivor of the Hearthblood people. Finding his father’s sword of True Ice, Soren swore to avenge his people’s death by killing Volibear and holding his vile god-blood in his father’s sword, which inspired the name for his newly arisen tribe; The HearthBlade.",
    passive: { name: "Notai’s Charity", desc: "Soren gains bonus gold from assists based on how much damage and crowd control applied, up to the gold amount of the base champion worth. If Soren kills the enemy, then he receives no bonus gold." },
    q: { name: "Freljordian Rebuke", desc: "Soren hacks down with his sword, dealing AD damage and slowing enemies by 40% for 1 second." },
    w: { name: "True Ice's Memory", desc: "Passive: Soren applies a stack to an enemy for every ability landed. || Active: Soren stabs the ground, dealing AP damage and stunning enemies based on how many stacks they obtain." },
    e: { name: "Winters Edge", desc: "Soren throws his sword, dealing AD damage to enemies hit and landing in the ground. Casting True Ices Memory will activate from the sword’s location. Soren’s auto attack range is decreased but deals more damage until he either picks up the sword or after an allotted time." },
    r: { name: "Make the Gods Run", desc: "Soren rushes in a targeted direction, impaling all enemies and pushing them with him. Once Soren reaches his final destination, Soren rips his sword up, dealing AD damage and consuming all stacks of True Ices Memory, dealing percentage AD damage based on the number of stacks consumed." },
    },
    {
    key: "champion-four",
    name: "Jaull",
    title: "The Swimming City's Anchor",
    role: "Top",
    portrait: "assets/champions/jaull-fish.jpg",
    lore: "The Swimming City doesn’t care who kills captains, just that they’re dead. For most of the Serpent’s Sea, it’s indifferent. There are a few, though, where captains give them no other option. A failed harvest turned into a jaullfish dragging a bone skewer in its wake, always pulling, but never dislodging. A reminder of why the Swimming City exists.",
    passive: { name: "Swimming City's Anchor", desc: "Jaull is always tethered to a bone skewer dragging behind her. Whenever Jaull uses a dash, she yanks the bone skewer half the length of the dash. Then, after a short delay, she is yanked back to the bone skewer. While attached to the bone skewer, Jaull gains movement speed after receiving champion damage." },
    q: { name: "Deep Sea Bite", desc: "Jaull targets an enemy, dealing magic damage, increased on enemies with less max health than her. If Jaull is yanked back by Swimming City’s Leash during Deep Sea Bite, the enemy is yanked back with her. Additionally, if she has received damage from the enemyshe targets within the last X seconds, she heals X% max health." },
    w: { name: "Geyser Wave", desc: "Pull geysers of water towards Jaull four times, increasing in size and magic damage each pull. Enemies hit are pushed towards Jaull. (Taliyah knockup but expansive)" },
    e: { name: "Thrash", desc: "Jaull dashes forward, dealing magic damage in a line and slowing enemies hit, minions taking extra damage. Thrash refreshes for a short duration after Jaull is ripped back by Swimming City’s Leash, up to three times. Upon Jaull reaching the end of her third dash, nearby enemies are pulled towards the center and slowed." },
    r: { name: "Unleashed", desc: "Jaull breaks off the bone skewer for X seconds, gaining X% missing health regen and her auto attacks deal bonus magic damage." },
    },
      {
    key: "champion-five",
    name: "Aisra",
    title: "The Heart of Dissonance",
    role: "Support",
    portrait: "assets/champions/aisra.jpg",
    lore: "After seeing a theater performance that seemed almost designed to extract the audience’s most painful memories and emotions, she felt true guilt, self-loathing, and loneliness. When Sona got back to her etwhal, she found herself playing the song and singing the words that caused her silence so long ago; The song that caused her parents to commit suicide because of their names being woven with anger and misunderstanding. The songs influence overcame them, leaving Sona the orphan she wrongfully believed she already was. Now, Sona changed the words to a lyric of torn love that was self-inflicted. With heavy breath, Sona sang the revised song in memory of them. Upon stirring from her musical trance, she saw them – her parents – shimmering, distorting in front of her, melded into one... thing. With horror, Sona tore through the air a sharp chord, disturbing their essence, though they were not dissipated. Instead, Sona felt a cut slice across her cheek. They just stood there, bringing an air of horrifying comfort. Eventually, Sona broke down and began silently weeping as they simply stood, seemingly wishing to comfort her. Eventually, Sona slept, crumpled in the same spot she wept. When she awoke from the sunlight pouring through the window, she found an empty room except for her, her etwhal, and a gleaming gash along the etwhal’s entire length.",
    passive: { name: "De-stabilize", desc: "When Aisra takes champion damage, they begin fracturing, de-stabilizing whoever hit them. Upon enough spells cast nearby, Aisra lashes out, dealing damage to every de-stabilized enemy (dealing more damage the closer they are) and granting Aisra % mana regen for every enemy hit for a short duration." },
    q: { name: "Echoes of Heartache", desc: "Create a zone that shreds the air, dealing minimal magic damage in the center and slowing around the outside." },
    w: { name: "Protect the Suffering", desc: "Grant a shield to an ally. If the shield loses 50% durability from one attack, then a percentage of that damage is dealt back to the enemy champion. This effect resets when it drops below the 50% mark." },
    e: { name: "End the Hurt", desc: "Target an ally, causing their attacks to deal magic damage over time to an enemy. Repeated attacks against an enemy or monster resets the duration and causes the magic damage to increase in strength." },
    r: { name: "Stop the Remembering", desc: "After a brief delay, rip a malicious wave of dissonance in a line, dealing magic damage and silencing enemies." },
    },
    {
    key: "champion-six",
    name: "Ildhaurg",
    title: "The Warden of Sacrifice",
    role: "Top",
    portrait: "assets/champions/ildhaurg.jpg",
    lore: "",
    passive: { name: "Presence of Sacrifice", desc: "While dead, Ildhaurg can be revived at her death location if she gains 1/2/3 takedowns during her death timer. The number of takedowns required for her to be revived goes up for every 2 deaths she has, up to 3 required takedowns (a.k.a. when Ildhaurg has 6+ deaths)." },
    q: { name: "Toil Tiller", desc: "Ildaurg sweeps her tusks in front of her left and then right, dealing magic damage and slightly knocking enemies in the direction of the sweep. Allies that deal damage to enemies that are within the torn field are healed for a percentage of the damage dealt." },
    w: { name: "Blood-matted Fur", desc: "Target an ally to give Ildhaurg a shield and that ally applies Brittle on auto attacks. For each Brittle consumed, heal Ildhaurg for a percentage of her missing health. If Brittle is consumed 2 times with 5 seconds, reactivate Ildaurg’s shield and refresh the allies cooldown. If the initial shield is not fully broken, a new shield is cast on top of the initial one, not replacing the initial shield." },
    e: { name: "Freljord's Rain", desc: "Ildhaurg channels a charge, increasing distance based on charge time. Upon release, Ildhaurg charges forward, knocking aside and dealing magic damage to any enemies hit and leaving a movement speed boosted trail for allies. Ildhaurg can control the charge direction slightly, allowing her to move left or right slightly." },
    r: { name: "Warden of Sacrifice's Rebuke", desc: "Ildhaurg rears up and slams her tusks down, dealing magic damage and stunning any enemies hit by the tusks themselves. Then, she drags the tusks towards her, pulling any enemies within her tusks and slowing them." },
    },
    {
    key: "champion-seven",
    name: "Kratos",
    title: "The Impatient Incompacitator",
    role: "Mid",
    portrait: "assets/champions/kratos.webp",
    lore: "",
    passive: { name: "Quick Sureties", desc: "A portion of Kratos’ mana regeneration also generates a shield. When the shield is broken, gain a burst of ability power for X seconds. Once Kratos leaves combat, the ability power cooldown is reset." },
    q: { name: "Potential Patience", desc: "Cast on a location, the area of effect increasing until either at max duration or activated early. Deal magic damage and slow all enemies hit, the slow scaling with the cast duration." },
    w: { name: "Not-Quite-Incapacitated", desc: "Cast a ring on the ground, dealing magic damage and slowing enemies that walk through it over time." },
    e: { name: "Informers (Stores up to 2 charges)", desc: "Place an invisible trap. When an enemy hits one, deal light magic damage, grounding and silencing that enemy. If an enemy uses mobility nearby, the trap explodes, grounding nearby enemies, as well as silencing the enemy that used mobility. Additionally, enemies that are hit by Informers are marked. Damaging an enemy that is marked will consume the mark, dealing bonus magic damage." },
    r: { name: "Finally", desc: "Suppress nearby enemies, gaining a growing shield for the duration. At the end of the duration, deal magic damage to all suppressed enemies equal to a percentage of the shield at the end." },
    },
    {
    key: "champion-eight",
    name: "Fey",
    title: "The Shadow Isles Boatman",
    role: "Jungle",
    portrait: "assets/champions/fey.jpg",
    lore: "Though not called to fulfill her duties often, Fey would provide passage to and from the Blessed Isles. In her boat, passengers would smoothly transition from the bliss of the Isles to the organized chaos that is the world of Runeterra with her protecting them while in her charge from the toiling seas and the ruthless sea thieves. When the Black Mist released its terrible influence upon the Isles, corrupting the Blessed Isles forever, Fey had the option to turn from the Isles or return into the Black Mist’s corrupted veil. Choosing duty over life, she returned to her people. Now a part of the Shadow Isles, Fey continues to try and help any who try to leave the Isles while warning those from entering its shrouded horrors.",
    passive: { name: "Rower's Art", desc: "Auto attacks deal splash magic damage." },
    q: { name: "Cutting the Wave", desc: "Sweeps her oar, dealing magic damage and slightly dragging enemies by the oar blade in a targeted direction." },
    w: { name: "Currents Sway", desc: "After a 1 second cast time Raises a wrecked bow of a boat that begins dragging in a targeted direction, pushing enemies into it. While in its presence, Fey’s Cutting the Wave has no mana cost. After 4 seconds, collapses, dealing magic damage. Can be re-activated if the wreck connects two sides of a wall, creating a one-way ramp that allows a path through that wall. Enemies are slowed on the ramp. Will last for 6 seconds." },
    e: {name: "Nonchalance of Beasts", desc: "Gains a shield that takes % reduced damage until shield is broken. If shield takes damage from monsters, next auto attack heals % amount."},
    r: { name: "Light of the Isles", desc: "Calls the Black Mist, slowly expanding to its environment for 7/8/9 seconds. Enemies within the mist see units as stones of light. Fey gains movement speed towards the Black Mist." },
    },
    {
    key: "champion-nine",
    name: "Lucere",
    title: "The Hunted",
    role: "Jungle",
    portrait: "assets/champions/lucere.png",
    lore: "Lucere is an Ionian father and husband who got attacked while he and his expedition crew were charting the Freljord. He survived, but not without his share of severe injuries. Now, Lucere is fighting against the Freljord as he tries to find his way back to Ionia.",
    passive: { name: "Survival Rewards Patience", desc: "When an enemy is trapped, Lucere’s next auto attack deal bonus physical damage, healing for the amount the bonus damage dealt. Trapped status remains for a few seconds after the trap ends." },
    q: { name: "Savage Recourse", desc: "Throws a spike, dealing physical damage to the first enemy hit and lodging the spike in them. Lucere’s next auto attack rips out the spike, dealing physical damage." },
    w: { name: "Hiding the Approach", desc: "Readies a trap with a tripwire. Upon an enemy tripping it, deals physical damage and applies nearsighted to the enemy. Goes invisible after a delay. Decays after 2-3 minutes. Applies trapped status." },
    e: {name: "Fight... Another Day", desc: "Lays a trap. Once cast, Fight... Another Day can be activated again while Lucere is anywhere on the map. Upon activation, the trap whips its arms toward the center, dealing physical damage and throwing all enemies in a targeted direction. If an enemy steps on the trap, then they become snared and take physical damage while all enemies nearby get thrown in a targeted direction. Monsters (excluding minions) don’t get thrown and instead take 200% damage. Applies trapped status."},
    r: { name: "Ever Onward", desc: "Active: Can place anchors in walls. While being in range of an anchor, Lucere can pull himself to the anchor and dealing bonus physical damage based on the amount of anchors traveled for a window of time on his next attack. Can have X/X/X anchors out at a time. ||  Passive: If an enemy has the trapped status Ever Onward costs no mana and has no cooldown. Casting Ever Onward towards an enemy with trapped status causes Lucere to leap towards the enemy." },
    },
    {
    key: "champion-ten",
    name: "Alexander",
    title: "The Caravan Guard",
    role: "Jungle",
    portrait: "assets/champions/alexander.jpg",
    lore: "He’s just a normal dude, really. Big guy. Hired pay.",
    passive: { name: "Veteran's Second Wind", desc: "After being in combat for 10/8/6 seconds, Alexander heals off of his attacks. Scales on % max HP. Lasts until he is out of combat + 3/4/5 seconds." },
    q: { name: "Thunderclap", desc: "Alexander swings his arms in front of him, dealing physical damage to enemies hit and funneling any non-champions towards the center, briefly stunning any non-champions." },
    w: { name: "The Well-Worn Way", desc: "Passive: Alexander tracks ally movement. Each ally’s track lasts for 40 seconds before it begins to decay. After The Well-Worn Way has been activated in a specific location 5 times, Alexander gains permanent minor movement speed boost in that area. ||  Active: Alexander gains movement speed on where the ally tracks are. Lasts for 10 seconds." },
    e: {name: "Leaping Lockdown", desc: "Alexander dives forward, dealing physical damage to enemies struck. Alexander then picks up a champion in front of him in by their throat, stunning both him and the enemy champion, dealing physical damage to the champion. Does not go through walls."},
    r: { name: "Sweeping Ragdolls", desc: "Alexander picks up an enemy champion and swings them around him in a circle. Enemy champions hit by Alexander deal physical damage to the enemy champion hit and the enemy champion swung. After a rotation, Alexander throws the enemy champion he is swinging a short distance, dealing physical damage to them when they land. For every champion hit after the first, the ragdoll champion takes reduced damage." },
    },
    {
    key: "champion-eleven",
    name: "Aydra",
    title: "The Twice Shaman",
    role: "Bot",
    portrait: "assets/champions/aydra.jpg",
    lore: "Aydra was taught by her father – a shaman who was a pupil of Udyr – how to channel animal spirits into a useable source instead of an intrusive force. Her father was killed, though she doesn’t know how it happened. She found him bloodied, seemingly tortured and clutching a true ice shard. When she picked up the true ice shard, she felt an intense burning throughout her entire body, but a familiar, patriarchal warmth washed over her simultaneously. Dropping the shard, she decided to shape a staff out of her father’s bones to cradle the true ice shard, creating a new body for her father and a worthy tribute to his unknown sacrifice. Whenever Aydra finds herself in a situation that becomes more dire than she can handle, the true ice shard begins melting and a massive turtle spirit is summoned, staving off the imminent danger Aydra was originally in. These moments of her father’s strongest spiritual connection are true signs of her father watching over her as he lives by her side in the staff shaped by his bones.",
    passive: { name: "Palm and Heel", desc: "Attacks from her staff and attacks from her true ice shard deal separate damage. Enemies hit by both the staff and by the true ice shard take both sources of damage. The staff gets stabbed, dealing damage in a short, straight line while the true ice shard functions as a traditional auto attack. Critical strikes cause the staff to deal damage in a semi-circle in front of her from the staff instead of a straight line." },
    q: { name: "Roaring Sweep", desc: "Aydra channels the bear spirit around the true ice shard, forming a bear arm between her and the true ice shard, then rakes it in front of her, dealing physical damage to enemies." },
    w: { name: "Burning Life", desc: "Aydra channels the phoenix spirit through the true ice shard, granting life steal scaling on her maximum missing HP. Only the auto attacks that are a part of the true ice shard gain the life steal functionality." },
    e: {name: "Restless Claws", desc: "Aydra channels the tiger spirit into the true ice shard, placing it at a targeted location. Auto attacks will first hit the intended target, travel to the true ice shard, and then travel back to Aydra, dealing reduced damage along its path. Auto attacks that travel to the true ice shard gain it as it’s source of damage."},
    r: { name: "Ancestral Protection", desc: "Aydra’s father summons a massive turtle spirit. The turtle can be commanded to move to a new location globally, gaining movement speed the longer it moves in a straight line. Re-casting Ancestral Protection causes the turtle to crush downward, dealing physical damage to all enemies under it, stunning those in the center. The turtle can move through walls." },
    },
    {
    key: "champion-twelve",
    name: "Resin",
    title: "The Zaunite Angel",
    role: "Bot",
    portrait: "assets/champions/resin.jpg",
    lore: "Seth grew up in Zaun. As he grew taller, his anger towards Piltover grew with it. Using his handy attitude towards the little he had to play with as a child, Seth fashioned inhumane ways to kill those he resented the most. Trial and error with dangerous, unknown chemicals and scraps of metal led to a body covered in scars and burns. Ascending from the choking fog of Zaun, Seth left his scorching mark on high Piltover society. After a few adventures into higher society, Seth was contacted by some Piltover nobles and successful merchants. Becoming a hired mercenary to destroy competition, Seth took the name “Resin”.",
    passive: { name: "Combustible Adrenaline", desc: "Attacking a unique champion gives a movement speed boost. Lasts 2 seconds. Duration stacks. 14/12/10 second cooldown per champion. Sludge can be caught on fire, removing the slow effect, instead dealing damage over time." },
    q: { name: "Forced Empathy", desc: "Resin throws a sticky grenade, dispensing sludge gas when it lands. If the grenade hits an enemy, the grenade trails gas where the enemy moves and deals AD damage over time to the stuck enemy. The gas is combustible, dealing AD damage and burning up to the grenade, then stopping any further gas to pour out. Lasts for 1.5 seconds." },
    w: { name: "Fire From the Sky", desc: "Resin takes a strong stance, super-charging his flamethrower for distance gouts. Resin can shoot bursts of flaming sludge, one further than the previous shot dealing AD damage. He can shoot up to 3 times." },
    e: { name: "Efficiency Over Elegance", desc: "Weapon converts to a sludge flamethrower. Flame from auto attacks travel a fixed distance, dealing damage along whole stream and dealing 60-70% of his AD every 0.5- 0.30 seconds. If the flamethrower touches sludge it combusts into flame. Lasts 5 seconds."},
    r: { name: "Breaking Down the Gate", desc: "Resin shoves a sludge wave in a targeted direction, sending a tidal wave of sludge, breaking champion terrain in its path. The wave leaves a trail of sludge where the wave was, slowing enemies. Enemies that are hit by the wave take some AD damage. Enemy champions that walk in the trail get coated in sludge. If Resin ignites the sludge wave, then the trail catches on fire up to the wave, then ignites the wave. The trail ends where the wave caught flame, engulfing the sludge wave, which then deals bonus AD damage." },
    },
{
    key: "champion-thirteen",
    name: "Horace",
    title: "The Blessed Torment",
    role: "Bot",
    portrait: "assets/champions/horace.jpg",
    lore: "Horace blinked; A sensation he thought would never be felt again. Rising, he took timid steps through the mist as the armor radiated a protective aura, deflecting the mist’s eager hunger. Frozen by a flurry of acolytes invading the vault, Horace waited patiently to see a figure of immense stature and impossibly black shadow step out of the vaults entrance. The acolytes fitted a set of heavy iron peppered with iron spikes around the shadow, encapsulating all but the burning red eyes radiating from the eye slits. Horace readied himself to bring the armored giant a clean, pure set of armor that will never break and will steal away the darkness imbued in it. Before Horace lifted himself from the ground, he saw the iron revenant point to a pair of intertwined spirits gracefully floating where his parents once stood. A flash of a dozen emotions rushed through Horace as he saw the acolytes bring the peaceful spirits before the iron tyrant and have them kneel in twisted pain before him. The sadistic shadow laughed at their forced loyalty, which ravaged Horace’s ears. That laugh echoed continuously in Horace’s head, no matter how far Horace ran. He swore then to use the armor crafted to convert Evils manifestation and make it bow before him and his parents.",
    passive: { name: "Shrapnel Purified", desc: "Horace uses scrap instead of mana. Every 6th auto attack grants Horace 1 scrap. Successfully landing an ability grants him 2 scrap, to a max of 3/4/5. If Horace does not enter combat, every 15 seconds 1 stack decays. If there are no stacks, then every 30 seconds 1 scrap will decay, down to 1 scrap." },
    q: { name: "Fractured Memories", desc: "After 0.20 seconds, Horace tears a metal clump from the ground and launches it, rolling it in a targeted direction. Stores 2 charges. Passing through Dead Kings Crown increases its damage but has reduced speed and opens a gap where the clump passed." },
    w: { name: "Spectral Ties Recoil", desc: "Tunnels an anchor underground. Horace can then pull himself to it. If next basic attack is close range, then it will deal increased AD damage with the anchor." },
    e: { name: "Dead Kings Crown", desc: "After 0.5 seconds, wrenches metal from the ground in an arc, dealing AD damage. Enemy’s that pass through it are slowed and take AD damage per second and applying armor shred (scales on armor penetration)."},
    r: { name: "The Isles Reaping", desc: "After 0.75, racks the ground in a targeted direction by raising razor sharp metal from the ground, dealing AD damage. Stores 3 charges. Only grants 1 scrap if lands successfully. 3 or more champions hit grants 2 scrap." },
    },
];

function buildAbilityRow(key, ability, isPassive) {
  return `
    <div class="lol-ability-row ${isPassive ? "is-passive" : ""}">
      <div class="lol-ability-key">${key}</div>
      <div>
        <p class="lol-ability-name">${ability.name}</p>
        <p class="lol-ability-desc">${ability.desc}</p>
      </div>
    </div>
  `;
}

function buildPortraitHTML(champ, fallbackLabel) {
  if (champ.portrait) {
    return `<img src="${champ.portrait}" alt="${champ.name}">`;
  }
  return fallbackLabel;
}

function renderLolSpotlight(champKey) {
  const champ = LOL_CHAMPIONS.find((c) => c.key === champKey);
  const panel = document.getElementById("lol-spotlight");
  if (!champ || !panel) return;

  panel.innerHTML = `
    <div class="lol-portrait">${buildPortraitHTML(champ, "Splash art / portrait placeholder")}</div>
    <div>
      <h2 class="lol-champ-name">${champ.name}</h2>
      <p class="lol-champ-title">${champ.title}</p>
      <span class="lol-champ-role">${champ.role}</span>
      <p class="lol-champ-lore">${champ.lore}</p>
      <div class="lol-ability-list">
        ${buildAbilityRow("P", champ.passive, true)}
        ${buildAbilityRow("Q", champ.q, false)}
        ${buildAbilityRow("W", champ.w, false)}
        ${buildAbilityRow("E", champ.e, false)}
        ${buildAbilityRow("R", champ.r, false)}
      </div>
    </div>
  `;

  document.querySelectorAll(".lol-champ-tile").forEach((tile) => {
    tile.classList.toggle("is-active", tile.dataset.champ === champKey);
  });
}

function buildLolGallery() {
  const gallery = document.getElementById("lol-gallery");
  if (!gallery) return;

  gallery.innerHTML = LOL_CHAMPIONS.map((c) => `
    <div class="lol-champ-tile" data-champ="${c.key}">
      <div class="lol-tile-portrait">${buildPortraitHTML(c, "Portrait")}</div>
      <p class="lol-tile-name">${c.name}</p>
    </div>
  `).join("");

  gallery.querySelectorAll(".lol-champ-tile").forEach((tile) => {
    tile.addEventListener("click", () => renderLolSpotlight(tile.dataset.champ));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildLolGallery();
  renderLolSpotlight(LOL_CHAMPIONS[0].key);
});