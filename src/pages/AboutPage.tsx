import { Github, Layers, Route, SearchCheck } from 'lucide-react';
import { About, Feature, FeatureGrid, Intro } from './AboutPage.styles';

export function AboutPage() {
  return (
    <About>
      <Intro>
        <span>About this build</span>
        <h1>A compact front-end assignment with production habits.</h1>
        <p>
          Pet Picks uses fetch, typed data guards, route-aware pages, persistent global
          selection, responsive gallery pagination, and styled-components throughout.
        </p>
      </Intro>

      <FeatureGrid>
        <Feature>
          <SearchCheck size={24} />
          <h2>Search and sort</h2>
          <p>Filter by title or description, then sort by name or creation date.</p>
        </Feature>
        <Feature>
          <Layers size={24} />
          <h2>State that lasts</h2>
          <p>Selections live in context so moving between routes does not reset them.</p>
        </Feature>
        <Feature>
          <Route size={24} />
          <h2>Dynamic routes</h2>
          <p>Each pet has a dedicated detail view at /pets/:id.</p>
        </Feature>
        <Feature>
          <Github size={24} />
          <h2>Reviewable code</h2>
          <p>Small hooks and components keep behavior isolated and easy to discuss.</p>
        </Feature>
      </FeatureGrid>
    </About>
  );
}
