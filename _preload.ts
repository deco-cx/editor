import { toData } from "lume/core/loaders/module.ts";
import * as $0 from "./index.tsx";

import type { Site } from "lume/core.ts";

export default function (site: Site) {
  site.cacheFile("/index.tsx", toData($0));
}
