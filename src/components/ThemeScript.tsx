// Inline blocking init — runs before first paint to prevent flash of wrong theme.
// Reads localStorage.theme ("light" | "dark" | "auto" | null), resolves "auto"
// against prefers-color-scheme, then sets document.documentElement.dataset.theme.
// Also subscribes to prefers-color-scheme changes while the stored value is "auto".

const SCRIPT = `(()=>{try{
var d=document.documentElement,s=localStorage.getItem("theme"),m=window.matchMedia("(prefers-color-scheme: dark)");
function apply(t){d.dataset.theme=t==="auto"||!t?(m.matches?"dark":"light"):t}
apply(s);
m.addEventListener("change",function(){var c=localStorage.getItem("theme");if(!c||c==="auto")apply("auto")});
}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
