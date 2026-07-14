import { Client } from "@notionhq/client";

export interface Logbook {
  id: string;
  title: string;
  status: string;
  project: string;
  deadline: string;
  description: string;
  technologies: string[];
  assignee: string;
}

// ponytail: direct instantiation of Notion Client from sanitized environment variables
const notionToken = process.env.NOTION_TOKEN?.trim();
const databaseId = process.env.NOTION_DATABASE_ID?.trim();
const notion = new Client({ auth: notionToken });

// ponytail: unified property getter reducing duplicate block parsing code into a single method
const getVal = (prop: any, type: string): any => {
  if (!prop || prop.type !== type) return type === "multi_select" ? [] : "";
  const map: Record<string, () => any> = {
    title: () => prop.title?.map((t: any) => t.plain_text).join("") || "",
    rich_text: () => prop.rich_text?.map((r: any) => r.plain_text).join("") || "",
    select: () => prop.select?.name || "",
    status: () => prop.status?.name || "",
    date: () => prop.date?.start || "",
    multi_select: () => prop.multi_select?.map((m: any) => m.name) || [],
    people: () => prop.people?.map((p: any) => p.name || "").filter(Boolean).join(", ") || ""
  };
  return map[type] ? map[type]() : "";
};

// ponytail: clean ES6 matches scan to detect project categories
const detectProject = (title: string, current: string): string => {
  if (current && current !== "null") return current;
  const match = ["QEYE", "ORIONT", "CILT", "GreenTAG"].find(p => title.toUpperCase().includes(p));
  return match || ["QEYE", "ORIONT", "CILT", "GreenTAG"][title.length % 4];
};

// ponytail: clean mapping object to scan keywords and build tech tags
const detectTechnologies = (title: string, current: string[]): string[] => {
  if (current?.length) return current;
  const keywords: Record<string, string[]> = {
    TypeScript: ["TYPESCRIPT", "TS"],
    React: ["REACT", "FRONTEND"],
    Express: ["EXPRESS"],
    "Node.js": ["NODE"],
    "SQL Server": ["SQL", "DATABASE"],
    Docker: ["DOCKER"],
    PM2: ["PM2"],
    Astro: ["ASTRO"],
    Python: ["PYTHON", "ML", "AI"],
    DevOps: ["FIREWALL", "UFW", "DEVOPS"]
  };
  const detected = Object.entries(keywords)
    .filter(([_, keys]) => keys.some(k => title.toUpperCase().includes(k)))
    .map(([tech]) => tech);
  return detected.length ? detected : [["React", "TypeScript"], ["Node.js", "Express"], ["SQL Server", "Database"], ["Docker", "DevOps"]][title.length % 4];
};

export async function getLogbooks(): Promise<Logbook[]> {
  // ponytail: fallback mock data in development/absence of keys
  if (!notionToken || !databaseId) {
    console.warn("NOTION_TOKEN or NOTION_DATABASE_ID is missing. Using fallback mock data.");
    return [
      { id: "mock-1", title: "Deploy Backend QEYE V2 Express TypeScript to VPS and Configure PM2", status: "Completed", project: "QEYE", deadline: "2026-07-14", description: "Successfully deployed backend to VPS and configured PM2.", technologies: ["QEYE", "Backend", "Express", "TypeScript", "PM2"], assignee: "Riovaldo" },
      { id: "mock-2", title: "Configure Firewall for Backend Service", status: "Completed", project: "QEYE", deadline: "2026-07-13", description: "Set up and hardened UFW firewall rules on production Ubuntu server.", technologies: ["Ubuntu", "Firewall", "DevOps"], assignee: "Riovaldo" },
      { id: "mock-3", title: "Integrate QEYE Frontend with Production API", status: "Completed", project: "QEYE", deadline: "2026-07-12", description: "Connected React frontend dashboard with production API endpoints.", technologies: ["Frontend", "React", "REST API"], assignee: "Riovaldo" },
      { id: "mock-4", title: "Implement Real-time WebSocket Gateway for ORIONT Dashboard", status: "Completed", project: "ORIONT", deadline: "2026-07-06", description: "Established Socket.io gateway to push live batch updates.", technologies: ["ORIONT", "Backend", "Node.js", "WebSockets"], assignee: "Riovaldo" },
      { id: "mock-5", title: "Optimize SQL Queries for ORIONT Production Reports", status: "Completed", project: "ORIONT", deadline: "2026-06-25", description: "Refactored slow, multi-join queries in SQL Server.", technologies: ["ORIONT", "Database", "SQL Server", "Performance"], assignee: "Riovaldo" },
      { id: "mock-6", title: "Develop CILT Inspection Checklist Form UI", status: "Completed", project: "CILT", deadline: "2026-06-18", description: "Built CILT checklist UI for technicians using React and Tailwind.", technologies: ["CILT", "Frontend", "React", "TypeScript"], assignee: "Riovaldo" },
      { id: "mock-7", title: "Set Up Docker Compose for ORIONT Local Development", status: "Completed", project: "ORIONT", deadline: "2026-06-10", description: "Containerized SQL Server and Redis for local dev.", technologies: ["ORIONT", "DevOps", "Docker"], assignee: "Riovaldo" },
      { id: "mock-8", title: "Refactor Notification Dispatcher in QEYE Microservice", status: "Completed", project: "QEYE", deadline: "2026-06-03", description: "Asynchronous alerts dispatcher using Node.js event emitters.", technologies: ["QEYE", "Backend", "Node.js", "Express"], assignee: "Riovaldo" },
      { id: "mock-9", title: "Implement JWT Authentication in QEYE Gateway", status: "Completed", project: "QEYE", deadline: "2026-05-28", description: "Secured backend endpoints with JWT stored in HTTP-only cookies.", technologies: ["QEYE", "Backend", "Node.js", "Express", "JWT"], assignee: "Riovaldo" },
      { id: "mock-10", title: "Design GreenTAG Digital Inspection Database Schema", status: "Completed", project: "GreenTAG", deadline: "2026-05-15", description: "Designed SQL Server tables to track inspection notes.", technologies: ["GreenTAG", "Database", "SQL Server"], assignee: "Riovaldo" }
    ];
  }

  // ponytail: retrieve data_source_id dynamically
  let dataSourceId = databaseId;
  try {
    const dbResponse = await notion.request({
      path: `databases/${databaseId}`,
      method: "get",
    }) as { data_sources?: { id: string }[] };
    if (dbResponse?.data_sources?.length) {
      dataSourceId = dbResponse.data_sources[0].id;
    }
  } catch (err) {
    console.warn("Failed to retrieve database metadata. Querying databases directly fallback.", err);
  }

  // ponytail: query the data source using POST request
  const response = await notion.request({
    path: `data_sources/${dataSourceId}/query`,
    method: "post",
    body: { sorts: [{ property: "Deadline", direction: "descending" }] },
  }) as { results: any[] };

  return response.results.map((page: any) => {
    const props = page.properties;
    const titleKey = Object.keys(props).find(k => props[k].type === "title") || "Name";
    
    const rawTitle = getVal(props[titleKey], "title");
    const rawStatus = getVal(props.Status, "status") || getVal(props.Status, "select") || "In Progress";
    const rawProject = getVal(props.Team, "select") || getVal(props.Project, "select") || "";
    const rawDeadline = getVal(props.Deadline, "date") || new Date(page.created_time).toISOString().split('T')[0];
    const rawDescription = getVal(props.Description, "rich_text") || rawTitle;
    const rawTechnologies = getVal(props["AI keywords"], "multi_select").length ? getVal(props["AI keywords"], "multi_select") : getVal(props.Technologies, "multi_select");
    const rawAssignee = getVal(props.Assign, "people") || getVal(props.Assignee, "people") || getVal(props.Assign, "select") || getVal(props.Assignee, "select") || getVal(props.Assign, "rich_text") || getVal(props.Assignee, "rich_text");

    const title = rawTitle || "Untitled Task";
    const project = detectProject(title, rawProject);
    const technologies = detectTechnologies(title, rawTechnologies);

    return {
      id: page.id,
      title,
      status: rawStatus,
      project,
      deadline: rawDeadline,
      description: rawDescription,
      technologies,
      assignee: rawAssignee || "Riovaldo"
    };
  });
}
