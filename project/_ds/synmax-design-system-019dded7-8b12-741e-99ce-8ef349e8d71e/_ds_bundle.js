/* @ds-bundle: {"format":3,"namespace":"SynMaxDesignSystem_019dde","components":[],"sourceHashes":{"ui_kits/_shared/icons.jsx":"28d24761dee1","ui_kits/theia/Icons.jsx":"9bd44bc2e390","ui_kits/theia/Layout.jsx":"2f4c17fd89a8","ui_kits/theia/MapView.jsx":"a13910a9bd01","ui_kits/theia/Primitives.jsx":"2647527725b0","ui_kits/theia/ShipDetailPanel.jsx":"40ee87cbf7ee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SynMaxDesignSystem_019dde = window.SynMaxDesignSystem_019dde || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/_shared/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SynMax icon library — Lucide-style 24×24, 1.5px stroke, currentColor.
// Closest open match to the Untitled UI / Hugeicons set used in the Figma file.
// FLAG: substitute set — the canonical SynMax icons live in Figma /Icons.

const Icon = ({
  d,
  size = 16,
  stroke = 1.5,
  fill = 'none',
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rest), typeof d === 'string' ? /*#__PURE__*/React.createElement("path", {
  d: d
}) : d);
const Icons = {
  Grid: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7"
    }))
  })),
  Folder: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  })),
  Share: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8.6",
      y1: "13.5",
      x2: "15.4",
      y2: "17.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.4",
      y1: "6.5",
      x2: "8.6",
      y2: "10.5"
    }))
  })),
  File: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 2 14 8 20 8"
    }))
  })),
  Mail: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 7 12 13 2 7"
    }))
  })),
  Bell: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
    }))
  })),
  User: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "7",
      r: "4"
    }))
  })),
  Search: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    }))
  })),
  Plus: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }))
  })),
  X: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }))
  })),
  ChevronDown: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M6 9l6 6 6-6"
  })),
  ChevronRight: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M9 6l6 6-6 6"
  })),
  ChevronLeft: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M15 6l-6 6 6 6"
  })),
  ChevronUp: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M18 15l-6-6-6 6"
  })),
  Filter: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M3 4h18l-7 9v6l-4 2v-8z"
  })),
  List: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "18",
      x2: "21",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "3.01",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "3.01",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "3.01",
      y2: "18"
    }))
  })),
  Map: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "6",
      x2: "16",
      y2: "22"
    }))
  })),
  Anchor: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12H2a10 10 0 0 0 20 0h-3"
    }))
  })),
  Ship: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 17 12 4l9 13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 17l3 4h12l3-4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "4",
      x2: "12",
      y2: "21"
    }))
  })),
  Alert: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m21.7 18-9-15.4a2 2 0 0 0-3.4 0l-9 15.4a2 2 0 0 0 1.7 3h17.9a2 2 0 0 0 1.8-3z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    }))
  })),
  Settings: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.05a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.05a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.05a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
    }))
  })),
  Eye: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }))
  })),
  EyeOff: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    }))
  })),
  Calendar: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    }))
  })),
  Clock: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    }))
  })),
  Download: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }))
  })),
  Trash: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }))
  })),
  Edit: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"
    }))
  })),
  Sparkle: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"
  })),
  BarChart: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "16"
    }))
  })),
  TrendUp: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "23 6 13.5 15.5 8.5 10.5 1 18"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "17 6 23 6 23 12"
    }))
  })),
  Globe: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    }))
  })),
  Layers: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 2 7 12 12 22 7 12 2"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 17 12 22 22 17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 12 12 17 22 12"
    }))
  })),
  Target: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    }))
  })),
  Check: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M20 6 9 17l-5-5"
  })),
  Info: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8"
    }))
  })),
  Drop: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
  })),
  Zap: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M13 2 3 14h9l-1 8 10-12h-9z"
  })),
  Send: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "22 2 15 22 11 13 2 9 22 2"
    }))
  }))
};
window.Icons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/theia/Icons.jsx
try { (() => {
// Theia icons — small lucide-style stroke icons. Inline so we have no CDN dep.
// Stroke 1.5, currentColor, 24-grid.

const Ico = (path, viewBox = '0 0 24 24') => ({
  size = 16,
  color = 'currentColor',
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: viewBox,
  fill: "none",
  stroke: color,
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: style
}, path);
const Icons = {
  Search: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))),
  Plus: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }))),
  Bell: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  }))),
  User: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  }))),
  Grid: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }))),
  Folder: Ico(/*#__PURE__*/React.createElement("path", {
    d: "M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
  })),
  Share: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"
  }))),
  File: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v6h6"
  }))),
  Mail: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  }))),
  ChevronDown: Ico(/*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  ChevronRight: Ico(/*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  })),
  Filter: Ico(/*#__PURE__*/React.createElement("path", {
    d: "M3 5h18l-7 9v6l-4-2v-4Z"
  })),
  Layers: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12 3 9 5-9 5-9-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 13 9 5 9-5"
  }))),
  Anchor: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v15M5 16a7 7 0 0 0 14 0M3 16h4M17 16h4"
  }))),
  Eye: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }))),
  Alert: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 2 20h20Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v5M12 17.5v.01"
  }))),
  Compass: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15.5 8.5-2 5-5 2 2-5z"
  }))),
  Close: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))),
  Settings: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.36.16.66.42.88.74"
  }))),
  More: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.5"
  }))),
  Ship: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 17h18l-2 4H5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 13V8h14v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v5"
  }))),
  Pin: Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })))
};
window.Icons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/theia/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/theia/Layout.jsx
try { (() => {
// Theia layout primitives — top header, left nav, station tabs.
// Mirrors the dashboard at /Design-Dashboard/Dashboard in the Figma file.

const {
  useState
} = React;
const I = window.Icons;
function TopHeader({
  brand = 'theia'
}) {
  const config = {
    theia: {
      bar: '#006CD7',
      label: 'THEIA',
      sub: 'INTELLIGENCE',
      bg: '#24263C'
    },
    hyperion: {
      bar: '#2483F8',
      label: 'HYPERION',
      sub: 'ENERGY',
      bg: '#181926'
    },
    basiniq: {
      bar: '#FC701A',
      label: 'BASINIQ',
      sub: 'BASIN ANALYTICS',
      bg: '#181926'
    },
    agentic: {
      bar: '#7C84FC',
      label: 'AGENTIC',
      sub: 'AGENT INTEL.',
      bg: '#131928'
    }
  }[brand];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: config.bar
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 78,
      background: config.bg,
      borderBottom: '1px solid #393C56',
      display: 'flex',
      alignItems: 'center',
      padding: '0 50px',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "18",
    viewBox: "0 0 28 22",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 11 C 2 11, 7 3, 14 3 C 21 3, 26 11, 26 11 C 26 11, 21 19, 14 19 C 7 19, 2 11, 2 11 Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "11",
    r: "3.5",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14 3 L 18 -1 L 16 5",
    stroke: config.bar,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: '0.1em'
    }
  }, "SYNMAX"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: '#393C56'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: config.bar,
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.16em'
    }
  }, config.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#888F9E',
      fontWeight: 500,
      fontSize: 7,
      letterSpacing: '0.2em',
      marginTop: 2
    }
  }, config.sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginLeft: 32,
      alignSelf: 'flex-end',
      gap: 0,
      height: '100%',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    active: true
  }, /*#__PURE__*/React.createElement(I.Grid, {
    size: 16
  }))), /*#__PURE__*/React.createElement(StationTabs, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(I.Bell, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: 7,
      height: 7,
      background: '#F75349',
      borderRadius: '50%'
    }
  })), /*#__PURE__*/React.createElement(I.User, {
    size: 18
  }))));
}
function Tab({
  active,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      height: 40,
      padding: '0 22px',
      background: active ? '#181926' : 'transparent',
      border: 'none',
      borderTop: active ? '2px solid transparent' : 'none',
      color: active ? '#fff' : '#888F9E',
      fontFamily: 'inherit',
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, children);
}
function StationTabs() {
  const [tabs, setTabs] = useState(['Untitled Station']);
  const [active, setActive] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignSelf: 'flex-end',
      height: 40,
      alignItems: 'flex-end'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement(Tab, {
    key: i,
    active: i === active,
    onClick: () => setActive(i)
  }, t)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setTabs([...tabs, 'Untitled Station']);
      setActive(tabs.length);
    },
    style: {
      height: 40,
      width: 40,
      background: 'transparent',
      border: 'none',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(I.Plus, {
    size: 16
  })));
}
function LeftNav({
  active = 'all',
  onChange
}) {
  const items = [{
    id: 'all',
    icon: I.Grid,
    label: 'All Stations'
  }, {
    id: 'folders',
    icon: I.Folder,
    label: 'Folders',
    expandable: true
  }, {
    id: 'shared',
    icon: I.Share,
    label: 'Shared with me'
  }];
  const items2 = [{
    id: 'res',
    icon: I.File,
    label: 'Resources'
  }, {
    id: 'contact',
    icon: I.Mail,
    label: 'Contact'
  }];
  const Item = ({
    it
  }) => {
    const Ico = it.icon;
    const isActive = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onChange?.(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 40,
        padding: '0 18px',
        background: isActive ? '#006CD7' : 'transparent',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 13,
        fontWeight: 500,
        width: '100%',
        justifyContent: 'flex-start',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      size: 16
    }), /*#__PURE__*/React.createElement("span", null, it.label), it.expandable && /*#__PURE__*/React.createElement(I.ChevronDown, {
      size: 14,
      style: {
        marginLeft: 'auto'
      }
    }));
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 240,
      background: '#181926',
      borderRight: '1px solid #2D2F4A',
      display: 'flex',
      flexDirection: 'column',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 14px 14px'
    }
  }, /*#__PURE__*/React.createElement(I.Search, {
    size: 14,
    style: {
      position: 'absolute',
      left: 26,
      top: 11,
      color: '#888F9E'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search",
    style: {
      width: '100%',
      height: 36,
      padding: '0 12px 0 32px',
      background: '#24263C',
      border: '1px solid #393C56',
      borderRadius: 4,
      color: '#fff',
      fontFamily: 'inherit',
      fontSize: 13
    }
  })), items.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.id,
    it: it
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: '#2D2F4A',
      margin: '14px 0'
    }
  }), items2.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.id,
    it: it
  })));
}
window.TopHeader = TopHeader;
window.LeftNav = LeftNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/theia/Layout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/theia/MapView.jsx
try { (() => {
// Theia map view — fake satellite/dark vector basemap with vessel pins.

const I3 = window.Icons;
function MapView({
  vessels = [],
  onSelect,
  selectedId
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      background: 'radial-gradient(ellipse at 30% 40%, #1A2133 0%, #0A0E19 70%)',
      borderRadius: 4,
      overflow: 'hidden',
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.18
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    width: "80",
    height: "80",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 80 0 L 0 0 0 80",
    fill: "none",
    stroke: "#495980",
    strokeWidth: "0.5"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#grid)"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    },
    viewBox: "0 0 800 480",
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60 80 Q 120 60 180 90 T 280 120 L 260 200 Q 200 220 140 210 T 60 180 Z",
    fill: "#232C42",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 380 60 Q 480 40 580 80 L 620 160 Q 540 200 460 180 T 360 140 Z",
    fill: "#232C42",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 500 280 Q 600 260 720 300 L 740 380 Q 640 410 540 380 T 480 340 Z",
    fill: "#232C42",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 80 320 Q 160 300 220 340 L 200 410 Q 140 420 100 400 Z",
    fill: "#232C42",
    opacity: "0.7"
  })), vessels.map(v => /*#__PURE__*/React.createElement("button", {
    key: v.id,
    onClick: () => onSelect?.(v.id),
    style: {
      position: 'absolute',
      left: `${v.x}%`,
      top: `${v.y}%`,
      transform: 'translate(-50%,-50%)',
      width: 28,
      height: 28,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'transparent',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, v.id === selectedId && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -6,
      borderRadius: '50%',
      border: `2px solid ${v.tone === 'error' ? '#F75349' : '#006CD7'}`,
      animation: 'pulse 1.6s ease-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: v.tone === 'error' ? '#F75349' : v.tone === 'warn' ? '#FFCF5C' : '#1CC86B',
      border: '2px solid #fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.6)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      fontFamily: 'Roboto Mono',
      fontSize: 10,
      color: '#888F9E',
      background: 'rgba(24,25,38,0.7)',
      backdropFilter: 'blur(6px)',
      padding: '4px 8px',
      borderRadius: 4
    }
  }, "34.0231\xB0N, 17.8112\xB0E \xB7 zoom 6"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      background: 'rgba(24,25,38,0.92)',
      backdropFilter: 'blur(8px)',
      border: '1px solid #393C56',
      borderRadius: 4,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 12
    }
  }, ['AIS layer', 'Sanctioned', 'Spoofing', 'Webcam'].map((l, i) => /*#__PURE__*/React.createElement("label", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: i < 2,
    style: {
      accentColor: '#006CD7'
    }
  }), l))), /*#__PURE__*/React.createElement("style", null, `@keyframes pulse { 0%{opacity:1; transform: scale(1)} 100%{opacity:0; transform: scale(2)} }`));
}
window.MapView = MapView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/theia/MapView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/theia/Primitives.jsx
try { (() => {
// Theia primitives — Button, Card, Pill, EmptyState, StatCard

const I2 = window.Icons;
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  onClick,
  style
}) {
  const sizes = {
    sm: {
      h: 28,
      px: 12,
      fs: 12
    },
    md: {
      h: 36,
      px: 14,
      fs: 13
    },
    lg: {
      h: 44,
      px: 18,
      fs: 14
    }
  }[size];
  const variants = {
    primary: {
      bg: '#006CD7',
      color: '#fff',
      border: 'none'
    },
    secondary: {
      bg: 'transparent',
      color: '#fff',
      border: '1px solid #393C56'
    },
    ghost: {
      bg: 'transparent',
      color: '#888F9E',
      border: 'none'
    },
    danger: {
      bg: '#F75349',
      color: '#fff',
      border: 'none'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      height: sizes.h,
      padding: `0 ${sizes.px}px`,
      fontSize: sizes.fs,
      fontWeight: 700,
      background: variants.bg,
      color: variants.color,
      border: variants.border,
      borderRadius: 4,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'inherit',
      ...style
    }
  }, icon, children);
}
function Card({
  children,
  hover = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: hover ? 'theia-card' : '',
    style: {
      background: '#24263C',
      border: '1px solid #393C56',
      borderRadius: 4,
      padding: 16,
      ...style
    }
  }, children);
}
function Pill({
  tone = 'info',
  children,
  dot = true
}) {
  const tones = {
    success: {
      bg: 'rgba(28,200,107,0.15)',
      fg: '#1CC86B'
    },
    warn: {
      bg: 'rgba(255,207,92,0.15)',
      fg: '#FFCF5C'
    },
    error: {
      bg: 'rgba(247,83,73,0.15)',
      fg: '#F75349'
    },
    info: {
      bg: 'rgba(0,108,215,0.18)',
      fg: '#66A7E7'
    },
    neutral: {
      bg: 'rgba(255,255,255,0.06)',
      fg: '#A6ABB7'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      borderRadius: 9999,
      background: tones.bg,
      color: tones.fg,
      fontSize: 11,
      fontWeight: 600
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: tones.fg
    }
  }), children);
}
function EmptyStation({
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 220,
      height: 220,
      background: '#24263C',
      border: '1px dashed #393C56',
      borderRadius: 4,
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(I2.Plus, {
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Create Station"));
}
function StatCard({
  label,
  value,
  delta,
  deltaTone = 'success',
  meta
}) {
  const tones = {
    success: '#1CC86B',
    error: '#F75349',
    warn: '#FFCF5C'
  };
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, label), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 11,
      color: '#888F9E'
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 26,
      fontWeight: 500,
      color: '#fff'
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      color: tones[deltaTone]
    }
  }, delta));
}
window.Button = Button;
window.Card = Card;
window.Pill = Pill;
window.EmptyStation = EmptyStation;
window.StatCard = StatCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/theia/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/theia/ShipDetailPanel.jsx
try { (() => {
// Theia ship detail panel — slides in from right when a vessel pin is clicked.

const I4 = window.Icons;
const {
  Pill: P4,
  Card: C4,
  Button: B4
} = window;
const SHIPS = {
  v1: {
    name: 'PACIFIC HORIZON',
    mmsi: '477123456',
    flag: '🇭🇰',
    type: 'Crude Tanker',
    status: 'underway',
    risk: 'low',
    pos: '34.02°N 17.81°E',
    speed: '11.2 kn',
    heading: '085°',
    length: '249m',
    beam: '44m',
    draught: '14.2m',
    dest: 'ROTTERDAM',
    eta: 'Dec 14 2024 06:00',
    owner: 'Pacific Tanker Holdings',
    built: 2018
  },
  v2: {
    name: 'SAN MARCO',
    mmsi: '247089012',
    flag: '🇮🇹',
    type: 'Container',
    status: 'anchored',
    risk: 'med',
    pos: '36.91°N 12.04°E',
    speed: '0.1 kn',
    heading: '—',
    length: '299m',
    beam: '40m',
    draught: '12.0m',
    dest: 'GENOA',
    eta: 'Dec 12 2024 18:30',
    owner: 'MSC Mediterranean',
    built: 2014
  },
  v3: {
    name: 'LUNA STAR',
    mmsi: '538009XXX',
    flag: '🇲🇭',
    type: 'Crude Tanker',
    status: 'spoofing',
    risk: 'high',
    pos: '32.41°N 21.10°E',
    speed: '8.4 kn',
    heading: '210°',
    length: '274m',
    beam: '48m',
    draught: '15.8m',
    dest: 'UNKNOWN',
    eta: '—',
    owner: 'Concealed (shell company)',
    built: 2009
  },
  v4: {
    name: 'NORTHWIND',
    mmsi: '256412980',
    flag: '🇲🇹',
    type: 'Bulk Carrier',
    status: 'underway',
    risk: 'low',
    pos: '40.13°N 14.22°E',
    speed: '13.9 kn',
    heading: '300°',
    length: '225m',
    beam: '32m',
    draught: '11.4m',
    dest: 'BARCELONA',
    eta: 'Dec 13 2024 22:00',
    owner: 'Northwind Bulk Ltd',
    built: 2020
  }
};
function ShipDetailPanel({
  vesselId,
  onClose
}) {
  if (!vesselId) return null;
  const s = SHIPS[vesselId];
  if (!s) return null;
  const tone = s.risk === 'high' ? 'error' : s.risk === 'med' ? 'warn' : 'success';
  const Field = ({
    k,
    v,
    mono
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #2D2F4A',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#888F9E'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontFamily: mono ? 'Roboto Mono' : 'inherit',
      fontWeight: 500
    }
  }, v));
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 380,
      background: '#181926',
      borderLeft: '1px solid #393C56',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid #393C56',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(I4.Ship, {
    size: 18,
    color: "#66A7E7"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: '#fff',
      letterSpacing: '0.04em'
    }
  }, "SHIP DETAIL")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      color: '#888F9E',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(I4.Close, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, s.flag), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: 18,
      color: '#fff',
      letterSpacing: '0.02em'
    }
  }, s.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#888F9E',
      fontFamily: 'Roboto Mono',
      fontSize: 12,
      marginBottom: 14
    }
  }, "MMSI ", s.mmsi, " \xB7 ", s.type), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(P4, {
    tone: tone
  }, s.risk === 'high' ? 'High risk' : s.risk === 'med' ? 'Medium risk' : 'Low risk'), /*#__PURE__*/React.createElement(P4, {
    tone: s.status === 'spoofing' ? 'error' : 'info',
    dot: false
  }, s.status.toUpperCase())), s.status === 'spoofing' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(247,83,73,0.1)',
      border: '1px solid rgba(247,83,73,0.4)',
      padding: 12,
      borderRadius: 4,
      marginBottom: 18,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(I4.Alert, {
    size: 18,
    color: "#F75349",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 12,
      color: '#F75349',
      marginBottom: 2
    }
  }, "AIS spoofing detected"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#FCBAB6',
      lineHeight: 1.4
    }
  }, "Reported position diverges from satellite-confirmed location by 142km. Last verified location available below."))), /*#__PURE__*/React.createElement(SectionHeader, null, "POSITION"), /*#__PURE__*/React.createElement(Field, {
    k: "Coordinates",
    v: s.pos,
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    k: "Speed",
    v: s.speed,
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    k: "Heading",
    v: s.heading,
    mono: true
  }), /*#__PURE__*/React.createElement(SectionHeader, null, "VOYAGE"), /*#__PURE__*/React.createElement(Field, {
    k: "Destination",
    v: s.dest
  }), /*#__PURE__*/React.createElement(Field, {
    k: "ETA",
    v: s.eta
  }), /*#__PURE__*/React.createElement(Field, {
    k: "Draught",
    v: s.draught,
    mono: true
  }), /*#__PURE__*/React.createElement(SectionHeader, null, "VESSEL"), /*#__PURE__*/React.createElement(Field, {
    k: "Length",
    v: s.length,
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    k: "Beam",
    v: s.beam,
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    k: "Built",
    v: s.built,
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    k: "Owner",
    v: s.owner
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(B4, {
    size: "sm",
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(I4.Pin, {
      size: 13
    })
  }, "Track"), /*#__PURE__*/React.createElement(B4, {
    size: "sm",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(I4.Compass, {
      size: 13
    })
  }, "Future Path"), /*#__PURE__*/React.createElement(B4, {
    size: "sm",
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(I4.More, {
      size: 14
    })
  }))));
}
function SectionHeader({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.16em',
      color: '#66A7E7',
      marginTop: 22,
      marginBottom: 4,
      paddingBottom: 6,
      borderBottom: '1px solid #393C56'
    }
  }, children);
}
window.ShipDetailPanel = ShipDetailPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/theia/ShipDetailPanel.jsx", error: String((e && e.message) || e) }); }

})();
