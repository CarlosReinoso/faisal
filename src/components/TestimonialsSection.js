import theme from "@/styles/theme";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO of Company",
    quote:
      "This service is amazing! Highly recommend to anyone looking for quality.",
  },
  {
    name: "John Smith",
    role: "Marketing Director",
    quote:
      "A game changer in our industry. Exceptional experience from start to finish.",
  },
  {
    name: "Alice Johnson",
    role: "Product Manager",
    quote:
      "Innovative solutions that meet our needs perfectly. Fantastic support team!",
  },
];

export default function TestimonialsSection() {
  return (
    <div className={`py-12 ${theme.colors.bgSecondary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-white sm:text-4xl">
          Testimonials
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${theme.colors.bgBeige} shadow-lg rounded-lg p-6`}
            >
              <div className="mt-4 text-center">
                <p className="text-lg leading-6 font-medium text-black">
                  {testimonial.name}
                </p>
                <p className="text-sm leading-5 text-black">
                  {testimonial.role}
                </p>
                <p className="mt-3 text-base leading-6 text-black">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
