import { useState } from "react";
import { T } from "../../theme";
import { PageHeader, IconBtn, SessionCard, EmptyState, SortFilterSheet, Ic, SORT_OPTIONS, applySortToTrips } from "../../ui";

export function ScreenTrips({ trips, navigate }) {
  const [sortBy, setSortBy] = useState("newest");
  const [showSort, setShowSort] = useState(false);
  const [query, setQuery] = useState("");

  const isFiltered = sortBy !== "newest";
  const searched = query.trim()
    ? applySortToTrips(trips, sortBy).filter(t =>
        t.dateLabel.toLowerCase().includes(query.toLowerCase()) ||
        t.distance.toLowerCase().includes(query.toLowerCase()) ||
        t.coverage.toLowerCase().includes(query.toLowerCase())
      )
    : applySortToTrips(trips, sortBy);
  const sorted = searched;
  const groups = sorted.reduce((acc, t) => {
    if (!acc[t.month]) acc[t.month] = [];
    acc[t.month].push(t);
    return acc;
  }, {});
  const totalEvents = trips.reduce((n, t) => n + t.events, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Header */}
      <PageHeader
        title="Trip Log"
        subtitle={query.trim()
          ? `${sorted.length} result${sorted.length !== 1 ? "s" : ""}`
          : isFiltered
            ? `${sorted.length} of ${trips.length} sessions`
            : `${trips.length} session${trips.length !== 1 ? "s" : ""}`}
        right={<>
          {totalEvents > 0 && (
            <span style={{
              fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2,
              marginRight: 8, whiteSpace: "nowrap"
            }}>
              {totalEvents} event{totalEvents !== 1 ? "s" : ""}
            </span>
          )}
          <IconBtn icon="ruler" size={32} onClick={() => setShowSort(true)}
            bgVariant="ghost" color={isFiltered ? T.priT : T.t2} ariaLabel="Sort and filter" />
        </>} />

      <div className="ds-screen-content" style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
      {/* Active filter chip row — only when a non-default sort is applied */}
      {isFiltered && (
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "8px 0", borderBottom: `1px solid ${T.div}`,
          flexShrink: 0, background: T.bg
        }}>
          <span style={{
            fontFamily: T.fB, fontSize: T.fsDetail, color: T.t3,
            letterSpacing: "0.02em", flexShrink: 0
          }}>
            Sorted:
          </span>
          <div style={{ flex: 1, display: "flex", gap: 6 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 4,
              padding: "3px 8px 3px 10px", borderRadius: 999,
              background: T.priD, border: `1px solid ${T.pri}`
            }}>
              <span style={{ fontFamily: T.fB, fontSize: 12, fontWeight: 500, color: T.priT }}>
                {SORT_OPTIONS.find(o => o.id === sortBy)?.label}
              </span>
              <button onClick={() => setSortBy("newest")}
                style={{
                  background: "none", border: "none", padding: "0 2px",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                <Ic n="close" size={10} color={T.priT} />
              </button>
            </div>
          </div>
          <button onClick={() => setSortBy("newest")}
            style={{
              fontFamily: T.fB, fontSize: 12, fontWeight: 500, color: T.t2,
              background: "none", border: "none", flexShrink: 0
            }}>
            Clear
          </button>
        </div>
      )}

      {/* Search bar — always visible */}
      <div style={{
        padding: "8px 0 10px", borderBottom: `1px solid ${T.div}`,
        flexShrink: 0, background: T.bg
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: T.s2, borderRadius: 10, padding: "0 12px",
          border: `1px solid ${query ? T.pri : T.bd}`
        }}>
          <Ic n="search" size={14} color={T.t3} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by date, distance, coverage…"
            aria-label="Search trips by date, distance, or coverage"
            style={{
              flex: 1, background: "none", border: "none", outline: "none",
              fontFamily: T.fB, fontSize: 13, color: T.t1, padding: "9px 0",
              caretColor: T.pri
            }}
          />
          {query && (
            <button onClick={() => setQuery("")}
              style={{ background: "none", border: "none", display: "flex", padding: 0 }}>
              <Ic n="close" size={14} color={T.t3} />
            </button>
          )}
        </div>
      </div>

      {trips.length === 0 ? (
        <EmptyState icon="trips" fullHeight noHorizontalPadding
          title="No trips yet"
          text="Completed driving sessions will appear here. Start Protection before your next drive."
          cta={{ label: "Go to Home", icon: "home", onClick: () => navigate("home") }} />
      ) : sorted.length === 0 && query ? (
        <EmptyState icon="search" fullHeight noHorizontalPadding
          title="No results"
          text={`No trips match "${query}". Try a different date or coverage level.`}
          cta={{ label: "Clear Search", onClick: () => setQuery("") }} />
      ) : (
        <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
          <div style={{ padding: "4px 0 80px" }}>
            {Object.entries(groups).map(([month, items], gi) => (
              <div key={month}>
                {/* Month label */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: `${gi === 0 ? "18px" : "24px"} 2px 10px`,
                }}>
                  <span style={{
                    fontFamily: T.fD, fontSize: T.fsSm, fontWeight: 700, color: T.priT,
                    letterSpacing: "0.04em"
                  }}>{month}</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right,${T.bd},transparent)` }} />
                </div>
                {/* Cards */}
                {items.map(t => (
                  <SessionCard key={t.id}
                    dateLabel={t.dateLabel}
                    timeStart={t.timeStart}
                    timeEnd={t.timeEnd}
                    duration={t.duration}
                    distance={t.distance}
                    events={t.events}
                    coverage={t.coverage}
                    gapDetected={t.gapDetected}
                    onClick={() => navigate("sessionSummary", { trip: t })} />
                ))}
              </div>
            ))}
            {/* End marker */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 2px 0" }}>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(to right,transparent,${T.bd})` }} />
              <span style={{
                fontFamily: T.fB, fontSize: T.fsDetail, color: T.t3, letterSpacing: "0.02em"
              }}>End of log</span>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(to left,transparent,${T.bd})` }} />
            </div>
          </div>
        </div>
      )}

      </div>

      <SortFilterSheet
        visible={showSort}
        onClose={() => setShowSort(false)}
        value={sortBy}
        onApply={setSortBy} />
    </div>
  );
}
