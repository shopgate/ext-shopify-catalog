interface GetCategoryContext extends PipelineContext {
  input: GetCategoryInput
}

interface GetCategoryInput {
  categoryId: string
  includeChildren: boolean
  childrenSort: string
}
