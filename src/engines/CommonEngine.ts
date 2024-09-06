import IEngine from "@/engines/IEngine";
import {message} from "ant-design-vue";
import {App, getCurrentInstance} from "vue";

export default class CommonEngine implements IEngine {
    Run(app: App): void {
        self.$message = message;
        self.__instance = getCurrentInstance
    }

    public Priority() {
        return 0
    }
}