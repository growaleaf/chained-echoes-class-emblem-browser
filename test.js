// Headless known-answer / structural tests. Run: node test.js
var data = require("./data.js");
var fs = require("fs");

var failures = 0;

function assert(cond, label) {
  if (!cond) {
    failures++;
    console.log("FAIL " + label);
  } else {
    console.log("PASS " + label);
  }
}

// ───────────────────────────────── structural

assert(Array.isArray(data.EMBLEMS) && data.EMBLEMS.length === 12, "EMBLEMS has exactly 12 entries");
assert(Array.isArray(data.CHARACTERS) && data.CHARACTERS.length === 12, "CHARACTERS has exactly 12 entries (not 10)");

var EXPECTED_IDS = ["cleric", "warrior", "vampire", "shaman", "monk", "bandit", "summoner",
  "mage-warrior", "chemist", "pyromancer", "rune-knight", "gambler"];
assert(JSON.stringify(data.EMBLEM_IDS.slice().sort()) === JSON.stringify(EXPECTED_IDS.slice().sort()),
  "EMBLEM_IDS matches the 12 known class emblems");

data.EMBLEMS.forEach(function (e) {
  assert(typeof e.id === "string" && e.id.length > 0, e.name + " has a non-empty id");
  assert(typeof e.name === "string" && e.name.length > 0, e.id + " has a non-empty name");

  // Every emblem renders without a crash even with missing stat data: numericValue must be
  // explicitly null (never a fabricated number), and statTrend.text must always be present.
  assert(e.numericValue === null, e.name + " numericValue is explicitly null (no numeric source exists)");
  assert(typeof e.statTrend === "object" && typeof e.statTrend.text === "string" && e.statTrend.text.length > 0,
    e.name + " has non-empty statTrend.text");
  assert(Array.isArray(e.statTrend.sources) && e.statTrend.sources.length >= 1,
    e.name + " statTrend cites at least one source");

  // Skills: structurally always 2 active + 2 passive, and the single-sourced label must be present.
  assert(Array.isArray(e.skills.active) && e.skills.active.length === 2, e.name + " has exactly 2 active skills");
  assert(Array.isArray(e.skills.passive) && e.skills.passive.length === 2, e.name + " has exactly 2 passive skills");
  assert(typeof e.skills.sourced === "string" && e.skills.sourced.indexOf("single-sourced") !== -1,
    e.name + " skills carry a visible single-sourced label");

  // Statue location always present with at least 2 corroborating sources (never single-sourced
  // per the charter's same-rule-for-claims discipline).
  assert(typeof e.statue.text === "string" && e.statue.text.length > 0, e.name + " has a non-empty statue location");
  assert(Array.isArray(e.statue.sources) && e.statue.sources.length >= 2,
    e.name + " statue location is corroborated by 2+ independent sources");
});

// The single-sourced label renders when expected: every emblem's skills carry it (none are
// multi-sourced for skill names), and it must NOT falsely appear on statue location text.
data.EMBLEMS.forEach(function (e) {
  assert(e.skills.sourced.toLowerCase().indexOf("single-sourced") !== -1,
    e.name + ": single-sourced label present on skills (expected — no 2nd source names skill text)");
  assert(e.statue.text.toLowerCase().indexOf("single-sourced") === -1,
    e.name + ": no false single-sourced label on statue text (it is multi-sourced)");
});

// Exactly one emblem (Summoner) carries a disclosed stat conflict; no emblem silently resolves one.
var conflicted = data.EMBLEMS.filter(function (e) { return e.statTrend.conflict !== null; });
assert(conflicted.length === 1 && conflicted[0].id === "summoner",
  "exactly one emblem (Summoner) has a disclosed, unresolved stat-trend conflict");
assert(conflicted[0].statTrend.conflict.a.source !== conflicted[0].statTrend.conflict.b.source,
  "Summoner's conflict cites two distinct sources, not the same source twice");

// Character structural checks + recommendation IDs must resolve to real emblems.
data.CHARACTERS.forEach(function (c) {
  assert(typeof c.name === "string" && c.name.length > 0, "character has a non-empty name");
  assert(Array.isArray(c.recommended) && c.recommended.length >= 1, c.name + " has at least one recommended emblem");
  c.recommended.forEach(function (id) {
    assert(data.EMBLEM_IDS.indexOf(id) !== -1, c.name + "'s recommendation '" + id + "' is a real emblem id");
  });
});

// ───────────────────────────────── compare view (structural — no numeric deltas exist to compute)

function compareTwo(idA, idB) {
  var a = data.EMBLEMS.filter(function (e) { return e.id === idA; })[0];
  var b = data.EMBLEMS.filter(function (e) { return e.id === idB; })[0];
  return {
    a: { name: a.name, trend: a.statTrend.text, skills: a.skills, statue: a.statue.text },
    b: { name: b.name, trend: b.statTrend.text, skills: b.skills, statue: b.statue.text }
  };
}

[["cleric", "warrior"], ["monk", "bandit"], ["gambler", "rune-knight"]].forEach(function (pair) {
  var result = compareTwo(pair[0], pair[1]);
  assert(result.a.name !== result.b.name, "compare(" + pair[0] + ", " + pair[1] + "): two distinct emblem names");
  assert(result.a.trend.length > 0 && result.b.trend.length > 0,
    "compare(" + pair[0] + ", " + pair[1] + "): both sides carry non-empty stat-trend text");
  assert(result.a.skills.active.length === 2 && result.b.skills.active.length === 2,
    "compare(" + pair[0] + ", " + pair[1] + "): both sides carry 2 active skills each");
  assert(result.a.statue !== result.b.statue,
    "compare(" + pair[0] + ", " + pair[1] + "): statue locations correctly differ between the two emblems");
});

// Comparing an emblem against itself should be structurally identical (sanity check that the
// lookup and rendering path is deterministic, not that it's a meaningful comparison).
(function () {
  var selfCompare = compareTwo("cleric", "cleric");
  assert(selfCompare.a.trend === selfCompare.b.trend && selfCompare.a.statue === selfCompare.b.statue,
    "compare(cleric, cleric): self-compare is identical on both sides (deterministic lookup)");
})();

// ───────────────────────────────── banned-word sweep (rendered copy + raw data)

var BANNED = ["compliant", "certified", "approved", "guaranteed", "best", "optimal", "s-tier"];
var html = fs.readFileSync(__dirname + "/index.html", "utf8");
var lowerHtml = html.toLowerCase();
BANNED.forEach(function (word) {
  assert(lowerHtml.indexOf(word) === -1, "index.html does not contain banned verdict word '" + word + "'");
});

var dataSrc = fs.readFileSync(__dirname + "/data.js", "utf8").toLowerCase();
BANNED.forEach(function (word) {
  assert(dataSrc.indexOf(word) === -1, "data.js does not contain banned verdict word '" + word + "'");
});

console.log("");
if (failures === 0) {
  console.log("ALL TESTS PASSED");
  process.exit(0);
} else {
  console.log(failures + " TEST(S) FAILED");
  process.exit(1);
}
