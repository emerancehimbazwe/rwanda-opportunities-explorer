
import Button from "./Button";
import Badge from "./Badge";

function OpportunityCard({ opportunity, isSaved, onToggleSave }) {
  const {
    title,
    category,
    city,
    date,
    description,
    capacity,
    availableSeats,
    price,
    featured,
  } = opportunity;

  const formattedDate = new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#e4ddce] bg-[#fffdf7] p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge color="green">{category}</Badge>

        {featured && <Badge color="yellow">Featured</Badge>}

        {price === 0 && <Badge color="cream">Free</Badge>}

        {availableSeats === 0 && (
          <Badge color="red">Fully booked</Badge>
        )}
      </div>

      <h3 className="mb-2 text-xl font-bold text-[#263b32]">
        {title}
      </h3>

      <p className="mb-4 text-sm leading-6 text-[#647268]">
        {description}
      </p>

      <div className="mb-5 space-y-3 text-sm text-[#46594e]">
        <p>
          <span className="font-semibold text-[#263b32]">Location:</span>{" "}
          {city}, Rwanda
        </p>

        <p>
          <span className="font-semibold text-[#263b32]">Date:</span>{" "}
          {formattedDate}
        </p>

        <p>
          <span className="font-semibold text-[#263b32]">Price:</span>{" "}
          {price === 0 ? "Free" : `${price.toLocaleString()} RWF`}
        </p>

        <p>
          <span className="font-semibold text-[#263b32]">
            Available places:
          </span>{" "}
          {availableSeats} / {capacity}
        </p>
      </div>

      <div className="mt-auto border-t border-[#e4ddce] pt-4">
        <Button
          variant={isSaved ? "secondary" : "primary"}
          onClick={() => onToggleSave(opportunity.id)}
          className="w-full"
        >
          {isSaved ? "Unsave Opportunity" : "Save Opportunity"}
        </Button>
      </div>
    </article>
  );
}

export default OpportunityCard;
