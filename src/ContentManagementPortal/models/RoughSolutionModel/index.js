import { observable, action } from 'mobx';

class RoughSolutionModel {
    @observable id;
    @observable fileName;
    @observable languageType;
    @observable content;

    constructor(data) {
        this.roughsolution_id = data.roughsolution_id;
        this.languageType = data.code_type;
        this.content = data.code;
        this.fileName = data.filename;
        this.id = data.delete_id;
    }
}

export default RoughSolutionModel;
