
import Button from "./Button";

function OpportunityFilters({
  search,
  setSearch,
  category,
  setCategory,
  availableOnly,
  setAvailableOnly,
  savedOnly,
  setSavedOnly,
  sortBy,
  setSortBy,
  onReset,
}) {
  return (
    <section className="rounded-2xl border border-[#e4ddce] bg-[#fffdf7] p-5 shadow-sm">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-semibold text-[#263b32]"
          >
            Search opportunities
          </label>

          <input
            id="search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by title or city..."
            className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm text-[#263b32] placeholder:text-[#89938a] focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-semibold text-[#263b32]"
          >
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm text-[#263b32] focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
          >
            <option>All categories</option>
            <option>Workshops</option>
            <option>Career Events</option>
            <option>Community Activities</option>
            <option>Short Courses</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-semibold text-[#263b32]"
          >
            Sort opportunities
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm text-[#263b32] focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
          >
            <option value="date">Earliest date</option>
            <option value="title">Title A-Z</option>
            <option value="seats">Most available places</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button
            variant="outline"
            onClick={onReset}
            className="w-full"
          >
            Reset Filters
          </Button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-6 border-t border-[#e4ddce] pt-5">
        <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#46594e]">
          <input
            type="checkbox"
            checked={availableOnly}
            onChange={(event) => setAvailableOnly(event.target.checked)}
            className="h-4 w-4 accent-[#237a57]"
          />
          Available only
        </label>

        <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#46594e]">
          <input
            type="checkbox"
            checked={savedOnly}
            onChange={(event) => setSavedOnly(event.target.checked)}
            className="h-4 w-4 accent-[#237a57]"
          />
          Saved only
        </label>
      </div>
    </section>
  );
}

export default OpportunityFilters;
