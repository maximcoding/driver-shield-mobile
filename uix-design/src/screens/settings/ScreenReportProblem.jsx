import { useState } from "react";
import { T } from "../../theme";
import { Ic, Header, SectionHeader, Card, Btn } from "../../ui";
import { PROBLEM_CATEGORIES } from "../../data";

export function ScreenReportProblem({ onBack, navigate }) {
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = category && desc.length > 10;

  if (submitted) return (
    <div className="fu ds-screen-root" style={{
      display: "flex", flexDirection: "column", minHeight: "100%"
    }}>
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center"
      }}>
        <div style={{
          width: 88, height: 88, borderRadius: 999, background: T.HD,
          display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24
        }}>
          <Ic n="checkCircle" size={44} color={T.H} sw={1.5} />
        </div>
        <h1 style={{ fontFamily: T.fD, fontSize: 24, fontWeight: 800, color: T.t1, marginBottom: 10 }}>
          Report submitted
        </h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 268 }}>
          Our team will investigate and follow up within 24 hours. Thank you for helping improve DriveShield.
        </p>
      </div>
      <Btn variant="primary" label="Back to Support" full onClick={() => navigate("contact")} />
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Report a Problem" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ paddingBottom: 80 }}>
          <SectionHeader label="Problem category" top />
          <Card style={{ marginBottom: 16, paddingLeft: T.cardPad, paddingRight: T.cardPad }}>
            {PROBLEM_CATEGORIES.map((cat, i) => (
              <button key={cat} onClick={() => setCategory(cat)} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: `${T.rowVLg}px 0`,
                textAlign: "left", background: "none",
                borderBottom: i < PROBLEM_CATEGORIES.length - 1 ? `1px solid ${T.div}` : "none"
              }}>
                <p style={{ fontFamily: T.fB, fontSize: T.fsMd, color: T.t1 }}>{cat}</p>
                {category === cat
                  ? <Ic n="checkCircle" size={16} color={T.pri} />
                  : <div style={{ width: 16, height: 16, borderRadius: 999, border: `2px solid ${T.bd}` }} />
                }
              </button>
            ))}
          </Card>

          <SectionHeader label="Description" />
          <Card style={{ padding: "12px 14px", marginBottom: 4 }}>
            <textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
              placeholder="Describe the problem in detail. Include what you were doing when it happened, what you expected, and what actually occurred."
              style={{
                width: "100%", minHeight: 120, resize: "none",
                background: "none", border: "none", outline: "none",
                fontFamily: T.fB, fontSize: T.fsBody, color: T.t1,
                lineHeight: 1.6, caretColor: T.pri
              }}
            />
            <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, textAlign: "right", marginTop: 4 }}>
              {desc.length} chars
            </p>
          </Card>

          <div style={{ height: 20 }} />
          <Btn variant="primary" label="Submit Report" full
            onClick={() => canSubmit && setSubmitted(true)}
            style={{ opacity: canSubmit ? 1 : 0.4 }} />
        </div>
      </div>
    </div>
  );
}
