interface GraphQlClient {
	fetchAllPages(paginatedModels: GraphModel[], options: Object): Promise<GraphModel[]>;

	fetchNextPage(nodeOrNodes: GraphModel | GraphModel[], options: Object): Promise<GraphModel[]>;

	send(request: Query | Mutation | Document | Function, variableValues?: Object, otherProperties?: Object): Promise<Object>;

	query(name?: string, variables?: VariableDefinition[], selectionSetCallback?: Function): Query;

	mutation(name?: string, variables?: VariableDefinition[], selectionSetCallback?: Function): Mutation;
}
