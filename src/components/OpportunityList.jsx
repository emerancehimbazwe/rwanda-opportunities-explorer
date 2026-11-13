
import OpportunityCard from "./OpportunityCard";
import Button from "./Button";

function OpportunityList({
  opportunities,
  savedIds,
  onToggleSave,
  onReset,
}) {
  if (opportunities.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#c9d5c9] bg-[#fffdf7] px-6 py-12 text-center">
        <h3 className="mb-2 text-xl font-bold text-[#174a38]">
          No opportunities found
        </h3>

        <p className="mb-5 text-sm text-[#647268]">
          We couldn't find any opportunities matching your search.
          Try changing your search or filters.
        </p>

        <Button onClick={onReset}>
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <section aria-label="Available opportunities">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-[#174a38]">
          Explore Opportunities
        </h2>

        <p
          className="text-sm text-[#647268]"
          aria-live="polite"
        >
          {opportunities.length}{" "}
          {opportunities.length === 1
            ? "opportunity"
            : "opportunities"}{" "}
          found
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
            isSaved={savedIds.includes(opportunity.id)}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
    </section>
  );
}

export default OpportunityList;
