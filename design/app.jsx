// dr.Scherbakov — App root with Tweaks panel

const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [tweaks, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "lang": "ua",
    "primaryAccent": "navy",
    "showPlaceholderCaptions": true,
    "headingWeight": 300,
    "fontPair": "inter-cormorant",
    "altSection": true
  }/*EDITMODE-END*/);

  // Apply derived tokens
  useEffectApp(() => {
    const root = document.documentElement;
    if (tweaks.primaryAccent === "olive") {
      root.style.setProperty("--accent-navy", "#5C5D3E");
      root.style.setProperty("--accent-navy-deep", "#3F4029");
    } else {
      root.style.setProperty("--accent-navy", "#1F2A3D");
      root.style.setProperty("--accent-navy-deep", "#131C2C");
    }

    if (tweaks.fontPair === "inter-cormorant") {
      root.style.setProperty("--font-sans", '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif');
      root.style.setProperty("--font-serif", '"Cormorant Garamond", Georgia, serif');
    } else if (tweaks.fontPair === "neue-haas-times") {
      root.style.setProperty("--font-sans", '"Neue Haas Grotesk Display Pro", "Helvetica Neue", Helvetica, Arial, sans-serif');
      root.style.setProperty("--font-serif", '"Tiempos Headline", "Times New Roman", Georgia, serif');
    } else {
      root.style.setProperty("--font-sans", '"Söhne", "Inter", system-ui, sans-serif');
      root.style.setProperty("--font-serif", '"GT Sectra", Georgia, serif');
    }

    document.querySelectorAll(".media-placeholder__caption").forEach(el => {
      el.style.display = tweaks.showPlaceholderCaptions ? "" : "none";
    });
  }, [tweaks]);

  const lang = tweaks.lang || "en";
  const setLang = (l) => setTweak("lang", l);
  const content = window.CONTENT[lang];

  return (
    <>
      <Nav content={content} lang={lang} setLang={setLang} />
      <main>
        <Hero content={content} />
        <Approach content={content} />
        <Stats content={content} />
        <Cases content={content} />
        <Process content={content} />
        <FAQ content={content} />
        <Practical content={content} />
        <FinalCTA content={content} />
      </main>
      <Footer content={content} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Locale">
          <TweakRadio
            label="Language"
            value={lang}
            onChange={(v) => setTweak("lang", v)}
            options={[{ value: "en", label: "EN" }, { value: "ua", label: "UA" }]}
          />
        </TweakSection>
        <TweakSection title="Brand">
          <TweakRadio
            label="Primary CTA fill"
            value={tweaks.primaryAccent}
            onChange={(v) => setTweak("primaryAccent", v)}
            options={[
              { value: "navy", label: "Navy" },
              { value: "olive", label: "Olive" },
            ]}
          />
          <TweakSelect
            label="Type pair"
            value={tweaks.fontPair}
            onChange={(v) => setTweak("fontPair", v)}
            options={[
              { value: "inter-cormorant", label: "Inter / Cormorant (spec)" },
              { value: "neue-haas-times", label: "Neue Haas / Tiempos" },
              { value: "sohne-sectra", label: "Söhne / GT Sectra" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Photography">
          <TweakToggle
            label="Show placeholder captions"
            value={tweaks.showPlaceholderCaptions}
            onChange={(v) => setTweak("showPlaceholderCaptions", v)}
          />
          <p style={{ fontSize: 11, color: "#6B6B66", margin: "8px 0 0", lineHeight: 1.5 }}>
            Per spec § 6: editorial photography is 60% of perceived quality. Captions flag what the photographer ships into each slot.
          </p>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
