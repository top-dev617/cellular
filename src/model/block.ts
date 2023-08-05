/* The model consists of an acyclic directed graph of Blocks
   The Blocks themselves are stateless, all state is covered in the BlockState */

import { Variable } from "./variables";

// The BlockID is a unique identifier of a Block in a Model
export type BlockID = string;

export interface BlockInput {
    blockID: BlockID;
    variables: Variable["name"][];
}

export interface BlockBase {
    blockID: BlockID;

    inputs: BlockInput[];
    output: Variable[];
}

export interface ScriptBlock extends BlockBase {
    type: 'javascript';
    title: string;
    script: string;
}

export interface MarkdownBlock extends BlockBase {
    type: 'markdown';
    content: string;
}

export interface DataSourceBlock extends BlockBase {
    type: "datasource";
    sourcetype: "csv" | "json";
    path: string;
    name: string;
}

export interface VisualizeBlock extends BlockBase {
    type: "visualize";
    name: string;
    dimensions: string[];
    graphtype: "table" | "histogram" | "boxplot";
}

export type Block = ScriptBlock | MarkdownBlock | DataSourceBlock | VisualizeBlock;

export type UpdateBlock<It extends Block> = (current: It, update: Partial<It>) => void;