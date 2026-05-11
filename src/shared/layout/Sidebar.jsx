import {
  Briefcase,
  Home,
  Lightbulb,
  Pencil,
  Rocket,
} from "lucide-react";
import avatar from "../../assets/images/avatar.jpg";
import { useRef, useState } from "react";
import { useSidebarContext } from "../../features/sidebar/context/SidebarContext";
import {
  SidebarGrowCard,
  SidebarNewProjectForm,
  SidebarOptions,
  SidebarProjectItem,
  SidebarProjectsHeader,
  SidebarUserSection,
} from "../../features/sidebar/components";
import { useReducedWheelScroll } from "../hooks/useReducedWheelScroll";

const INITIAL_PROJECTS = [
  {
    id: "1",
    name: "General",
    Icon: Rocket,
    accent: "rose",
    isActive: true,
    count: 4,
  },
  {
    id: "2",
    name: "Personal Work",
    Icon: Briefcase,
    accent: "purple",
    isActive: false,
  },
  {
    id: "3",
    name: "Side Hustle",
    Icon: Lightbulb,
    accent: "blue",
    isActive: false,
  },
  {
    id: "4",
    name: "Extra",
    Icon: Pencil,
    accent: "pink",
    isActive: false,
  },
  {
    id: "5",
    name: "Home Chores",
    Icon: Home,
    accent: "green",
    isActive: false,
  },
];

const Sidebar = () => {
  const { isSidebarOpen } = useSidebarContext();
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const asideScrollRef = useRef(null);
  const projectListScrollRef = useRef(null);
  useReducedWheelScroll(asideScrollRef, 0.58);
  useReducedWheelScroll(projectListScrollRef, 0.58);

  const openProjectFormFromGrow = () => {
    if (projects.length < 3) setShowProjectForm(true);
  };

  const cancelProjectForm = () => {
    setShowProjectForm(false);
    setNewProjectName("");
  };

  const confirmNewProject = () => {
    const name = newProjectName.trim();
    if (!name) return;
    setProjects((prev) => [
      ...prev,
      {
        id: `p-${Date.now()}`,
        name,
        Icon: Briefcase,
        accent: "purple",
        isActive: false,
      },
    ]);
    setNewProjectName("");
    setShowProjectForm(false);
  };

  return (
    <aside
      ref={asideScrollRef}
      className={`${!isSidebarOpen && "hidden"} scrollbar-minimal h-full min-w-0 shrink-0 self-stretch overflow-y-auto border-r border-neutral-200/70 bg-white sm:block w-[min(20rem,calc(100vw-1rem))] sm:min-w-[19rem] sm:w-[19rem] md:min-w-[21rem] md:w-[21rem] lg:min-w-[22rem] lg:w-[22rem]`}
    >
      <div className="flex h-full min-h-0 flex-col">
        <SidebarUserSection avatarSrc={avatar} />

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 pt-2 sm:px-4 sm:pt-3 md:px-5">
          <div
            ref={projectListScrollRef}
            className="scrollbar-minimal min-h-0 flex-1 overflow-y-auto pb-2"
          >
            <SidebarProjectsHeader
              onPlusClick={() => setShowProjectForm((open) => !open)}
            />

            {showProjectForm ? (
              <div className="mt-3">
                <SidebarNewProjectForm
                  value={newProjectName}
                  onChange={setNewProjectName}
                  onConfirm={confirmNewProject}
                  onCancel={cancelProjectForm}
                />
              </div>
            ) : null}

            <ul className="mt-3 flex flex-col gap-3">
              {projects.map((p) => (
                <SidebarProjectItem
                  key={p.id}
                  name={p.name}
                  icon={p.Icon}
                  accent={p.accent}
                  isActive={p.isActive}
                  count={p.count}
                />
              ))}
            </ul>
          </div>

          {projects.length < 3 ? (
            <SidebarGrowCard
              className="shrink-0 pb-2"
              onCreateClick={openProjectFormFromGrow}
            />
          ) : null}
        </div>

        <SidebarOptions />
      </div>
    </aside>
  );
};

export default Sidebar;
