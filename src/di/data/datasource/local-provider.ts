import {Container} from "inversify";
import {TypesMap} from "@/di/container.type";
import {Database} from "@nozbe/watermelondb";
import database from "@/data/datasource/local/impl/watermelon";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<Database>(types.watermelon).toConstantValue(database);
}

export default configure;
