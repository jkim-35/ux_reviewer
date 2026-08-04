// Mocked UX review generator for POST /api/review.
//
// This is the ONE place the fake data lives. When you're ready to use a real
// AI service (phase 3), you replace the body of buildMockReport() with a call
// to that service and keep returning the same object shape — nothing else in
// the app has to change.
//
// INPUT (exactly what the endpoint accepts):
//   {
//     projectName: string,
//     description: string,
//     task:        string,
//     persona:     { name, role, experience, domain, tech, goal, accessibility },
//     methods:     { synthetic: boolean, heuristic: boolean },
//     screenshots: [{ name, src }]   // `name` is what the review reasons about;
//                                    // `src` is carried through only so the
//                                    // report can show the same thumbnails.
//   }
//
// OUTPUT: a full report object the existing report page already knows how to
// render (header, executive summary, journey, findings, and — when the matching
// method is selected — synthetic observations and the heuristic table).

// Severity → confidence pairing kept obvious so it's easy to hand-tune.
const OUTCOMES = ['Success', 'Hesitation', 'Failure'];

export function buildMockReport(input = {}) {
  const {
    projectName = 'Untitled project',
    task = 'complete the primary task',
    persona = {},
    methods = {},
    screenshots = [],
  } = input;

  const personaName = persona.name || 'The persona';
  const personaRole = persona.role || '';
  const experience = (persona.experience || 'first-time').toLowerCase();

  // Screen names drive both the journey and which screen each finding points at.
  const screens = screenshots.length
    ? screenshots.map((s, i) => s.name || 'Screen ' + (i + 1))
    : ['The interface'];
  const firstScreen = screens[0];
  const midScreen = screens[Math.floor(screens.length / 2)];
  const lastScreen = screens[screens.length - 1];

  // --- The three findings (each has a severity and a recommendation) ---------
  const findings = [
    {
      id: 'F-01',
      sev: 'Critical',
      screen: lastScreen,
      source: 'Both',
      category: 'Interaction feedback & system status',
      conf: 0.91,
      title: 'No feedback confirms the task succeeded',
      evidence: `On "${lastScreen}" nothing signals whether the key step of "${task}" actually completed — no confirmation, status, or result state.`,
      impact: `${personaName} cannot tell if the task worked and may repeat it or abandon the flow, eroding trust in the product.`,
      rec: 'Add an explicit success/confirmation state at the end of the task so the outcome is unmistakable without guessing.',
    },
    {
      id: 'F-02',
      sev: 'High',
      screen: firstScreen,
      source: 'Synthetic User',
      category: 'Content clarity',
      conf: 0.84,
      title: 'The starting point does not orient a new user',
      evidence: `"${firstScreen}" leads with options but never states what to do first, and a ${experience} user has no cue toward "${task}".`,
      impact: 'First-time users hesitate at the entry point, scanning repeatedly before committing to an action.',
      rec: 'Lead the first screen with a short, action-oriented prompt that names the primary task and points to where it begins.',
    },
    {
      id: 'F-03',
      sev: 'Medium',
      screen: midScreen,
      source: 'UX Heuristic',
      category: 'Information hierarchy',
      conf: 0.76,
      title: 'Primary action competes visually with secondary ones',
      evidence: `On "${midScreen}" the main action is styled the same weight as surrounding controls, so nothing signals which one advances the task.`,
      impact: 'Users spend attention deciding where to click, slowing the journey and inviting wrong turns.',
      rec: 'Establish one clear primary action per screen and demote secondary controls to a lighter, secondary style.',
    },
  ];

  // --- Journey: one step per uploaded screen, cycling through outcomes --------
  const journey = screens.map((name, i) => ({
    name,
    src: (screenshots[i] && screenshots[i].src) || undefined,
    action: `Step ${i + 1}: work toward "${task}" on ${name}.`,
    reaction:
      i === 0
        ? `"${personaName} arrives and scans the screen to decide where to begin."`
        : i === screens.length - 1
          ? `"${personaName} finishes but isn't fully sure the task landed."`
          : `"${personaName} moves ahead, pausing briefly to find the right control."`,
    outcome: OUTCOMES[Math.min(i, OUTCOMES.length - 1)],
    findings: findings.filter((f) => f.screen === name).map((f) => f.id),
  }));

  // --- Recommendations: one per finding, prioritised P0 → P2 -----------------
  const recommendations = [
    { priority: 'P0', change: findings[0].rec, rationale: 'Missing outcome feedback is the biggest trust breaker in the flow.', impact: 'Users know the task succeeded and stop repeating or abandoning it.', related: 'F-01' },
    { priority: 'P1', change: findings[1].rec, rationale: 'A clear entry point removes the highest-friction moment for new users.', impact: 'Reduces hesitation at the start of the journey.', related: 'F-02' },
    { priority: 'P2', change: findings[2].rec, rationale: 'A single primary action makes each screen self-explanatory.', impact: 'Speeds decisions and reduces wrong turns.', related: 'F-03' },
  ];

  // --- Method-specific sections (only shown if that method was selected) ------
  // The report page hides these unless the matching method is in `methods`,
  // so we only bother populating them when relevant.
  const observations = methods.synthetic
    ? {
        expectations: [`A clear first step toward "${task}"`, 'Confirmation once the task is done', 'Consistent labels across screens'],
        questions: ['Where do I start?', 'Did that action work?', 'Which button is the main one?'],
        hesitations: [`Paused on "${firstScreen}" before acting`, `Hunted for the primary control on "${midScreen}"`, `Left "${lastScreen}" unsure the task completed`],
        decisions: ['Chose the most prominent control first', 'Skipped anything ambiguous', 'Re-checked the final screen for a result'],
      }
    : {};

  const heuristics = methods.heuristic
    ? [
        { name: 'Visibility of system status', status: 'Violation', note: 'No confirmation that the task completed (F-01).' },
        { name: 'Match between system and the real world', status: 'Pass', note: 'Labels use plain, task-relevant language.' },
        { name: 'User control and freedom', status: 'Warning', note: 'No obvious way to undo or step back mid-task.' },
        { name: 'Consistency and standards', status: 'Pass', note: 'Controls behave consistently across screens.' },
        { name: 'Recognition rather than recall', status: 'Warning', note: 'The starting action must be recalled, not recognised (F-02).' },
        { name: 'Aesthetic and minimalist design', status: 'Warning', note: 'Primary and secondary actions share the same weight (F-03).' },
      ]
    : [];

  // --- Assemble the full report ----------------------------------------------
  const methodLabels = [
    methods.synthetic && 'Synthetic User Review',
    methods.heuristic && 'UX Heuristic Evaluation',
  ].filter(Boolean);

  return {
    project: projectName,
    task,
    // Shaped for the report header (expects personaName / personaRole).
    persona: { personaName, personaRole },
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    methods: methodLabels,
    score: 68, // overall usability score (0–100)
    summary: `${personaName} can complete "${task}" in ${projectName}, but with avoidable friction. The flow holds together, yet the two moments that matter most — knowing where to start and knowing the task succeeded — lack the cues a ${experience} user needs.`,
    strengths: ['Consistent layout across screens', 'Plain, task-relevant labelling', 'A short, understandable journey'],
    risks: ['No confirmation that the task completed', 'An entry point that does not orient new users', 'Competing actions with equal visual weight'],
    taskOutcome: `Likely completion with hesitation — ${personaName} reaches the end but is left unsure the task landed.`,
    findings,
    journey,
    recommendations,
    observations,
    heuristics,
  };
}
