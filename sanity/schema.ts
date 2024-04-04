import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import ytType from "./schemaTypes/ytType";
import project from "./schemaTypes/project";
import hoyo from "./schemaTypes/hoyo";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, author, category, blockContent, ytType, project, hoyo],
};
