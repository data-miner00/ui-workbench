// https://www.youtube.com/watch?v=blUpQMJjObE
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

function RevealLinks() {
  return (
    <section className="grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
}

function FlipLink({ children, href }: { children: string; href: string }) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl leading-[0.75]"
      href={href}
    >
      <div>
        {children.split("").map((char, index) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((char, index) => (
          <motion.span
            className="inline-block"
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            key={index}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}

function Stagger() {
  return (
    <main>
      <RevealLinks />
    </main>
  );
}

export default Stagger;
