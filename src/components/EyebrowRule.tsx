type Props = { children: React.ReactNode; centered?: boolean };

export function EyebrowRule({ children, centered }: Props) {
  return (
    <>
      <div className="t-eyebrow" style={centered ? { textAlign: "center" } : undefined}>
        {children}
      </div>
      <hr
        className="eyebrow-rule"
        style={centered ? { marginLeft: "auto", marginRight: "auto" } : undefined}
      />
    </>
  );
}
