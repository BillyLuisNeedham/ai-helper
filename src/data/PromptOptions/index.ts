import { checklistOption } from "./checklistQuestions";
import { comparisonOption } from "./comparisonQuestions";
import { explainerOption } from "./explainerQuestions";
import { faqOption } from "./faqQuestions";
import { guideOption } from "./guideQuestions";
import { recommendationsOption } from "./recommendationsQuestions";
import { scenarioAnalysisOption } from "./scenarioAnalysisQuestions";
import { swissOption } from "./swissQuestions";
import { swotOption } from "./swotQuestions";
import { tutorialOption } from "./tutorialQuestions";

export const promptOptions: PromptOption[] = [
    guideOption,
    swissOption,
    faqOption,
    checklistOption,
    swotOption,
    scenarioAnalysisOption,
    tutorialOption,
    comparisonOption,
    explainerOption,
    recommendationsOption,
]