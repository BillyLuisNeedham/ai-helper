import { checklistOption } from "./checklistQuestions";
import { faqOption } from "./faqQuestions";
import { guideOption } from "./guideQuestions";
import { swissOption } from "./swissQuestions";
import { swotOption } from "./swotQuestions";

export const promptOptions: PromptOption[] = [
    guideOption,
    swissOption,
    faqOption,
    checklistOption,
    swotOption,
]