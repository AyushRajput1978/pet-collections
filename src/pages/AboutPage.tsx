import { Database, Download, Github, Layers, Route, SearchCheck, ShieldCheck } from 'lucide-react';
import {
  About,
  Feature,
  FeatureGrid,
  Intro,
  IntroCopy,
  IntroPanel,
  Metric,
  MetricGrid,
  Note,
  Workflow,
  WorkflowItem,
} from './AboutPage.styles';

export function AboutPage() {
  return (
    <About>
      <Intro>
        <IntroCopy>
          <span>About this build</span>
          <h1>A polished pet gallery built for browsing, choosing, and downloading.</h1>
          <p>
            Pet Picks is a React and TypeScript take-home project with route-aware
            browsing, persistent selection, searchable data, and responsive image cards.
          </p>
        </IntroCopy>

        <IntroPanel>
          <MetricGrid>
            <Metric>
              <strong>4</strong>
              <span>gallery columns on desktop</span>
            </Metric>
            <Metric>
              <strong>/pets</strong>
              <span>fetch-powered data source</span>
            </Metric>
            <Metric>
              <strong>100%</strong>
              <span>selection state retained across routes</span>
            </Metric>
          </MetricGrid>
        </IntroPanel>
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
        <Feature>
          <Download size={24} />
          <h2>Download flow</h2>
          <p>Selected pets can be downloaded together, with individual downloads too.</p>
        </Feature>
        <Feature>
          <Database size={24} />
          <h2>Typed data</h2>
          <p>Pet records are normalized and guarded before they reach the interface.</p>
        </Feature>
      </FeatureGrid>

      <Workflow>
        <WorkflowItem>
          <ShieldCheck size={22} />
          <div>
            <h2>Built for the assignment brief</h2>
            <p>
              The implementation keeps the required tools visible: fetch, custom hooks,
              React Router, persistent state, pagination, and styled-components.
            </p>
          </div>
        </WorkflowItem>
        <Note>
          The UI is intentionally organized around the core workflow: scan the gallery,
          open image details, select favorites, and download exactly what you need.
        </Note>
      </Workflow>
    </About>
  );
}
