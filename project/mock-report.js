// Mocked review data — swap buildReport() for a real API response later.
export const AREAS = ['Navigation & wayfinding','User-task completion','Content clarity','Information hierarchy','Consistency & standards','Interaction feedback & system status','Error prevention & recovery','Accessibility'];

function shotSvg(title, variant) {
  const blocks = {
    login: '<rect x="120" y="60" width="160" height="10" rx="3" fill="#d2d2d7"/><rect x="100" y="90" width="200" height="26" rx="6" fill="#e8e8ed"/><rect x="100" y="124" width="200" height="26" rx="6" fill="#e8e8ed"/><rect x="100" y="160" width="200" height="26" rx="13" fill="#0071e3" opacity="0.7"/>',
    dash: '<rect x="20" y="50" width="170" height="70" rx="6" fill="#e8e8ed"/><rect x="200" y="50" width="180" height="70" rx="6" fill="#e8e8ed"/><rect x="20" y="130" width="360" height="60" rx="6" fill="#e8e8ed"/>',
    search: '<rect x="60" y="80" width="280" height="30" rx="15" fill="#e8e8ed"/><rect x="60" y="124" width="120" height="10" rx="3" fill="#d2d2d7"/><rect x="60" y="144" width="180" height="10" rx="3" fill="#e8e8ed"/>',
    results: '<rect x="20" y="52" width="360" height="26" rx="4" fill="#e8e8ed"/><rect x="20" y="86" width="360" height="26" rx="4" fill="#e8e8ed"/><rect x="20" y="120" width="360" height="26" rx="4" fill="#e8e8ed"/><rect x="20" y="154" width="360" height="26" rx="4" fill="#e8e8ed"/>',
    detail: '<rect x="20" y="50" width="130" height="140" rx="6" fill="#e8e8ed"/><rect x="164" y="50" width="216" height="12" rx="3" fill="#d2d2d7"/><rect x="164" y="74" width="180" height="10" rx="3" fill="#e8e8ed"/><rect x="164" y="94" width="216" height="40" rx="4" fill="#e8e8ed"/><rect x="164" y="144" width="216" height="46" rx="4" fill="#e8e8ed"/>'
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 210"><rect width="400" height="210" fill="#ffffff"/><rect width="400" height="30" fill="#f5f5f7"/><circle cx="16" cy="15" r="5" fill="#d2d2d7"/><rect x="30" y="10" width="90" height="10" rx="3" fill="#d2d2d7"/>${blocks[variant] || blocks.dash}<text x="200" y="205" font-family="-apple-system,Helvetica,Arial" font-size="11" fill="#86868b" text-anchor="middle">${title}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

export const SAMPLE = {
  form: {
    projectName: 'Theia Vessel Search',
    description: 'Maritime intelligence platform for tracking vessels, detecting sanctioned ships, and analyzing AIS behavior from satellite imagery.',
    task: 'Find a specific vessel by name or IMO number and confirm its sanctions status.',
    protoUrl: 'https://theia.synmax.com',
    personaName: 'Dana Reyes',
    personaRole: 'Maritime intelligence analyst',
    experience: 'First-time',
    goal: 'Locate a specific vessel and confirm its sanctions status before filing a report.',
    domain: 'High',
    tech: 'Medium',
    accessibility: 'Prefers keyboard navigation',
    preset: 'First-time user',
    methods: { synthetic: true, heuristic: true },
    areas: ['Navigation & wayfinding','User-task completion','Content clarity','Interaction feedback & system status','Error prevention & recovery']
  },
  shots: [
    { name: 'Sign In', src: shotSvg('Sign In','login') },
    { name: 'Home Dashboard', src: shotSvg('Home Dashboard','dash') },
    { name: 'Vessel Search', src: shotSvg('Vessel Search','search') },
    { name: 'Search Results', src: shotSvg('Search Results','results') },
    { name: 'Vessel Detail', src: shotSvg('Vessel Detail','detail') }
  ]
};

const FINDINGS = [
  { id:'F-01', sev:'Critical', screenIdx:3, source:'Both', category:'Interaction feedback & system status', conf:0.92, title:'No feedback while a search is running', evidence:'The results screen shows no spinner, skeleton, or progress state between submitting a query and results appearing.', impact:'Users assume the search failed and resubmit or abandon, doubling load and eroding trust in the data.', rec:'Add an immediate loading state (skeleton rows plus a “Searching 214,000 vessels…” message) within 100ms of submission.' },
  { id:'F-02', sev:'Critical', screenIdx:4, source:'Synthetic User', category:'Information hierarchy', conf:0.88, title:'Sanctions status is below the fold', evidence:'The sanctions panel sits under two scrolls of vessel metadata; nothing above the fold signals compliance state.', impact:'The primary task outcome — confirming sanctions status — can be missed entirely. The persona scrolled past it.', rec:'Pin a sanctions status banner to the top of the vessel detail header, color-coded and visible without scrolling.' },
  { id:'F-03', sev:'High', screenIdx:2, source:'Both', category:'Content clarity', conf:0.85, title:'Accepted search formats are not explained', evidence:'The search field placeholder reads only “Search”. No hint indicates whether name, IMO, or MMSI are accepted.', impact:'First-time users hesitate before typing and may format identifiers incorrectly, producing false zero-result outcomes.', rec:'Add placeholder and helper text: “Vessel name, IMO, or MMSI” with an example, plus inline format validation.' },
  { id:'F-04', sev:'High', screenIdx:3, source:'UX Heuristic', category:'Error prevention & recovery', conf:0.8, title:'Zero-result search offers no recovery path', evidence:'An empty result set shows only “No results found” with no suggestions, spelling help, or filter reset.', impact:'Users hit a dead end and cannot tell whether the vessel does not exist or their query was malformed.', rec:'Design the zero-result state with likely-match suggestions, a filter reset, and a link to search syntax help.' },
  { id:'F-05', sev:'High', screenIdx:0, source:'UX Heuristic', category:'Error prevention & recovery', conf:0.66, title:'Session timeout discards search context', evidence:'Re-authentication returns users to the dashboard rather than the screen they were on.', impact:'Analysts lose in-progress queries and filters mid-investigation and must reconstruct their work.', rec:'Preserve the return URL and restore query state after re-authentication.' },
  { id:'F-06', sev:'Medium', screenIdx:3, source:'Synthetic User', category:'Content clarity', conf:0.78, title:'Filter labels use internal jargon', evidence:'Filters labeled “Dark ships” and “RF fusion” appear with no tooltip or definition.', impact:'New analysts cannot predict what the filters do and avoid them, missing relevant results.', rec:'Add one-line tooltips defining each filter term, matching the language of the analyst’s workflow.' },
  { id:'F-07', sev:'Medium', screenIdx:4, source:'UX Heuristic', category:'Consistency & standards', conf:0.9, title:'Inconsistent date formats across views', evidence:'Results list shows “02/17/26” while the detail view shows “Feb 17, 2026”.', impact:'Ambiguous day/month ordering risks misreading time-critical intelligence.', rec:'Standardize on one unambiguous format (e.g. 2026-02-17) across all tables and detail views.' },
  { id:'F-08', sev:'Medium', screenIdx:4, source:'UX Heuristic', category:'Information hierarchy', conf:0.7, title:'Primary action competes with export', evidence:'“Track Vessel” and “Export to CSV” are styled identically and sit side by side in the detail header.', impact:'Visual weight does not communicate which action advances the core task.', rec:'Style “Track Vessel” as the single primary action; demote export to a secondary button.' },
  { id:'F-09', sev:'Low', screenIdx:1, source:'UX Heuristic', category:'Accessibility', conf:0.82, title:'Secondary text falls below contrast minimums', evidence:'Module captions render at roughly 3.1:1 against the card background.', impact:'Low-vision users and sunlight conditions make supporting metadata hard to read.', rec:'Raise secondary text contrast to at least 4.5:1.' },
  { id:'F-10', sev:'Low', screenIdx:1, source:'Synthetic User', category:'Navigation & wayfinding', conf:0.6, title:'Help is not discoverable', evidence:'No help or documentation entry point appears in any captured screen.', impact:'Users who stall on search syntax have no in-product path to assistance.', rec:'Add a persistent help affordance in the global navigation linking to search syntax docs.' }
];

const JOURNEY = [
  { action:'Authenticate with company SSO', reaction:'“Straightforward — the SSO button is exactly where I expect it.”', outcome:'Success' },
  { action:'Orient and locate the vessel search entry point', reaction:'“Lots of modules here. I scan the page twice before spotting Search in the top bar.”', outcome:'Hesitation' },
  { action:'Enter the vessel name or IMO number', reaction:'“Do I need the IMO here, or will the name work? Nothing tells me either way.”', outcome:'Hesitation' },
  { action:'Identify the correct vessel among results', reaction:'“It sat blank for a few seconds — did my search even go through?”', outcome:'Hesitation' },
  { action:'Confirm the vessel’s sanctions status', reaction:'“I found the vessel, but I nearly filed without seeing the sanctions panel — it was two scrolls down.”', outcome:'Failure' }
];

const HEURISTICS = [
  { name:'Visibility of system status', status:'Violation', note:'No loading indicator during search queries (F-01).' },
  { name:'Match between system and the real world', status:'Warning', note:'“Dark ships” and “RF fusion” are unexplained for new analysts (F-06).' },
  { name:'User control and freedom', status:'Warning', note:'No in-app back from vessel detail; browser back loses applied filters.' },
  { name:'Consistency and standards', status:'Warning', note:'Two date formats across results and detail views (F-07).' },
  { name:'Error prevention', status:'Violation', note:'Search accepts malformed IMO numbers with no inline validation (F-03).' },
  { name:'Recognition rather than recall', status:'Pass', note:'Recent searches are surfaced on the search screen.' },
  { name:'Flexibility and efficiency of use', status:'Pass', note:'Saved searches support repeat queries for returning analysts.' },
  { name:'Aesthetic and minimalist design', status:'Pass', note:'Dashboard modules are dense but individually restrained.' },
  { name:'Help users recover from errors', status:'Violation', note:'Zero-result state offers no correction path (F-04).' },
  { name:'Help and documentation', status:'Not observable', note:'No help entry point visible in the captured screens (F-10).' }
];

const RECS = [
  { priority:'P0', change:'Add an immediate loading state to search', rationale:'Absence of feedback is the single largest trust breaker in the journey.', impact:'Eliminates perceived freezes and duplicate submissions.', related:'F-01' },
  { priority:'P0', change:'Pin sanctions status to the top of vessel detail', rationale:'The task’s success criterion must be visible without scrolling.', impact:'Task-completion outcome moves from at-risk to likely success.', related:'F-02' },
  { priority:'P1', change:'Explain accepted search formats inline', rationale:'First-time users cannot infer identifier formats.', impact:'Reduces hesitation at the highest-friction step of the journey.', related:'F-03' },
  { priority:'P1', change:'Design a recoverable zero-result state', rationale:'Dead ends convert recoverable errors into abandonment.', impact:'Users self-correct malformed queries without support.', related:'F-04' },
  { priority:'P2', change:'Standardize date formats to ISO 8601', rationale:'Ambiguous dates risk misread intelligence.', impact:'Removes a recurring source of misinterpretation in reports.', related:'F-07' }
];

const OBSERVATIONS = {
  expectations: ['Search accepts either a vessel name or an IMO/MMSI number','Sanctions status appears at the top of a vessel record','Recent searches persist between sessions'],
  questions: ['Which identifier formats does search accept?','Does “Dark ships” include AIS gaps, or only spoofing?','Is this data live, or from the last satellite pass?'],
  hesitations: ['Paused 4–6 seconds at the empty search field before typing','Re-read the filter labels on the results page without applying any','Scrolled past the sanctions panel without registering it'],
  decisions: ['Searched by name rather than IMO to avoid format errors','Ignored filters entirely on the first pass','Used browser back instead of in-app navigation, losing filters']
};

export function buildReport(form, shots) {
  const screens = shots.map((s, i) => s.name || 'Screen ' + (i + 1));
  const n = screens.length;
  const findings = FINDINGS.map(f => ({ ...f, screen: screens[Math.min(f.screenIdx, n - 1)] }));
  const journey = shots.map((s, i) => {
    const j = JOURNEY[Math.min(i, JOURNEY.length - 1)];
    return { name: screens[i], src: s.src, action: j.action, reaction: j.reaction, outcome: j.outcome,
      findings: findings.filter(f => f.screen === screens[i]).map(f => f.id) };
  });
  return {
    project: form.projectName, task: form.task, persona: form,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    methods: [form.methods.synthetic && 'Synthetic User Review', form.methods.heuristic && 'UX Heuristic Evaluation'].filter(Boolean),
    score: 64,
    summary: `${form.personaName || 'The persona'} can complete “${form.task}” but with significant friction. The journey holds together structurally — authentication and navigation succeed — yet the two moments that matter most (submitting a search and confirming the outcome) both lack feedback and visibility. The interface assumes familiarity that a ${form.experience?.toLowerCase() || 'first-time'} user does not have.`,
    strengths: ['Clean, consistent global navigation across all screens','Recent searches reduce recall burden on repeat visits','Dense data views remain individually legible'],
    risks: ['No system feedback during the core search interaction','The task’s success criterion (sanctions status) is easy to miss','Dead-end error states with no recovery path'],
    taskOutcome: 'Likely completion with assistance — the persona reached the vessel record but hesitated at search entry and initially missed the sanctions status.',
    journey, findings, heuristics: HEURISTICS, recommendations: RECS, observations: OBSERVATIONS
  };
}

export const HISTORY = [
  { id:'R-014', project:'Theia Vessel Search', persona:'Dana Reyes', role:'Maritime intelligence analyst', task:'Find a specific vessel by name or IMO number and confirm its sanctions status.', date:'2026-07-18', score:64, methods:{synthetic:true,heuristic:true}, screens:5, sev:{Critical:2,High:3,Medium:3,Low:2} },
  { id:'R-013', project:'Theia Station Builder', persona:'Marcus Webb', role:'Fleet operations lead', task:'Create a monitoring station covering the Strait of Hormuz.', date:'2026-07-11', score:78, methods:{synthetic:true,heuristic:false}, screens:4, sev:{Critical:0,High:2,Medium:4,Low:1} },
  { id:'R-012', project:'Hyperion Basin Forecast', persona:'Priya Natarajan', role:'Energy market analyst', task:'Compare 90-day production forecasts for two Permian operators.', date:'2026-07-02', score:71, methods:{synthetic:false,heuristic:true}, screens:6, sev:{Critical:1,High:2,Medium:2,Low:3} },
  { id:'R-011', project:'Theia Alert Settings', persona:'Dana Reyes', role:'Maritime intelligence analyst', task:'Configure a spoofing alert for a watched fleet.', date:'2026-06-24', score:82, methods:{synthetic:true,heuristic:true}, screens:3, sev:{Critical:0,High:1,Medium:3,Low:2} },
  { id:'R-010', project:'Agentic Task Composer', persona:'Sam Okafor', role:'Intelligence analyst, new hire', task:'Delegate a vessel-history pull to an agent and review the result.', date:'2026-06-17', score:58, methods:{synthetic:true,heuristic:true}, screens:5, sev:{Critical:3,High:2,Medium:2,Low:1} },
  { id:'R-009', project:'Hyperion Well Detail', persona:'Priya Natarajan', role:'Energy market analyst', task:'Locate a well by API number and export its production series.', date:'2026-06-05', score:74, methods:{synthetic:false,heuristic:true}, screens:4, sev:{Critical:0,High:2,Medium:3,Low:2} },
];
