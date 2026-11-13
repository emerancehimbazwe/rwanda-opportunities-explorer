
import { useState } from "react";
import Button from "./Button";
import Badge from "./Badge";

function AddOpportunityForm({ onAddOpportunity }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Workshops",
    city: "",
    date: "",
    description: "",
    capacity: "",
    price: "",
    featured: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccessMessage("");
  }

  function validateForm() {
    const newErrors = {};
    const capacity = Number(formData.capacity);
    const price = Number(formData.price);

    if (!formData.title.trim()) {
      newErrors.title = "Please enter an opportunity title.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter a city.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please enter a description.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date.";
    } else if (formData.date < today) {
      newErrors.date = "Please select today or a future date.";
    }

    if (formData.capacity === "") {
      newErrors.capacity = "Please enter the capacity.";
    } else if (!Number.isInteger(capacity) || capacity < 0) {
      newErrors.capacity = "Capacity must be a whole number of 0 or more.";
    }

    if (formData.price === "") {
      newErrors.price = "Please enter the price.";
    } else if (!Number.isFinite(price) || price < 0) {
      newErrors.price = "Price must be 0 or more.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    const newOpportunity = {
      id: crypto.randomUUID(),
      title: formData.title.trim(),
      category: formData.category,
      city: formData.city.trim(),
      date: formData.date,
      description: formData.description.trim(),
      capacity: Number(formData.capacity),
      availableSeats: Number(formData.capacity),
      price: Number(formData.price),
      featured: formData.featured,
    };

    onAddOpportunity(newOpportunity);

    setFormData({
      title: "",
      category: "Workshops",
      city: "",
      date: "",
      description: "",
      capacity: "",
      price: "",
      featured: false,
    });

    setErrors({});
    setSuccessMessage("Your opportunity has been added successfully.");
  }

  function handleCancel() {
    setFormData({
      title: "",
      category: "Workshops",
      city: "",
      date: "",
      description: "",
      capacity: "",
      price: "",
      featured: false,
    });

    setErrors({});
    setSuccessMessage("");
  }

  return (
    <section
      id="add-opportunity"
      className="rounded-2xl border border-[#e4ddce] bg-[#fffdf7] p-6 shadow-sm sm:p-8"
    >
      <div className="mb-7">
        <Badge color="green">Share an opportunity</Badge>

        <h2 className="mt-3 text-3xl font-extrabold text-[#174a38]">
          Add a New Opportunity
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#647268]">
          Add a workshop, career event, community activity or short course
          for people across Rwanda.
        </p>
      </div>

      {successMessage && (
        <div
          className="mb-5 rounded-lg border border-[#b8d5c1] bg-[#e6f0e8] p-4 text-sm font-medium text-[#174a38]"
          role="status"
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-[#263b32]"
            >
              Opportunity title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter opportunity title"
              className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
              aria-invalid={Boolean(errors.title)}
              aria-describedby={errors.title ? "title-error" : undefined}
            />

            {errors.title && (
              <p id="title-error" className="mt-1 text-sm text-red-700">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="form-category"
              className="mb-2 block text-sm font-semibold text-[#263b32]"
            >
              Category
            </label>

            <select
              id="form-category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
            >
              <option>Workshops</option>
              <option>Career Events</option>
              <option>Community Activities</option>
              <option>Short Courses</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-semibold text-[#263b32]"
            >
              City
            </label>

            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Kigali"
              className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "city-error" : undefined}
            />

            {errors.city && (
              <p id="city-error" className="mt-1 text-sm text-red-700">
                {errors.city}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-semibold text-[#263b32]"
            >
              Date
            </label>

            <input
              id="date"
              name="date"
              type="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? "date-error" : undefined}
            />

            {errors.date && (
              <p id="date-error" className="mt-1 text-sm text-red-700">
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="capacity"
              className="mb-2 block text-sm font-semibold text-[#263b32]"
            >
              Capacity
            </label>

            <input
              id="capacity"
              name="capacity"
              type="number"
              min="0"
              step="1"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Enter available places"
              className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
              aria-invalid={Boolean(errors.capacity)}
              aria-describedby={errors.capacity ? "capacity-error" : undefined}
            />

            {errors.capacity && (
              <p id="capacity-error" className="mt-1 text-sm text-red-700">
                {errors.capacity}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="price"
              className="mb-2 block text-sm font-semibold text-[#263b32]"
            >
              Price (RWF)
            </label>

            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="1"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter 0 for free"
              className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
              aria-invalid={Boolean(errors.price)}
              aria-describedby={errors.price ? "price-error" : undefined}
            />

            {errors.price && (
              <p id="price-error" className="mt-1 text-sm text-red-700">
                {errors.price}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-[#263b32]"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe this opportunity..."
              className="w-full rounded-lg border border-[#d9d0bd] bg-[#fffdf7] px-4 py-3 text-sm focus:border-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#237a57]/20"
              aria-invalid={Boolean(errors.description)}
              aria-describedby={
                errors.description ? "description-error" : undefined
              }
            />

            {errors.description && (
              <p
                id="description-error"
                className="mt-1 text-sm text-red-700"
              >
                {errors.description}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-[#46594e]">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 accent-[#237a57]"
              />
              Mark this opportunity as featured
            </label>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 border-t border-[#e4ddce] pt-6">
          <Button type="submit">
            Add Opportunity
          </Button>

          <Button
            type="button"
            variant="secondary"
            onClick={handleCancel}
          >
            Clear Form
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddOpportunityForm;
