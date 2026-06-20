import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const testimonials = [
  {
    name: "Hauz Capital",
    quote:
      "We hired this SEO agency in Kuala Lumpur to improve our online visibility, and the results have been fantastic! They offered a complete strategy, from on-page SEO to building good quality backlinks that actually made a difference. Our organic traffic has grown, and our rankings have improved across multiple keywords. The team was knowledgeable and always available for updates. If you need the best SEO services in KL, this agency is the one to go with!",
  },
  {
    name: "Tehmina Bukhari",
    quote:
      "This team is simply the best when it comes to digital marketing and search engine optimization. Their expertise in SEO has helped my business stay ahead of the competition and reach a wider audience. I couldn't be happier with their results and highly recommend them to any business looking to improve their online marketing efforts.",
  },
  {
    name: "Babar Hussain",
    quote:
      "I have been working with this SEO agency for several months now and I am beyond impressed with their digital marketing and search engine optimization skills. Their team is knowledgeable, friendly, and always available to answer any questions I have. I highly recommend them for anyone looking to improve their online visibility and drive more traffic to their website.",
  },
  {
    name: "Bilal Rawn",
    quote:
      "I recently hired this SEO agency for its digital marketing expertise and I am extremely impressed with the results. They have a deep understanding of search marketing and SEO and have helped my business achieve higher search engine rankings and increased online visibility. I highly recommend them to anyone looking to improve their online presence.",
  },
  {
    name: "Muhammad Adnan Rana",
    quote:
      "If you're looking for a top-notch SEO agency that specializes in digital marketing and search marketing, look no further. This team is professional, knowledgeable, and always delivers results. I have seen a significant increase in my online visibility and search engine rankings since hiring them. I highly recommend them to any business looking to improve their online presence.",
  },
  {
    name: "MD. Shafayatul Haque",
    quote:
      "Daiki Media has made my business smooth. They are great with SEO and WordPress development which is far better than any other service provider. They provide website with 90+ google page speed score, which makes it easier to rank the website on Google.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-36">
      <Container className="relative">
        <div className="mx-auto mb-12 max-w-[550px] text-center">
          <p className="mb-3 font-medium leading-[1.3] uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            What our customer’s say about our company
          </h2>
        </div>

        <div className="relative z-10">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/20 blur-[145px]"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                className="rounded-md bg-white p-2.5 shadow-sm dark:bg-card"
                delay={(index % 3) * 100}
                key={testimonial.name}
              >
                <div className="flex h-full flex-col rounded border border-dashed border-gray-100 p-6 dark:border-white/10 sm:p-8">
                  <div className="pb-7">
                    <h3 className="text-base font-semibold">
                      {testimonial.name}
                    </h3>
                  </div>
                  <blockquote className="mb-7 flex-1 italic leading-[1.75] text-muted-foreground dark:text-white">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="border-t border-dashed border-gray-100 pt-7 dark:border-white/10" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
