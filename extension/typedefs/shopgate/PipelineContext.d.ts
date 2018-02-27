class PipelineContext {
    public config : PipelineConfiguration;
    public log : PipelineLogger;
    public storage : PipelineStorageContainer;
}

class PipelineStorageContainer {
    public user : object;
    public device : object;
}

class PipelineConfiguration {

}

class PipelineLogger {
    public error : Function;
    public debug : Function;
    public info : Function;
}
