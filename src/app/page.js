import HeroForm from "@/components/form/HeroForm";

export default function Home() {
  return (
    <main>
      <section className="pt-32">
        {/* heading */}
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one Link <br /> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links , social profiles, and other information in one
            page
          </h2>
        </div>

        {/* form */}

        <div>
          <HeroForm />
        </div>
      </section>
    </main>
  );
}
