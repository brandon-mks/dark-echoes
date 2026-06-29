import { episodeList } from "./data";
import { useState } from "react";

export default function App() {
  /* Question:
  setEpisodes is only needed when we are intending to
  change content within episodes[]?
  ie. it is static in this workshop, so technically
  not needed?
  */
  const [episodes /*, setEpisodes*/] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        /* Question:
        this section tag is needed to enclose/wrap
      everything within one element? */
        <section className="details">
          <h2>Expand</h2>
          <p>Select an episode for more details.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>
          Episode {selectedEpisode.id}: {selectedEpisode.title}.
          <br />
          <br />
          Episode description: {selectedEpisode.description}.
        </p>
        <a
          href="https://www.disneyplus.com/browse/entity-5e474669-a4a2-4b90-a928-5ae7f845090c"
          target="_new"
        >
          Start ▶
        </a>
      </section>
    );
  }

  function AllEpisodes() {
    return (
      <section className="allEpisodes">
        <h2 onClick={() => setSelectedEpisode()}>All Episodes</h2>
        <ul className="actualEpisodes">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1 className="metal-mania-regular">Dark Echoes</h1>
      </header>
      <main>
        <AllEpisodes />
        <EpisodeDetails />
      </main>
    </>
  );
}
