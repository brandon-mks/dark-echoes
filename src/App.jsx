import { episodeList } from "./data";
import { useState } from "react";

export default function App() {
  /* Question:
  set episode is only needed when we are intending to
  change content within episode[]?
  ie. it is static in this workshop, so technically
  not needed?
  */
  const [episodes, setEpisodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        /* Question: this section tag is needed to enclose/wrap
      everything within one element? */
        <section className="details">
          <h2>Expand</h2>
          <p>Select an episode for more details.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>{selectedEpisode.titel}</h2>
        <p>
          Episode {selectedEpisode.id}: {selectedEpisode.title}.
          <br />
          Episode description: {selectedEpisode.description}.
        </p>
      </section>
    );
  }

  function AllEpisodes() {
    return (
      <section className="allEpisodes">
        <h2>All Episodes</h2>
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
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <AllEpisodes />
        <EpisodeDetails />
      </main>
    </>
  );
}
