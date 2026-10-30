// Chained Echoes Class Emblem & Stat Browser — data
// All text transcribed/paraphrased from publicly reachable guides on 2026-10-30. No numeric
// stat-bonus values exist in any source reached (see README.md) — every emblem ships with
// numericValue: null, by design, not by omission. Statue locations are corroborated by 3-4
// independent guides each; skill names are single-sourced to arrpeegeez.com (the only source
// reached that names them), though the "2 active + 2 passive per emblem" structure is
// independently confirmed by a Steam Community post. See README.md for full source list and the
// Summoner stat-trend conflict.

var CEDATA = (function () {
  "use strict";

  var SRC = {
    csg: "commonsensegamer.com — \"How to Find All Class Emblems\"",
    arpg: "arrpeegeez.com — Main Walkthrough (Class Emblem guide)",
    gameranx_loc: "gameranx.com — \"How to Unlock All Classes / Class Emblem Locations\"",
    gameranx_build: "gameranx.com — class/emblem pairing guide, \"Class Emblems Equip Guide\" article",
    gptips: "gameplay.tips — \"All Class Emblems Guide\"",
    steam: "Steam Community, app 1229240 — \"Skills/Passives from Class Emblems\" discussion",
    csg_sienna: "commonsensegamer.com — Sienna character-build article"
  };

  var EMBLEMS = [
    {
      id: "cleric",
      name: "Cleric",
      statTrend: {
        text: "Primarily Mind, with secondary boosts to HP, TP, and Magic.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Awaken Spirit", "Heal All"],
        passive: ["MND Up", "Silence Resistance"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "End of the Narslene Sewers — obtained automatically while escaping Farnsport Palace.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.arpg]
      }
    },
    {
      id: "warrior",
      name: "Warrior",
      statTrend: {
        text: "Buffs every stat except Magic and Agility.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Power Pierce", "Power Swing"],
        passive: ["ATK Up", "Defend Gain HP"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Southwest Rohlan Fields, outskirts of Seaside Village — down a pit reached via a woodland path southeast of Basil.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.arpg]
      }
    },
    {
      id: "vampire",
      name: "Vampire",
      statTrend: {
        text: "Increased HP and TP; also grants the ability to sacrifice HP for increased damage.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Ether Sucker", "Life Sucker"],
        passive: ["Undead Killer", "HP Sacrifice"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Fiorwoods — the hidden Research Camp / Taryn Camp in the southern section, reached through the tree-wall paths.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.gptips, SRC.arpg]
      }
    },
    {
      id: "shaman",
      name: "Shaman",
      statTrend: {
        text: "Significant boosts to TP and Magic, with a sizable secondary boost to Mind.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Dispel", "Aqua"],
        passive: ["MAG Up", "TP Gain Up"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Flower Fields of Perpetua — cross the swamp via the fungus/mushroom bulbs, then head west.",
        sources: [SRC.csg, SRC.gptips, SRC.arpg]
      }
    },
    {
      id: "monk",
      name: "Monk",
      statTrend: {
        text: "Huge HP boost with an appreciable secondary boost to Agility.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Herbal Brews", "Drunken Master"],
        passive: ["Counter Attack", "HP Up"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Roof of the Kindreld Monastery, reached via the second-floor stairs and the roof gate.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.gptips, SRC.arpg]
      }
    },
    {
      id: "bandit",
      name: "Bandit",
      statTrend: {
        text: "Primarily Agility, with lesser secondary boosts to Critical, HP, and Attack.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Easy Robbery", "Flash Light"],
        passive: ["AGI Up", "Poison Hit"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Crab Village, Kortara Mountain Range — a hidden path through the trees north of Rockbottom (airship required).",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.gptips, SRC.arpg]
      }
    },
    {
      id: "summoner",
      name: "Summoner",
      statTrend: {
        text: "Huge TP boost. Sources disagree on the secondary stats — see the flagged conflict below.",
        sources: [SRC.csg, SRC.arpg],
        conflict: {
          note: "Two independently-authored guides disagree on Summoner's secondary stat boosts. Shown as-is rather than guessed.",
          a: { source: SRC.csg, text: "\"receives buffs to their TP, as well as their Mind and HP\" — i.e. TP, Mind, HP." },
          b: { source: SRC.arpg, text: "\"Huge TP boost, plus healthy Magic and Mind boosts\" — i.e. TP, Magic, Mind." }
        }
      },
      numericValue: null,
      skills: {
        active: ["Firestorm Split", "Earthstream Split"],
        passive: ["TP Up", "Ether Killer"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Arkant Archipelago — south end of the large southwest island, reached by flight after deactivating 4 ASAC emplacements.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.arpg]
      }
    },
    {
      id: "mage-warrior",
      name: "Mage Warrior",
      statTrend: {
        text: "Small boosts to all stats; none significant.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Magic Smash", "Physical Wonder"],
        passive: ["Fire Attack", "Water Attack"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Ograne Grottos, western area where the Tadeye monsters appear — Sky Armor flight required.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.gptips, SRC.arpg]
      }
    },
    {
      id: "chemist",
      name: "Chemist",
      statTrend: {
        text: "Appreciable boosts to HP, Defense, Mind, and Agility.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Tinkering", "Search"],
        passive: ["Chemistry", "Caretaker"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Flying Continent Shambala — southwest island, reached after deactivating 2 ASAC emplacements.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.arpg]
      }
    },
    {
      id: "pyromancer",
      name: "Pyromancer",
      statTrend: {
        text: "Huge Magic boost, with lesser secondary boosts to TP and Mind.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Ignis", "Ventus"],
        passive: ["Fire Resistance", "Plant Killer"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Leonar Temple shrine, northwest Valandris (north of the Gambler shrine) — reward for solving the temple's orb puzzle; requires the Church Key from Empyrean Ruins and the hidden tablets behind the Perpetua church painting.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.gptips]
      }
    },
    {
      id: "rune-knight",
      name: "Rune Knight",
      statTrend: {
        text: "Small boosts to every stat except a sizable Mind boost; no boost to Agility or Critical.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Light Coat", "Dark Coat"],
        passive: ["DEF Up", "Counter Mag Up"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Leonar Temple shrine, northeast Valandris near the Fiorwoods border — same unlock method as Pyromancer and Gambler.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.gptips]
      }
    },
    {
      id: "gambler",
      name: "Gambler",
      statTrend: {
        text: "Huge Critical boost, with lesser secondary boosts to HP and Agility.",
        sources: [SRC.csg, SRC.arpg],
        conflict: null
      },
      numericValue: null,
      skills: {
        active: ["Blindman's Bluff", "Suspicious Darts"],
        passive: ["Crit Up", "SOS TP Regen"],
        sourced: "single-sourced (arrpeegeez.com) — unconfirmed by a second source"
      },
      statue: {
        text: "Leonar Temple shrine, northwest coast of Valandris — same unlock method as Pyromancer and Rune Knight.",
        sources: [SRC.csg, SRC.gameranx_loc, SRC.gptips]
      }
    }
  ];

  var EMBLEM_IDS = EMBLEMS.map(function (e) { return e.id; });

  // Party members. No base-stat numbers and no class-emblem restriction were found in any
  // reachable source — every character can equip any of the 12 emblems. Recommendations below
  // are an attributed community opinion, never this product's own verdict.
  var CHARACTERS = [
    { name: "Glenn", recommended: ["warrior", "mage-warrior"] },
    { name: "Robb", recommended: ["monk", "chemist"] },
    { name: "Victor", recommended: ["cleric"] },
    { name: "Ba'Thraz", recommended: ["shaman"] },
    { name: "Sienna", recommended: ["bandit", "gambler"], extraSource: SRC.csg_sienna },
    { name: "Lenne", recommended: ["vampire", "pyromancer"] },
    { name: "Amalia", recommended: ["vampire"] },
    { name: "Mikah", recommended: ["gambler"] },
    { name: "Tomke", recommended: ["monk", "summoner"] },
    { name: "Egyl", recommended: ["warrior"] },
    { name: "Raphael", recommended: ["rune-knight"] },
    { name: "Magnolia", recommended: ["summoner"] }
  ];

  return {
    EMBLEMS: EMBLEMS,
    EMBLEM_IDS: EMBLEM_IDS,
    CHARACTERS: CHARACTERS,
    SRC: SRC,
    RECOMMENDATION_SOURCE: SRC.gameranx_build
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = CEDATA;
}
