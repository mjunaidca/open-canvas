import { loadPrompts } from "../utils";

// Load only reflection prompts
const reflectionPrompts = loadPrompts('reflection/reflection.txt');

// Export each reflection prompt as a constant
export const REFLECT_SYSTEM_PROMPT = reflectionPrompts['REFLECT_SYSTEM_PROMPT'];
export const REFLECT_USER_PROMPT = reflectionPrompts['REFLECT_USER_PROMPT'];

// Export all reflection prompts for dynamic access if needed
export default reflectionPrompts;
