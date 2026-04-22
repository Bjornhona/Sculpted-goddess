import styles from "./design-system.module.scss";
import constants from "@/public/styles/constants.module.scss";

export default function DesignSystemPage() {
  const swatchGroups = [
    {
      label: "Blues & teals",
      swatches: [
        { name: "dark blue", value: constants.darkBlue },
        { name: "light blue", value: constants.lightBlue },
        { name: "aqua", value: constants.aqua },
      ],
    },
    {
      label: "Greens",
      swatches: [
        { name: "light green", value: constants.lightGreen },
        { name: "dark green", value: constants.darkGreen },
        { name: "forest green", value: constants.forestGreen },
      ],
    },
    {
      label: "Warm tones",
      swatches: [
        { name: "yellow", value: constants.yellow },
        { name: "light orange", value: constants.lightOrange },
        { name: "dark orange", value: constants.darkOrange },
      ],
    },
    {
      label: "Pinks, purples & fuchsia",
      swatches: [
        { name: "fuchsia", value: constants.fuccia },
        { name: "light pink", value: constants.lightPink },
        { name: "medium pink", value: constants.mediumPink },
        { name: "dark pink", value: constants.darkPink },
        { name: "light purple", value: constants.lightPurple },
        { name: "purple", value: constants.purple },
      ],
    },
    {
      label: "Neutrals",
      swatches: [
        { name: "dark grey", value: constants.darkGrey },
        { name: "darker grey", value: constants.darkerGrey },
        { name: "medium grey", value: constants.mediumGrey },
        { name: "light grey", value: constants.lightGrey },
        { name: "ultra light grey", value: constants.ultraLightGrey },
        { name: "white", value: "#ffffff" },
      ],
    },
  ];

  const typeScale = [
    {
      tag: "h1 · Cinzel",
      detail: "4rem desktop · 600 · uppercase",
      sample: "Sculpted Goddess",
      className: styles.sampleH1,
    },
    {
      tag: "h2 · Open Sans",
      detail: "2.5rem desktop · 800 · uppercase",
      sample: "Recipes & Nutrition",
      className: styles.sampleH2,
    },
    {
      tag: "h3 · Open Sans",
      detail: "1.3rem desktop · 400",
      sample: "Track your macros and reach your goals",
      className: styles.sampleH3,
    },
    {
      tag: "h4 / button · Open Sans",
      detail: "1rem desktop · 600 · uppercase",
      sample: "View Recipes",
      className: styles.sampleH4,
    },
    {
      tag: "p · Open Sans",
      detail: "1rem desktop · 400 · line-height 1.4",
      sample:
        "Search from a wide selection of healthy recipes and build your personalised meal plan.",
      className: styles.sampleP,
    },
  ];

  const breakpoints = [
    {
      label: "Mobile",
      values: ["h1 · 2.25rem", "h2 · 1.5rem", "h3 · 0.9rem", "btn · 0.7rem", "p · 0.6rem"],
    },
    {
      label: "Tablet 768px",
      values: ["h1 · 3rem", "h2 · 2rem", "h3 · 1.1rem", "btn · 0.9rem", "p · 0.8rem"],
    },
    {
      label: "Desktop 1024px",
      values: ["h1 · 4rem", "h2 · 2.5rem", "h3 · 1.3rem", "btn · 1rem", "p · 1rem"],
    },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Colour palette */}
        <p className={styles.sectionLabel}>Colour palette</p>
        {swatchGroups.map((group) => (
          <div key={group.label} className={styles.swatchGroup}>
            <p className={styles.swatchGroupLabel}>{group.label}</p>
            <div className={styles.swatchRow}>
              {group.swatches.map((swatch) => (
                <div key={swatch.name} className={styles.swatch}>
                  <div
                    className={styles.swatchDot}
                    style={{ backgroundColor: swatch.value }}
                  />
                  <span className={styles.swatchName}>{swatch.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <hr className={styles.divider} />

        {/* Typography scale */}
        <p className={styles.sectionLabel}>Typography scale</p>
        {typeScale.map((row) => (
          <div key={row.tag} className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span className={styles.typeTag}>{row.tag}</span>
              <span className={styles.typeDetail}>{row.detail}</span>
            </div>
            <span className={row.className}>{row.sample}</span>
          </div>
        ))}

        <hr className={styles.divider} />

        {/* Responsive font scale */}
        <p className={styles.sectionLabel}>Responsive font scale</p>
        <div className={styles.scaleGrid}>
          {breakpoints.map((bp) => (
            <div key={bp.label} className={styles.scaleCard}>
              <p className={styles.scaleCardLabel}>{bp.label}</p>
              <ul className={styles.scaleCardValues}>
                {bp.values.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
