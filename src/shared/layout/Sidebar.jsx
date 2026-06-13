import avatar from "../../assets/images/avatar.jpg";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useSidebarContext } from "../../features/sidebar-projects/context/SidebarContext";
import {
  SidebarGrowCard,
  SidebarNewProjectForm,
  SidebarOptions,
  SidebarProjectItem,
  SidebarProjectsHeader,
  SidebarUserSection,
} from "../../features/sidebar-projects/components";

import { Link } from "react-router";

import { DEMO_PROJECTS } from "../../utils/PROJECTS";
import { createProject } from "../../features/sidebar-projects/api/createProjects";

const Sidebar = () => {
  const { isSidebarOpen } = useSidebarContext();

  const [projects, setProjects] = useState(DEMO_PROJECTS);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const openProjectFormFromGrow = () => {
    if (projects.length < 3) setShowProjectForm(true);
  };

  const cancelProjectForm = () => {
    setShowProjectForm(false);
  };

  const confirmNewProject = (data) => {
    const newProject = createProject(data);

    if (!newProject) return;

    setProjects((prev) => [...prev, newProject]);

    setShowProjectForm(false);
  };

  return (
    <aside
      className={`${!isSidebarOpen && "hidden"} absolute z-10 sm:static shadow-sm  scrollbar-minimal h-full min-w-0 shrink-0 self-stretch overflow-y-auto border-r border-neutral-200/70 bg-white sm:block w-[min(20rem,calc(100vw-1rem))] sm:min-w-[19rem] sm:w-[19rem] md:min-w-[21rem] md:w-[21rem] lg:min-w-[22rem] lg:w-[22rem]`}
    >
      <div className="flex h-full min-h-0 flex-col">
        <SidebarUserSection avatarSrc={avatar} />

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 pt-2 sm:px-4 sm:pt-3 md:px-5">
          <div className="scrollbar-minimal min-h-0 flex-1 overflow-y-auto pb-2">
            <SidebarProjectsHeader
              onPlusClick={() => setShowProjectForm((open) => !open)}
            />

            {showProjectForm ? (
              <div className="mt-3">
                <SidebarNewProjectForm
                  onConfirm={confirmNewProject}
                  onCancel={cancelProjectForm}
                />
              </div>
            ) : null}

            <ul className="mt-3 flex flex-col gap-3">
              {projects.map((p) => (
                <Link to={`/projects/${p.id}`} key={p.id}>
                  <SidebarProjectItem
                    key={p.id}
                    name={p.project_name}
                    icon={p.Icon}
                    accent={p.accent}
                    isActive={p.isActive}
                    count={p.count}
                  />
                </Link>
              ))}
            </ul>
          </div>

          {projects.length < 3 && (
            <SidebarGrowCard
              className="shrink-0 pb-2"
              onCreateClick={openProjectFormFromGrow}
            />
          )}
        </div>

        <SidebarOptions />
      </div>
    </aside>
  );
};

export default Sidebar;
