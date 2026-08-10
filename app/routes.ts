import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("resume", "routes/resume.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
