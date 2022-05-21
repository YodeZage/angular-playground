import { INavMap } from "@ap/shared/interfaces/nav-map";

export const FullNavList: Map<string, INavMap> = new Map<string, INavMap>([
  [
    "Animation",
    {
      name: "Animation",
      path: "/animations",
      description: "Make a website vivid with CSS transaction and animation",
      subPath: [
        {name: "Basic", path: "basic"},
        {name: "Transitions and Triggers", path: "transition-trigger"}
      ]
    }
  ]
]);
