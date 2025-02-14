import { createRule } from "../utils"

import sortCharacterClassElements from "./sort-character-class-elements"

export default createRule("order-in-character-class", {
    meta: {
        ...sortCharacterClassElements.meta,
        docs: {
            ...sortCharacterClassElements.meta.docs,
            recommended: false,
            replacedBy: ["sort-character-class-elements"],
        },
        deprecated: true,
    },
    create(context) {
        return sortCharacterClassElements.create(context)
    },
})
