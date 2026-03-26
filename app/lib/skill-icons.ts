import {
  siDart,
  siFlutter,
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siPython,
  siMongodb,
  siPostgresql,
  siMysql,
  siGit,
  siDocker,
  siVscodium,
  siFigma,
  siFirebase,
  siCloudflare,
  siVercel,
  siPostman,
  siUnity,
} from "simple-icons";

export type SkillIcon =
  | { path: string; hex: string; viewBox?: string }
  | { src: string };

// Custom SVG paths for icons not available in simple-icons
const customIcons: Record<string, SkillIcon> = {
  // C# — uses the full SVG file (multi-color, can't be a single path)
  "C#": { src: "/csharp.svg" },
  // Java coffee cup — the classic Java logo
  Java: {
    hex: "ED8B00",
    viewBox: "0 0 24 24",
    path: "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 .001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639",
  },
};

export const skillIconMap: Record<string, SkillIcon> = {
  ...customIcons,
  Dart:         { path: siDart.path,       hex: siDart.hex },
  Flutter:      { path: siFlutter.path,    hex: siFlutter.hex },
  HTML:         { path: siHtml5.path,      hex: siHtml5.hex },
  CSS:          { path: siCss.path,        hex: siCss.hex },
  JavaScript:   { path: siJavascript.path, hex: siJavascript.hex },
  TypeScript:   { path: siTypescript.path, hex: siTypescript.hex },
  React:        { path: siReact.path,      hex: siReact.hex },
  "Next.js":    { path: siNextdotjs.path,  hex: siNextdotjs.hex },
  "Tailwind CSS": { path: siTailwindcss.path, hex: siTailwindcss.hex },
  "Node.js":    { path: siNodedotjs.path,  hex: siNodedotjs.hex },
  Express:      { path: siExpress.path,    hex: siExpress.hex },
  Python:       { path: siPython.path,     hex: siPython.hex },
  MongoDB:      { path: siMongodb.path,    hex: siMongodb.hex },
  PostgreSQL:   { path: siPostgresql.path, hex: siPostgresql.hex },
  MySQL:        { path: siMysql.path,      hex: siMysql.hex },
  Git:          { path: siGit.path,        hex: siGit.hex },
  Docker:       { path: siDocker.path,     hex: siDocker.hex },
  "VS Code":    { path: siVscodium.path,   hex: siVscodium.hex },
  Figma:        { path: siFigma.path,      hex: siFigma.hex },
  Firebase:     { path: siFirebase.path,   hex: siFirebase.hex },
  Cloudflare:   { path: siCloudflare.path, hex: siCloudflare.hex },
  Vercel:       { path: siVercel.path,     hex: siVercel.hex },
  Postman:      { path: siPostman.path,    hex: siPostman.hex },
  Unity:        { path: siUnity.path,      hex: "000000" },
};
