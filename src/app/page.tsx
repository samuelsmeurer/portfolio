import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { Stack } from "@/components/sections/Stack";
import { Nomad } from "@/components/sections/Nomad";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <Hero />
      <Pillars />
      <TrackRecord />
      <Stack />
      <Nomad />
      <Contact />
    </main>
  );
}
