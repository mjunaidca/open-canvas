import { loadPrompts } from "../utils";

// Load all prompts from `open-canvas.txt`
const prompts = loadPrompts('open-canvas/open-canvas.txt');

// Export each prompt as a constant for easy, named access
export const DEFAULT_CODE_PROMPT_RULES = prompts['DEFAULT_CODE_PROMPT_RULES'];
export const APP_CONTEXT = prompts['APP_CONTEXT'];
export const NEW_ARTIFACT_PROMPT = prompts['NEW_ARTIFACT_PROMPT'];
export const UPDATE_HIGHLIGHTED_ARTIFACT_PROMPT = prompts['UPDATE_HIGHLIGHTED_ARTIFACT_PROMPT'];
export const GET_TITLE_TYPE_REWRITE_ARTIFACT = prompts['GET_TITLE_TYPE_REWRITE_ARTIFACT'];
export const OPTIONALLY_UPDATE_META_PROMPT = prompts['OPTIONALLY_UPDATE_META_PROMPT'];
export const UPDATE_ENTIRE_ARTIFACT_PROMPT = prompts['UPDATE_ENTIRE_ARTIFACT_PROMPT'];
export const CHANGE_ARTIFACT_LANGUAGE_PROMPT = prompts['CHANGE_ARTIFACT_LANGUAGE_PROMPT'];
export const CHANGE_ARTIFACT_READING_LEVEL_PROMPT = prompts['CHANGE_ARTIFACT_READING_LEVEL_PROMPT'];
export const CHANGE_ARTIFACT_TO_PIRATE_PROMPT = prompts['CHANGE_ARTIFACT_TO_PIRATE_PROMPT'];
export const CHANGE_ARTIFACT_LENGTH_PROMPT = prompts['CHANGE_ARTIFACT_LENGTH_PROMPT'];
export const ADD_EMOJIS_TO_ARTIFACT_PROMPT = prompts['ADD_EMOJIS_TO_ARTIFACT_PROMPT'];
export const ROUTE_QUERY_OPTIONS_HAS_ARTIFACTS = prompts['ROUTE_QUERY_OPTIONS_HAS_ARTIFACTS'];
export const ROUTE_QUERY_OPTIONS_NO_ARTIFACTS = prompts['ROUTE_QUERY_OPTIONS_NO_ARTIFACTS'];
export const CURRENT_ARTIFACT_PROMPT = prompts['CURRENT_ARTIFACT_PROMPT'];
export const NO_ARTIFACT_PROMPT = prompts['NO_ARTIFACT_PROMPT'];
export const ROUTE_QUERY_PROMPT = prompts['ROUTE_QUERY_PROMPT'];
export const FOLLOWUP_ARTIFACT_PROMPT = prompts['FOLLOWUP_ARTIFACT_PROMPT'];
export const ADD_COMMENTS_TO_CODE_ARTIFACT_PROMPT = prompts['ADD_COMMENTS_TO_CODE_ARTIFACT_PROMPT'];
export const ADD_LOGS_TO_CODE_ARTIFACT_PROMPT = prompts['ADD_LOGS_TO_CODE_ARTIFACT_PROMPT'];
export const FIX_BUGS_CODE_ARTIFACT_PROMPT = prompts['FIX_BUGS_CODE_ARTIFACT_PROMPT'];
export const PORT_LANGUAGE_CODE_ARTIFACT_PROMPT = prompts['PORT_LANGUAGE_CODE_ARTIFACT_PROMPT'];
export const REFLECTIONS_QUICK_ACTION_PROMPT = prompts['REFLECTIONS_QUICK_ACTION_PROMPT'];
export const CUSTOM_QUICK_ACTION_ARTIFACT_PROMPT_PREFIX = prompts['CUSTOM_QUICK_ACTION_ARTIFACT_PROMPT_PREFIX'];
export const CUSTOM_QUICK_ACTION_CONVERSATION_CONTEXT = prompts['CUSTOM_QUICK_ACTION_CONVERSATION_CONTEXT'];
export const CUSTOM_QUICK_ACTION_ARTIFACT_CONTENT_PROMPT = prompts['CUSTOM_QUICK_ACTION_ARTIFACT_CONTENT_PROMPT'];

// Export the prompts object in case accessing dynamically is needed
export default prompts;