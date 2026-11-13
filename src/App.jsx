
import { useMemo, useState } from "react";
import seedOpportunities from "./data/seedOpportunities";
import OpportunityFilters from "./components/OpportunityFilters";
import OpportunityList from "./components/OpportunityList";
import AddOpportunityForm from "./components/AddOpportunityForm";
import Button from "./components/Button";
import Badge from "./components/Badge";

function App() {
  const [opportunities, setOpportunities] = useState(seedOpportunities);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [savedOnly, setSavedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("date");
  const [savedIds, setSavedIds] = useState([]);
  const [demoStatus, setDemoStatus] = useState("ready");

  const filteredOpportunities = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    const filtered = opportunities.filter((opportunity) => {
      const matchesSearch =
        opportunity.title.toLowerCase().includes(searchTerm) ||
        opportunity.city.toLowerCase().includes(searchTerm);

      const matchesCategory =
        category === "All categories" ||
        opportunity.category === category;

      const matchesAvailability =
        !availableOnly || opportunity.availableSeats > 0;

      const matchesSaved =
        !savedOnly || savedIds.includes(opportunity.id);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesAvailability &&
        matchesSaved
      );
    });

    const sorted = [...filtered];

    if (sortBy === "date") {
      sorted.sort((a, b) => a.date.localeCompare(b.date));
    } else if (sortBy === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "seats") {
      sorted.sort((a, b) => b.availableSeats - a.availableSeats);
    }

    return sorted;
  }, [
    opportunities,
    search,
    category,
    availableOnly,
    savedOnly,
    savedIds,
    sortBy,
  ]);

  function handleToggleSave(id) {
    setSavedIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((savedId) => savedId !== id)
        : [...previousIds, id]
    );
  }

  function handleAddOpportunity(newOpportunity) {
    setOpportunities((previousOpportunities) => [
      newOpportunity,
      ...previousOpportunities,
    ]);

    setDemoStatus("ready");
  }

  function handleResetFilters() {
    setSearch("");
    setCategory("All categories");
    setAvailableOnly(false);
    setSavedOnly(false);
    setSortBy("date");
  }

  const totalOpportunities = opportunities.length;

  const availableOpportunities = opportunities.filter(
    (item) => item.availableSeats > 0
  ).length;

  const featuredOpportunities = opportunities.filter(
    (item) => item.featured
  ).length;

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#f8f3e8] text-[#263b32]">
      <header className="border-b border-[#e4ddce] bg-[#fffdf7]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight text-[#174a38] sm:text-2xl"
          >
            Rwanda<span className="text-[#237a57]">Connect</span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href="#opportunities"
              className="hidden text-sm font-medium text-[#46594e] hover:text-[#237a57] sm:block"
            >
              Explore
            </a>

            <a
              href="#add-opportunity"
              className="text-sm font-semibold text-[#237a57] hover:text-[#174a38]"
            >
              Add Opportunity
            </a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="bg-gradient-to-br from-[#123d2e] via-[#174a38] to-[#237a57] px-5 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl">
            <Badge color="yellow">
              Discover opportunities across Rwanda
            </Badge>

            <div className="mt-6 max-w-3xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Find opportunities.
                <span className="block text-[#dcebdc]">
                  Grow your future.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#e5eee4] sm:text-lg">
                Discover workshops, career events, community activities
                and short courses happening across Rwanda. Learn new
                skills, connect with people and explore new possibilities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document
                      .getElementById("opportunities")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-[#f8f3e8] text-[#174a38] hover:bg-[#ede5d5]"
                >
                  Explore Opportunities
                </Button>

                <Button
                  variant="outline"
                  className="border-[#f8f3e8] text-[#fffdf7] hover:bg-[#fffdf7] hover:text-[#174a38]"
                  onClick={() =>
                    document
                      .getElementById("add-opportunity")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Add an Opportunity
                </Button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/20 pt-8 sm:grid-cols-4">
              <div>
                <p className="text-3xl font-bold">
                  {totalOpportunities}
                </p>
                <p className="mt-1 text-sm text-[#dcebdc]">
                  Total Opportunities
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">
                  {availableOpportunities}
                </p>
                <p className="mt-1 text-sm text-[#dcebdc]">
                  Available
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">
                  {featuredOpportunities}
                </p>
                <p className="mt-1 text-sm text-[#dcebdc]">
                  Featured
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">
                  {savedIds.length}
                </p>
                <p className="mt-1 text-sm text-[#dcebdc]">
                  Saved
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="opportunities"
          className="mx-auto max-w-7xl px-5 py-12 lg:px-8"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#237a57]">
                Explore and discover
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-[#174a38]">
                Opportunities for you
              </h2>

              <p className="mt-2 text-sm text-[#647268]">
                Find your next learning experience or career opportunity.
              </p>
            </div>

            <Badge color="cream">{currentDate}</Badge>
          </div>

          <OpportunityFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            availableOnly={availableOnly}
            setAvailableOnly={setAvailableOnly}
            savedOnly={savedOnly}
            setSavedOnly={setSavedOnly}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onReset={handleResetFilters}
          />

          <div className="my-6 flex flex-wrap items-center gap-3 rounded-xl border border-[#e4ddce] bg-[#fffdf7] p-4">
            <span className="mr-2 text-sm font-semibold text-[#263b32]">
              Demo UI states:
            </span>

            <Button
              variant="secondary"
              onClick={() => setDemoStatus("loading")}
            >
              Show Loading
            </Button>

            <Button
              variant="danger"
              onClick={() => setDemoStatus("error")}
            >
              Show Error
            </Button>

            <Button
              variant="outline"
              onClick={() => setDemoStatus("ready")}
            >
              Show Opportunities
            </Button>
          </div>

          {demoStatus === "loading" ? (
            <div
              className="rounded-xl border border-[#b8d5c1] bg-[#e6f0e8] p-10 text-center"
              role="status"
            >
              <p className="text-lg font-semibold text-[#174a38]">
                Loading opportunities...
              </p>

              <p className="mt-2 text-sm text-[#237a57]">
                Please wait while opportunities are being prepared.
              </p>
            </div>
          ) : demoStatus === "error" ? (
            <div
              className="rounded-xl border border-red-200 bg-red-50 p-10 text-center"
              role="alert"
            >
              <h3 className="text-lg font-bold text-red-800">
                Something went wrong
              </h3>

              <p className="mt-2 text-sm text-red-700">
                This is a demonstration error state. Your local
                opportunities are still available.
              </p>

              <Button
                className="mt-5"
                onClick={() => setDemoStatus("ready")}
              >
                Try Again
              </Button>
            </div>
          ) : (
            <OpportunityList
              opportunities={filteredOpportunities}
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
              onReset={handleResetFilters}
            />
          )}
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <AddOpportunityForm onAddOpportunity={handleAddOpportunity} />
        </section>
      </main>

      <footer className="bg-[#123d2e] px-5 py-8 text-center text-sm text-[#dcebdc]">
        <p className="font-semibold text-white">RwandaConnect</p>
        <p className="mt-2">Discover. Learn. Connect. Grow.</p>
        <p className="mt-3">
          © 2026 Rwanda Opportunities Explorer. Sample educational project.
        </p>
      </footer>
    </div>
  );
}

export default App;
