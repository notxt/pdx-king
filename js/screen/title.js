import { createContainer } from "../container.js";
import { createH1 } from "../lib.js";
export const createTitleScreen = () => {
    const container = createContainer();
    const h1 = createH1("All City PDX");
    container.setContent(h1);
    return container;
};
//# sourceMappingURL=title.js.map