import CoverPage from "./CoverPage";
import BentoPage from "./BentoPage";

export default function Home() {
  return (
    <>
      <div className="frame" aria-hidden="true"></div>
      <section id="cover-slide" className="snap-slide">
        <CoverPage />
      </section>
      <section id="bento-slide" className="snap-slide">
        <BentoPage />
      </section>
    </>
  );
}
