import { PROJECTS, Project } from '../lib/site';

const MONOGRAM_COLORS = [
  'bg-accent text-paper',
  'bg-ink text-paper',
  'bg-[#7C2D12] text-paper',
  'bg-[#1E3A5F] text-paper',
];

const ProjectCardView = ({ project, index, large = false }: { project: Project; index: number; large?: boolean }) => (
  <article className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-pop">
    <div
      className={`flex items-center justify-center ${large ? 'h-52 sm:h-64' : 'h-36'} ${
        MONOGRAM_COLORS[index % MONOGRAM_COLORS.length]
      }`}
    >
      <span className={`font-serif font-semibold tracking-tight ${large ? 'text-7xl' : 'text-5xl'}`}>
        {project.title.charAt(0)}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
        </div>
        {project.featured && (
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
            Live product
          </span>
        )}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink-muted ring-1 ring-line">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm font-semibold">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent hover:text-accent-dark">
            Visit live ↗
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-ink">
            Code ↗
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <section id="projects" className="border-y border-line bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="section-eyebrow mb-3">Projects</p>
          <h2 className="section-title">Things I have built</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Real products with real users, not tutorial clones. RankRaja and BillDrop are
            live right now - click through and try them.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.filter((p) => p.featured).map((project, i) => (
            <ProjectCardView key={project.title} project={project} index={i} large />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.filter((p) => !p.featured).map((project, i) => (
            <ProjectCardView key={project.title} project={project} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
