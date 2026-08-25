import omletteImage from "@/assets/images/image-omelette.webp";
import { data } from "@/data/data";
import Image from "next/image";

export default function Home() {
  const {
    title,
    description,
    preparationTime,
    ingredients,
    instructions,
    nutrition,
  } = data;
  return (
    <main className="text-preset-4 max-w-184 bg-white text-stone-600 sm:my-32 sm:rounded-3xl sm:p-10">
      <Image
        src={omletteImage}
        alt={title}
        width={1312}
        height={600}
        sizes="(min-width: 1024px) 41rem, (min-width: 768px) 33.5rem, 100vw"
        fetchPriority="high"
        loading="eager"
        className="rounded-xl"
      />

      <div className="mt-10 space-y-8 px-8 pb-10 sm:p-0">
        <h1 className="text-preset-1 text-stone-900">{title}</h1>
        <p>{description}</p>
        <section className="space-y-4 rounded-xl bg-rose-50 p-6">
          <h2 className="text-preset-3 text-rose-800">
            {preparationTime.title}
          </h2>
          <ul className="list-inside list-disc space-y-2">
            {preparationTime.items.map((item) => (
              <li className="marker:text-rose-800" key={item.label}>
                <span className="text-preset-4-bold">{item.label}:</span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-preset-2 text-brown-800">{ingredients.title}</h2>
          <ul className="list-outside list-disc space-y-2 ps-5">
            {ingredients.items.map((item) => (
              <li className="marker:text-brown-800 ps-4" key={item.label}>
                {item.label}
              </li>
            ))}
          </ul>
        </section>
        <hr className="border-stone-150" />
        <section>
          <h2 className="text-preset-2 text-brown-800 mb-6">
            {instructions.title}
          </h2>
          <ol className="marker:text-brown-800 marker:text-preset-4-bold list-decimal space-y-2 ps-5 marker:proportional-nums">
            {instructions.items.map((item) => (
              <li className="ps-4" key={item.label}>
                <span className="text-preset-4-bold">{item.label}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ol>
        </section>
        <hr className="border-stone-150" />
        <section className="space-y-6">
          <h2 className="text-preset-2 text-brown-800">{nutrition.title}</h2>
          <p>{nutrition.description}</p>
          <table className="w-full">
            <tbody>
              {nutrition.items.map((item) => (
                <tr
                  key={item.label}
                  className="border-stone-150 not-last:border-b"
                >
                  <td className="not-last:py-3">{item.label}</td>
                  <td className="text-preset-4-bold text-brown-800 not-last:py-3">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
