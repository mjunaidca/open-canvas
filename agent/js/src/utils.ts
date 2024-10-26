import { BaseStore, LangGraphRunnableConfig } from "@langchain/langgraph";
import { isArtifactCodeContent } from "@/lib/artifact_content_types";
import {
  ArtifactCodeV3,
  ArtifactMarkdownV3,
  ArtifactV3,
  Reflections
} from "@/types";

import * as fs from 'fs';
import * as path from 'path';

// Helper function to load prompts from a file
export const loadPrompts = (filename: string): { [key: string]: string } => {
  try {
    const filePath = path.resolve(__dirname, `../../../prompts/${filename}`);
    
    // Check if file exists to prevent errors
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filename}`);
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Split and parse prompts based on [HEADER] format
    return content.split(/\[(.+?)\]/).reduce((acc, part, idx, arr) => {
      if (idx % 2 === 1) acc[part.trim()] = arr[idx + 1].trim();
      return acc;
    }, {} as { [key: string]: string });
  } catch (error: any) {
    console.error(`Error loading prompts from ${filename}:`, error.message);
    return {}; // Return an empty object on error
  }
};


export const formatReflections = (
  reflections: Reflections,
  extra?: {
    /**
     * Will only include the style guidelines in the output.
     * If this is set to true, you may not specify `onlyContent` as `true`.
     */
    onlyStyle?: boolean;
    /**
     * Will only include the content in the output.
     * If this is set to true, you may not specify `onlyStyle` as `true`.
     */
    onlyContent?: boolean;
  }
): string => {
  if (extra?.onlyStyle && extra?.onlyContent) {
    throw new Error(
      "Cannot specify both `onlyStyle` and `onlyContent` as true."
    );
  }

  const styleString = `The following is a list of style guidelines previously generated by you:
<style-guidelines>
- ${reflections.styleRules?.length ? reflections.styleRules.join("\n- ") : "No style guidelines found."}
</style-guidelines>`;
  const contentString = `The following is a list of memories/facts you previously generated about the user:
<user-facts>
- ${reflections.content?.length ? reflections.content.join("\n- ") : "No memories/facts found."}
</user-facts>`;

  if (extra?.onlyStyle) {
    return styleString;
  }
  if (extra?.onlyContent) {
    return contentString;
  }

  return styleString + "\n\n" + contentString;
};

export const ensureStoreInConfig = (
  config: LangGraphRunnableConfig
): BaseStore => {
  if (!config.store) {
    throw new Error("`store` not found in config");
  }
  return config.store;
};

export const formatArtifactContent = (
  content: ArtifactMarkdownV3 | ArtifactCodeV3,
  shortenContent?: boolean
): string => {
  let artifactContent: string;

  if (isArtifactCodeContent(content)) {
    artifactContent = shortenContent
      ? content.code?.slice(0, 500)
      : content.code;
  } else {
    artifactContent = shortenContent
      ? content.fullMarkdown?.slice(0, 500)
      : content.fullMarkdown;
  }
  return `Title: ${content.title}\nArtifact type: ${content.type}\nContent: ${artifactContent}`;
};

export const formatArtifactContentWithTemplate = (
  template: string,
  content: ArtifactMarkdownV3 | ArtifactCodeV3,
  shortenContent?: boolean
): string => {
  return template.replace(
    "{artifact}",
    formatArtifactContent(content, shortenContent)
  );
};


export const getArtifactContent = (
  artifact: ArtifactV3
): ArtifactCodeV3 | ArtifactMarkdownV3 => {
  if (!artifact) {
    throw new Error("No artifact found.");
  }
  const currentContent = artifact.contents.find(
    (a) => a.index === artifact.currentIndex
  );
  if (!currentContent) {
    return artifact.contents[artifact.contents.length - 1];
  }
  return currentContent;
};
